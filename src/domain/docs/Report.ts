import { Document, Schema } from "mongoose";

export interface ReportDoc extends Document {
  title: string;
  reportSubjectId: Schema.Types.ObjectId;
  description: string;
  reportDate: Date;
  reportTime: string;
  projectGalleryId: Schema.Types.ObjectId[];
  projectId: Schema.Types.ObjectId;
  createdBy: Schema.Types.ObjectId;
}
