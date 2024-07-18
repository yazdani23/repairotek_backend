import { Document, Types } from "mongoose";

export interface EquipmentDoc extends Document {
  id: Types.ObjectId;
  // equipmentCode:string;
  name: string;
  equipmentModel: string;
  description: string;
  pricePerHour?: number;
  count: number;
  Manufacturer: string;
  VIN: number;
  createdAt: Date;
  updatedAt: Date;
}
