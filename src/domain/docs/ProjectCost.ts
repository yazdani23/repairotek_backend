import { Document, Types } from "mongoose";

export interface ProjectCostDoc extends Document {
  projectId: Types.ObjectId;
  materials: {
    materialId: Types.ObjectId;
    value: number;
    costPerUnit: number;
  }[];
  equipment: {
    equipmentId: Types.ObjectId;
    countHour: number;
    costPerHour: number;
  }[];
  employees: {
    employeeId: Types.ObjectId;
    countHour: number;
    costPerHour: number;
  }[];
  costDate: Date;
  totalCost: number;
}
