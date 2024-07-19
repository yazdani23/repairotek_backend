import { generateSchema } from "../../utils/generators/modelGenerator";
import { EquipmentDoc } from "../docs/Equipment";

const EquipmentModel = generateSchema<EquipmentDoc>("Equipment", {
  name: { type: String, required: true, unique: true },
  equipmentModel: { type: String, required: true },
  description: { type: String, required: false },
  pricePerHour: { type: Number, required: false, default: 0 },
  count: { type: Number, required: false, default: 0 },
  Manufacturer: { type: String, required: false },
  VIN: { type: Number, required: false, default: 0 },
});

export default EquipmentModel;
