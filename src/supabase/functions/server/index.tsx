import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import * as kv from "./kv_store.tsx";
import { getRelevantContext } from "./historical_context.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-4e12d5d5/health", (c) => {
  return c.json({ status: "ok" });
});

// Chat endpoint for RAG AI assistant
app.post("/make-server-4e12d5d5/chat", async (c) => {
  try {
    const formData = await c.req.formData();
    const message = formData.get('message') as string;
    const imageFile = formData.get('image') as File | null;

    console.log('Chat request received:', { message, hasImage: !!imageFile });

    if (!message && !imageFile) {
      return c.json({ error: 'Message or image is required' }, 400);
    }

    // Get relevant historical context
    const context = getRelevantContext(message || '');

    // Check if OpenAI API key is available (works in Deno and Node)
    const openaiApiKey =
      (globalThis as any).Deno?.env?.get?.('OPENAI_API_KEY') ??
      (typeof process !== 'undefined' ? (process as any).env?.OPENAI_API_KEY : undefined);
    
    if (!openaiApiKey) {
      console.error('OPENAI_API_KEY environment variable is not set');
      return c.json({ 
        error: 'AI service not configured. Please set up the OpenAI API key.',
        response: 'I apologize, but the AI service is not currently configured. To enable me to answer your questions, please provide an OpenAI API key through the environment settings.'
      }, 500);
    }

    // Prepare messages for OpenAI
    const messages: any[] = [
      {
        role: 'system',
        content: `Bạn là trợ lý lịch sử Việt Nam am hiểu về giai đoạn 1945-1975, đặc biệt tập trung vào Đảng Cộng sản Việt Nam.

Sử dụng bối cảnh lịch sử này để trả lời câu hỏi:

${context}

Hãy cung cấp câu trả lời chính xác, nhiều thông tin và cân bằng. Nếu không chắc chắn về chi tiết cụ thể, hãy thừa nhận điều đó. Ưu tiên trả lời bằng tiếng Việt, nhưng có thể sử dụng tiếng Anh nếu người dùng hỏi bằng tiếng Anh.`
      }
    ];

    // Handle image if provided
    if (imageFile) {
      const imageBuffer = await imageFile.arrayBuffer();
      const base64Image = btoa(String.fromCharCode(...new Uint8Array(imageBuffer)));
      
      messages.push({
        role: 'user',
        content: [
          {
            type: 'text',
            text: message || 'Vui lòng phân tích hình ảnh lịch sử này từ thời kỳ 1945-1975 và cung cấp bối cảnh về những gì nó thể hiện, thời gian có thể xảy ra, và ý nghĩa lịch sử của nó.'
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:${imageFile.type};base64,${base64Image}`
            }
          }
        ]
      });
    } else {
      messages.push({
        role: 'user',
        content: message
      });
    }

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
      },
      body: JSON.stringify({
        model: imageFile ? 'gpt-4o' : 'gpt-4o-mini',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${openaiResponse.status} - ${errorData}`);
    }

    const openaiData = await openaiResponse.json();
    const assistantResponse = openaiData.choices[0].message.content;

    // Store conversation in KV store for potential future use
    const conversationId = `chat_${Date.now()}`;
    await kv.set(conversationId, {
      userMessage: message,
      hasImage: !!imageFile,
      assistantResponse,
      timestamp: new Date().toISOString()
    });

    console.log('Chat response generated successfully');

    return c.json({ response: assistantResponse });

  } catch (error) {
    console.error('Error in chat endpoint:', error);
    return c.json({ 
      error: 'Failed to process chat request',
      details: error.message,
      response: 'I apologize, but I encountered an error processing your request. Please try again.'
    }, 500);
  }
});

// Start server in Deno; in other runtimes export the app
if ((globalThis as any).Deno?.serve) {
  (globalThis as any).Deno.serve(app.fetch);
}

export default app;