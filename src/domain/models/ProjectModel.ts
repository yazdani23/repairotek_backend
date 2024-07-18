import { Schema } from "mongoose";
import { ProjectDoc } from "../docs/Project";
import { generateModel } from "../../utils/generators/modelGenerator";
import { UnitsProjectArea } from "../../utils/constant/UnitsProjectArea";
import { StatusProject } from "../../utils/constant/StatusProject";
import { generateCode } from "../../utils/functions/generateCode";

/**
 * @swagger
 * components:
 *   schemas:
 *   Project:
 *     type: object
 *     required:
 *       - projectCode
 *       - adminId
 *       - title
 *       - zoneId
 *       - issueDateTime
 *       - areaLength
 *       - areaWidth
 *       - areaHeight
 *       - longitude
 *       - latitude
 *     properties:
 *       projectCode:
 *         type: number
 *         description: Code of the project
 *       adminId:
 *         type: string
 *         format: ObjectId
 *         description: ID of the admin
 *       title:
 *         type: string
 *         description: Title of the project
 *       zoneId:
 *         type: string
 *         format: ObjectId
 *         description: ID of the zone
 *       issueDateTime:
 *         type: string
 *         format: date-time
 *         description: Date and time the project was issued
 *       areaLength:
 *         type: number
 *         description: Length of the project area
 *       areaWidth:
 *         type: number
 *         description: Width of the project area
 *       areaHeight:
 *         type: number
 *         description: Height of the project area
 *       measureUnit:
 *         type: string
 *         enum:
 *           - m
 *           - cm
 *           - mm
 *         description: Unit of measurement for the project area
 *         default: m
 *       description:
 *         type: string
 *         description: Description of the project
 *         required: false
 *       longitude:
 *         type: number
 *         description: Longitude coordinate of the project
 *       latitude:
 *         type: number
 *         description: Latitude coordinate of the project
 *       status:
 *         type: string
 *         enum:
 *           - Initialed
 *           - Pre-Construction
 *           - In-Progress
 *           - Compeleted
 *         description: Status of the project
 *         default: Initialed
 *       materials:
 *         type: array
 *         items:
 *           type: string
 *           format: ObjectId
 *           description: IDs of the materials used in the project
 *       equipment:
 *         type: array
 *         items:
 *           type: string
 *           format: ObjectId
 *           description: IDs of the equipment used in the project
 *       employees:
 *         type: array
 *         items:
 *           type: string
 *           format: ObjectId
 *           description: IDs of the employees involved in the project
 */

const ProjectModel = generateModel<ProjectDoc>("Project", {
  projectCode: { type: String, required: true, default: generateCode("P") },
  adminId: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
  title: { type: String, required: true },
  zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true },
  areaLength: { type: Number, required: true },
  areaWidth: { type: Number, required: true },
  areaHeight: { type: Number, required: true },
  measureUnit: { type: String, enum: UnitsProjectArea, default: "m" },
  description: { type: String, required: false },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  status: { type: String, enum: StatusProject, default: "Initiation" },
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
