import { Document } from "mongoose";

export interface ResourceDoc extends Document {
  name: string;
  description?: string;
}
