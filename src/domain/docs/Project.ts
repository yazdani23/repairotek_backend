import { Document, Schema } from "mongoose";

export interface ProjectDoc extends Document {
  projectCode: number;
  adminId: Schema.Types.ObjectId;
  title: string;
  zoneId: Schema.Types.ObjectId;
  issueDateTime: Date;
  areaLength: number; 
  areaWidth: number; 
  areaHeight: number; 
  measureUnit: string; 
  description: string;
  longitude: number;
  latitude: number;
  status: string;
  materials: [];
  equipment: [];
  employees: [];
}
