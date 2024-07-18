import { Document, Schema, Types } from "mongoose";

export interface ReportDoc extends Document {
  id: Types.ObjectId;
  title: string;
  reportSubjectId: Schema.Types.ObjectId;
  description: string;
  reportDate: Date;
  reportTime: string;
  projectGalleryId: Schema.Types.ObjectId[];
  projectId: Schema.Types.ObjectId;
  createdBy: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
