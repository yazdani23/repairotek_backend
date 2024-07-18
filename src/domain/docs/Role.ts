import { Document, Types } from "mongoose";

export interface RoleDoc extends Document {
  id: Types.ObjectId;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
