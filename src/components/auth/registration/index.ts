
export type Step = "PERSONAL" | "DOCUMENTS";

export interface FileItem {
  name: string;
  path: string;
}

export { default as FormProgress } from "./FormProgress";
export { default as FileUpload } from "./FileUpload";
