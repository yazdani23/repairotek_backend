import { DepartmentDoc } from "../docs/Department";
import { generateSchema } from "../../utils/generators/modelGenerator";

const DepartmentModel = generateSchema<DepartmentDoc>("Department",
{
  title: { type: String, required: true },
  description: { type: String, required: true },
});
export default DepartmentModel;
