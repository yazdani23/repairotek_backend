import { DepartmentDoc } from "../../docs/unuse/Department";
import { generateModel } from "../../../utils/generators/modelGenerator";

const DepartmentModel = generateModel<DepartmentDoc>("Department", {
  title: { type: String, required: true },
  description: { type: String, required: true },
});
export default DepartmentModel;
