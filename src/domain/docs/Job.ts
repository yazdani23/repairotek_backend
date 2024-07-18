import { Types } from "mongoose";
import { Document } from "mongoose";

export interface JobDoc extends Document {
  id: Types.ObjectId;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
