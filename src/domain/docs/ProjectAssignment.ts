import { Document, Types } from "mongoose";

export interface ProjectAssignmentDoc extends Document {
  id: Types.ObjectId;
  projectId: Types.ObjectId;
  employees: {
    employeeId: Types.ObjectId;
    estimatedCountHour: number;
  }[];
  materials?: {
    materialId: Types.ObjectId;
    estimatedValue: number;
  }[];
  equipment?: {
    equipmentId: Types.ObjectId;
    estimatedCountHour: number;
  }[];
  description: string;
  totalEstimatedCountDays?: number;
  createdAt: Date;
  updatedAt: Date;
}
