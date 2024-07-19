import { Schema } from "mongoose";
import { ProjectDoc } from "../docs/Project";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { UnitsProjectArea } from "../../utils/constant/UnitsProjectArea";
import { StatusProject } from "../../utils/constant/StatusProject";

const ProjectModel = generateSchema<ProjectDoc>("Project", {
  projectCode: { type: Number, required: true, unique: true},
  adminId: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
  title: { type: String, required: true},
  zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true },
  issueDateTime: { type: Date, required: true },
  areaLength: { type: Number, required: true },
  areaWidth: { type: Number, required: true },
  areaHeight: { type: Number, required: true },
  measureUnit: { type: String, enum: UnitsProjectArea, default: "m" },
  description: { type: String, required: false },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  status: { type: String, enum: StatusProject, default: "UnderGoing" },
  materials: [
    {
      type: Schema.Types.ObjectId,
      ref: "Material",
    },
  ],
  equipment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Equipment",
    },
  ],
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
});


export default ProjectModel;
