import { Document } from "mongoose";

export interface JobDoc extends Document {
  title: string;
  description: string;
}
