import { generateModel } from "../../utils/generators/modelGenerator";
import { ReportSubjectDoc } from "../docs/ReportSubject";

/**
 * @swagger
 * components:
 *   schemas:
 *   ReportSubject:
 *     type: object
 *     required:
 *       - title
 *     properties:
 *       title:
 *         type: string
 *         description: Title of the report subject
 *       description:
 *         type: string
 *         description: Description of the report subject
 *         required: false
 */

/**
 * Possible values for types
 * @swagger
 * definitions:
 *   ReportTypes:
 *     type: array
 *     items:
 *       type: string
 *       enum:
 *         - Daily
 *         - Injury Employee
 *         - Damage Equipment
 */
const types = ["Daily", "Injury Employee", "Damage Equipment"];

const ReportSubjectModel = generateModel<ReportSubjectDoc>("ReportSubject", {
  title: { type: String, required: true },
  description: { type: String, required: false },
});

export default ReportSubjectModel;
