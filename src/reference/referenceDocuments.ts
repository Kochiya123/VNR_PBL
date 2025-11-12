/**
 * Reference documents for the Vietnam History RAG chatbot.
 *
 * Add additional files under `src/reference/generated` using the
 * `npm run ingest:pdf <path-to-file.pdf>` script. Generated documents will be
 * merged with the base documents exported here.
 */
import { ReferenceDocument } from "./referenceTypes";
import { baseDocuments } from "./baseDocuments";
import { generatedDocuments } from "./generated";

export { ReferenceDocument };

export const referenceDocuments: ReferenceDocument[] = [
  ...baseDocuments,
  ...generatedDocuments,
];

