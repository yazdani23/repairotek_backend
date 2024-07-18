import { Document, Types } from "mongoose";

export interface AssetDoc extends Document {
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
}
