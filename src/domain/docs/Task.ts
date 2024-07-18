import { Types } from "mongoose";
import { Document } from "mongoose";

export interface TaskDoc extends Document {
  id: Types.ObjectId;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
