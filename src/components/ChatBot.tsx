import React, { useState, useRef, useEffect } from 'react';
import { Send, ImagePlus, X, Bot, User, Loader } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  imageUrl?: string;
  timestamp: Date;
}

export const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Xin chào! Tôi là trợ lý lịch sử Việt Nam của bạn. Hãy hỏi tôi bất cứ điều gì về giai đoạn 1945-1975, Đảng Cộng sản Việt Nam, các sự kiện lớn, nhân vật quan trọng, hoặc tải lên hình ảnh lịch sử để phân tích.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && !selectedImage) || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      imageUrl: imagePreview || undefined,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('message', input.trim());
      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4e12d5d5/chat`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: formData
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Chat API error:', errorText);
        let errorMessage = 'Không thể kết nối với chatbot. ';
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.error) {
            errorMessage += errorData.error;
          } else if (errorData.response) {
            errorMessage = errorData.response;
          }
        } catch {
          errorMessage += 'Vui lòng thử lại sau.';
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();

      if (!data.response) {
        throw new Error('Chatbot không trả về phản hồi hợp lệ.');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: error instanceof Error ? error.message : 'Xin lỗi, đã xảy ra lỗi. Vui lòng thử lại.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      removeImage();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-red-700" />
          </div>
          <div>
            <h3 className="text-lg">Trợ Lý AI Lịch Sử Việt Nam</h3>
            <p className="text-sm opacity-90">Hỏi về các sự kiện từ 1945-1975</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user' ? 'bg-red-700' : 'bg-gray-300'}`}>
              {message.role === 'user' ? (
                <User className="w-5 h-5 text-white" />
              ) : (
                <Bot className="w-5 h-5 text-gray-700" />
              )}
            </div>
            <div className={`flex-1 max-w-[80%] ${message.role === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
              <div className={`rounded-lg p-3 ${message.role === 'user' ? 'bg-red-700 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
                {message.imageUrl && (
                  <img 
                    src={message.imageUrl} 
                    alt="Uploaded" 
                    className="max-w-full rounded-lg mb-2 max-h-48 object-cover"
                  />
                )}
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <Bot className="w-5 h-5 text-gray-700" />
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="flex gap-2">
                <Loader className="w-5 h-5 text-red-700 animate-spin" />
                <span className="text-gray-600">Đang suy nghĩ...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4 bg-white">
        {imagePreview && (
          <div className="mb-3 relative inline-block">
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="h-20 rounded-lg border border-gray-300"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
          
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            disabled={isLoading}
          >
            <ImagePlus className="w-5 h-5 text-gray-600" />
          </button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hỏi về lịch sử Việt Nam (1945-1975)..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={(!input.trim() && !selectedImage) || isLoading}
            className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Gửi
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-2">
          Bạn có thể đặt câu hỏi hoặc tải lên hình ảnh lịch sử để phân tích
        </p>
      </div>
    </div>
  );
};
