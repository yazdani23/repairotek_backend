import { Document } from "mongoose";

export interface TaskDoc extends Document {
  title: string;
  description: string;
  status: string;
}
