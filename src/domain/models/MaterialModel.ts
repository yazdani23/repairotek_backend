import { generateSchema } from "../../utils/generators/modelGenerator";
import { MaterialDoc } from "../docs/Material";

// enum Unit {
//   Gram = "gr",
//   Kilogram = "Kg",
//   Ton = "Tone",
// }
const Unit = ["gr", "Kg", "Tone"];

const MaterialModel = generateSchema<MaterialDoc>("Material", {
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  pricePerUnit: { type: Number, required: false, default: 0, min: 0 },
  value: { type: Number, required: true, default: 0, min: 0 },
  unit: { type: String, enum: Unit, required: true, default: "" },
});

export default MaterialModel;
