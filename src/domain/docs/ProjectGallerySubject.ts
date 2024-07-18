import { Types } from "mongoose";
import { Document } from "mongoose";

export interface ProjectGallerySubjectDoc extends Document {
  id: Types.ObjectId;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
