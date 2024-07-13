import { InsuranceDoc } from "../../docs/unuse/Insurance";
import { generateModel } from "../../../utils/generators/modelGenerator";

const InsuranceModel = generateModel<InsuranceDoc>("Insurance", {
  title: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String, required: false, default: "" }, // Optional with default empty string
  isActive: { type: Boolean, required: true },
});

export default InsuranceModel;
