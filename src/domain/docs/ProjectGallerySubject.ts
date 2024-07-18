import { Document } from "mongoose";

export interface ProjectGallerySubjectDoc extends Document {
  title: string;
  description?: string;
}
