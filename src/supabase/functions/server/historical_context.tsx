// Import reference documents
import { referenceDocuments } from "../../../reference/referenceDocuments.ts";

interface DocumentChunk {
  id: string;
  documentId: string;
  title: string;
  content: string;
  embedding: number[];
}

const EMBEDDING_MODEL = "text-embedding-3-large";
const CHUNK_SIZE = 900; // approximate characters per chunk
const CHUNK_OVERLAP = 150;
const MAX_CHUNKS_RETURNED = 4;

let cachedChunks: DocumentChunk[] | null = null;
let chunkInitPromise: Promise<DocumentChunk[]> | null = null;

const cleanupWhitespace = (text: string) =>
  text.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

const splitIntoChunks = (text: string): string[] => {
  const cleaned = cleanupWhitespace(text);
  if (!cleaned) {
    return [];
  }

  const paragraphs = cleaned.split(/\n{2,}/);
  const chunks: string[] = [];
  let buffer = "";

  for (const paragraph of paragraphs) {
    if ((buffer + "\n\n" + paragraph).length <= CHUNK_SIZE) {
      buffer = buffer ? `${buffer}\n\n${paragraph}` : paragraph;
    } else {
      if (buffer) {
        chunks.push(buffer.trim());
      }

      if (paragraph.length <= CHUNK_SIZE) {
        buffer = paragraph;
      } else {
        let start = 0;
        while (start < paragraph.length) {
          const slice = paragraph.slice(start, start + CHUNK_SIZE);
          chunks.push(slice.trim());
          start += CHUNK_SIZE - CHUNK_OVERLAP;
        }
        buffer = "";
      }
    }
  }

  if (buffer) {
    chunks.push(buffer.trim());
  }

  return chunks;
};

const embedTexts = async (
  texts: string[],
  apiKey: string,
): Promise<number[][]> => {
  if (!texts.length) {
    return [];
  }

  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: EMBEDDING_MODEL,
      input: texts,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI embeddings error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return data.data.map((item: { embedding: number[] }) => item.embedding);
};

const buildChunkIndex = async (apiKey: string): Promise<DocumentChunk[]> => {
  const documents = referenceDocuments ?? [];
  const rawChunks = documents.flatMap((doc) =>
    splitIntoChunks(doc.content).map((chunk, index) => ({
      id: `${doc.id}-${index}`,
      documentId: doc.id,
      title: doc.title,
      content: chunk,
    }))
  );

  if (!rawChunks.length) {
    return [];
  }

  const embeddings = await embedTexts(
    rawChunks.map((chunk) => chunk.content),
    apiKey,
  );

  return rawChunks.map((chunk, index) => ({
    ...chunk,
    embedding: embeddings[index],
  }));
};

const ensureChunkEmbeddings = async (apiKey: string) => {
  if (cachedChunks) {
    return cachedChunks;
  }

  if (!chunkInitPromise) {
    chunkInitPromise = buildChunkIndex(apiKey);
  }

  cachedChunks = await chunkInitPromise;
  return cachedChunks;
};

const cosineSimilarity = (a: number[], b: number[]): number => {
  const dot = a.reduce((sum, ai, idx) => sum + ai * (b[idx] ?? 0), 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  if (!magnitudeA || !magnitudeB) {
    return 0;
  }
  return dot / (magnitudeA * magnitudeB);
};

export const getRelevantContext = async (
  query: string,
  apiKey: string,
): Promise<string> => {
  try {
    console.log('Getting relevant context for query:', query?.substring(0, 50));
    console.log('Reference documents count:', referenceDocuments?.length || 0);

    if (!referenceDocuments || referenceDocuments.length === 0) {
      console.warn('No reference documents available');
      return "Không tìm thấy tài liệu tham chiếu. Vui lòng thêm nội dung vào referenceDocuments.";
    }

    const chunks = await ensureChunkEmbeddings(apiKey);
    console.log('Chunks generated:', chunks.length);

    if (!chunks.length) {
      return "Không tìm thấy tài liệu tham chiếu. Vui lòng thêm nội dung vào referenceDocuments.";
    }

    const queryText = query || "lịch sử Việt Nam";
    console.log('Generating query embedding...');
    const queryEmbeddings = await embedTexts([queryText], apiKey);
    
    if (!queryEmbeddings || queryEmbeddings.length === 0) {
      console.error('Failed to generate query embedding');
      // Fallback: return first few chunks
      return chunks
        .slice(0, MAX_CHUNKS_RETURNED)
        .map(({ content, title }) => `### ${title}\n${content}`)
        .join("\n\n---\n\n");
    }

    const [queryEmbedding] = queryEmbeddings;

    const rankedChunks = chunks
      .map((chunk) => ({
        chunk,
        score: cosineSimilarity(queryEmbedding, chunk.embedding),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_CHUNKS_RETURNED)
      .filter((entry) => entry.score > 0);

    console.log('Ranked chunks:', rankedChunks.length);

    if (!rankedChunks.length) {
      return chunks
        .slice(0, MAX_CHUNKS_RETURNED)
        .map(({ content, title }) => `### ${title}\n${content}`)
        .join("\n\n---\n\n");
    }

    return rankedChunks
      .map(({ chunk, score }, index) => {
        const similarity = score.toFixed(2);
        return `### ${chunk.title} (độ tương đồng ${similarity})\n${chunk.content}`;
      })
      .join("\n\n---\n\n");
  } catch (error) {
    console.error('Error in getRelevantContext:', error);
    // Return fallback context
    return "Đã xảy ra lỗi khi tìm kiếm tài liệu tham chiếu. Vui lòng thử lại.";
  }
};
