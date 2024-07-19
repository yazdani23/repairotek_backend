import { RoleDoc } from "../docs/Role";
import { generateSchema } from "../../utils/generators/modelGenerator";

const RoleModel = generateSchema<RoleDoc>("Role", {
  name: { type: String, required: true, unique: true},
  description: { type: String, required: false, default: "" }, // Optional with default empty string
});

export default RoleModel;