import { Schema } from "mongoose";
import { ProjectAssignmentDoc } from "../docs/ProjectAssignment";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ProjectAssignmentModel = generateSchema<ProjectAssignmentDoc>(
  "ProjectAssignment",
  {
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    employees: [
      {
        employeeId: {
          type: Schema.Types.ObjectId,
          ref: "Employee",
          required: true,
        },
        estimatedCountHour: {
          type: Number,
        },
      },
    ],
    equipment: [
      {
        equipmentId: {
          type: Schema.Types.ObjectId,
          ref: "Equipment",
          required: true,
        },
        estimatedCountHour: {
          type: Number,
        },
      },
    ],
    materials: [
      {
        materialId: {
          type: Schema.Types.ObjectId,
          ref: "Material",
          required: true,
        },
        estimatedValue: {
          type: Number,
        },
      },
    ],
    description: { type: String },
    totalEstimatedCountDays: { type: Number, required: false },
  }
);

export default ProjectAssignmentModel;
