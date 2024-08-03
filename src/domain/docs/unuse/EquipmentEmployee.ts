import { Document, Schema } from "mongoose";

export interface EquipmentEmployeeDoc extends Document {
  employeeId: Schema.Types.ObjectId;
  equipmentTypeId: Schema.Types.ObjectId;
  allocatedHours: Number | undefined;
  description: string;
}
