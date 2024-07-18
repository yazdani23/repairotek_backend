import { Document, Types } from "mongoose";

export interface AssetDoc extends Document {
   id: Types.ObjectId;
  materials: {
    materialId: Types.ObjectId;
    value: number;
    costPerUnit: number;
  }[];
  equipment: {
    equipmentId: Types.ObjectId;
    countHour: number;
    costPerHour?: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
