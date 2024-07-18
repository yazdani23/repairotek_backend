import { Types } from "mongoose";
import { Document } from "mongoose";

export interface MaterialDoc extends Document {
  id: Types.ObjectId;
  // materialCode:string;
  name: string;
  description: string;
  pricePerUnit?: number;
  value: number;
  unit: string;
  createdAt: Date;
  updatedAt: Date;
}
