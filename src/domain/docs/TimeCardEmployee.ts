import { Schema, Document, model } from "mongoose";

export interface TimeCardEmployeeDoc extends Document {
  employeeId: Schema.Types.ObjectId;
  timeCardDate: Date;
  scheduledStartTime: string; // ISO 8601 string
  scheduledEndTime: string; // ISO 8601 string
  actualStartTime: string; // ISO 8601 string
  actualEndTime: string; // ISO 8601 string
  scheduledOverTime: number; // in minutes
  actualOverTime: number; // in minutes
  scheduledRestTime: number; // in minutes
  actualRestTime: number; // in minutes
  wageRate: number;
  overTimePayRate: number;
  taskId?: Schema.Types.ObjectId;
  createdBy: Schema.Types.ObjectId;
  updatedBy: Schema.Types.ObjectId;
}
