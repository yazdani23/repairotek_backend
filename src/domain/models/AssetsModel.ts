
import { AssetsDoc } from "../docs/Assets";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

const AssetsModel = generateSchema<AssetsDoc>("Assets", {
  materials: [
    {
      materialId: { type: Schema.Types.ObjectId, required: true },
      value: { type: Number, required: true },
      costPerUnit: { type: Number, required: false },
    },
  ],
  equipment: [
    {
      equipmentId: { type: Schema.Types.ObjectId, required: true },
      countHour: { type: Number, required: true },
      costPerHour: { type: Number, required: false },
    },
  ],
});

export default AssetsModel;

