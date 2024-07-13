import { Schema } from "mongoose";
import { EquipmentEmployeeDoc } from "../../docs/unuse/EquipmentEmployee";
import { generateModel } from "../../../utils/generators/modelGenerator";

const EquipmentEmployeeModel = generateModel<EquipmentEmployeeDoc>(
  "Equipment",
  {
    equipmentTypeId: {
      type: Schema.Types.ObjectId,
      ref: "EquipmentType",
      required: true,
    },
    allocatedHours: { type: Number, required: true },
    description: { type: String, required: true },
  }
);

export default EquipmentEmployeeModel;
