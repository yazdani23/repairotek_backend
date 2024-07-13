import { Schema } from "mongoose";
import { ProjectEmployeeDoc } from "../../docs/unuse/ProjectEmployee";
import { generateModel } from "../../../utils/generators/modelGenerator";

const ProjectEmployeeSchema = generateModel<ProjectEmployeeDoc>(
  "ProjectEmployee",
  {
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
  }
);
export default ProjectEmployeeSchema;
