import { Document, Schema } from "mongoose";

export interface ProjectGalleryDoc extends Document {
  projectId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  mediaName: string;
  mediaUrl: string;
  thumbnailMediaUrl: string;
  mediaDateTime?: string;
  mediaSubjectId: Schema.Types.ObjectId;
  location?: string;
  description?: string;
}
