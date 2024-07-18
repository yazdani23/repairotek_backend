import { Types } from "mongoose";
import { Document, Schema } from "mongoose";

export interface ProjectDoc extends Document {
  id: Schema.Types.ObjectId;
  projectCode?: string;
  adminId: Schema.Types.ObjectId;
  title: string;
  zoneId: Schema.Types.ObjectId;
  areaLength: number;
  areaWidth: number;
  areaHeight: number;
  measureUnit: string;
  description: string;
  longitude: number;
  latitude: number;
  status?: string;
  materials: Types.ObjectId[];
  equipment: Types.ObjectId[];
  employees: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
