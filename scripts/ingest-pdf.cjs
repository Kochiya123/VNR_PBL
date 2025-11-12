const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = process.cwd();
const PDF_DIR = path.join(PROJECT_ROOT, "src", "reference", "pdfs");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "src", "reference", "generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "pdfDocuments.json");

const loadPdfParse = async () => {
  const mod = await import("pdf-parse");

  if (typeof mod.default === "function") {
    return mod.default;
  }

  if (typeof mod.PDFParse === "function") {
    const VerbosityLevel = mod.VerbosityLevel ?? { ERRORS: 0 };
    return (buffer) => {
      const parser = new mod.PDFParse({
        data: buffer,
        verbosity: VerbosityLevel.ERRORS ?? 0,
      });
      return parser.parseBuffer(buffer);
    };
  }

  throw new Error(
    "Could not load pdf-parse. Make sure it is installed correctly.",
  );
};

const slugify = (value) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

const sanitizeContent = (content) =>
  content
    .replace(/\u0000/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const ensureDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const readPdfFiles = () => {
  if (!fs.existsSync(PDF_DIR)) {
    console.warn(`PDF directory not found: ${PDF_DIR}`);
    return [];
  }

  return fs
    .readdirSync(PDF_DIR)
    .filter((file) => file.toLowerCase().endsWith(".pdf"))
    .map((file) => ({
      file,
      filePath: path.join(PDF_DIR, file),
    }));
};

const extractPdfText = async (parser, filePath) => {
  const buffer = fs.readFileSync(filePath);
  const result = await parser(buffer);
  const text = typeof result === "string" ? result : result?.text ?? "";
  return sanitizeContent(text);
};

const buildDocumentEntry = (fileName, content) => {
  const baseName = path.basename(fileName, path.extname(fileName));
  const id = slugify(baseName) || `pdf-${Date.now()}`;

  return {
    id,
    title: baseName,
    source: `pdf:${fileName}`,
    content,
  };
};

const main = async () => {
  try {
    const pdfParse = await loadPdfParse();
    const pdfFiles = readPdfFiles();

    if (!pdfFiles.length) {
      console.warn("No PDF files found to ingest.");
      return;
    }

    console.log(`Found ${pdfFiles.length} PDF file(s). Processing...`);

    const documents = [];

    for (const { file, filePath } of pdfFiles) {
      console.log(`→ Extracting text from ${file} ...`);
      const content = await extractPdfText(pdfParse, filePath);

      if (!content) {
        console.warn(`Skipping ${file}: no text content detected.`);
        continue;
      }

      documents.push(buildDocumentEntry(file, content));
      console.log(
        `   Added ${file} (${content.length.toLocaleString()} characters).`,
      );
    }

    if (!documents.length) {
      console.warn("No documents extracted. Nothing to write.");
      return;
    }

    ensureDirectory(OUTPUT_DIR);
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(documents, null, 2), "utf8");

    console.log(
      `Successfully wrote ${documents.length} document(s) to ${OUTPUT_FILE}.`,
    );
  } catch (error) {
    console.error("Failed to ingest PDFs:", error);
    process.exitCode = 1;
  }
};

main();

