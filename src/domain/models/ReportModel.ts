import { ReportDoc } from "../docs/Report";
import { generateModel } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *   Report:
 *     type: object
 *     required:
 *       - title
 *       - reportSubjectId
 *       - reportDate
 *       - reportTime
 *       - projectGalleryId
 *       - projectId
 *       - createdBy
 *     properties:
 *       title:
 *         type: string
 *         description: Title of the report
 *       reportSubjectId:
 *         type: string
 *         format: ObjectId
 *         description: ID of the report subject
 *       description:
 *         type: string
 *         description: Description of the report
 *         default: ""
 *         required: false
 *       reportDate:
 *         type: string
 *         format: date
 *         description: Date of the report
 *       reportTime:
 *         type: string
 *         description: Time of the report
 *       projectGalleryId:
 *         type: array
 *         items:
 *           type: string
 *           format: ObjectId
 *           description: IDs of the related project galleries
 *       projectId:
 *         type: string
 *         format: ObjectId
 *         description: ID of the project
 *       createdBy:
 *         type: string
 *         format: ObjectId
 *         description: ID of the user who created the report
 */

const ReportModel = generateModel<ReportDoc>("Report", {
  title: { type: String, required: true },
  reportSubjectId: {
    type: Schema.Types.ObjectId,
    ref: "ReportSubject",
    required: true,
  },
  description: { type: String, required: false, default: "" }, // Optional with default empty string
  reportDate: { type: Date, required: true },
  reportTime: { type: String, required: true },
  projectGalleryId: [
    { type: Schema.Types.ObjectId, ref: "ProjectGallery", required: true },
  ],
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default ReportModel;
