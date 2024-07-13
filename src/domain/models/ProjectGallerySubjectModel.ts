import { generateModel } from "../../utils/generators/modelGenerator";
import { ProjectGallerySubjectDoc } from "../docs/ProjectGallerySubject";

/**
 * @swagger
 * components:
 *   schemas:
 *   ProjectGallerySubject:
 *     type: object
 *     required:
 *       - title
 *     properties:
 *       title:
 *         type: string
 *         description: Title of the gallery subject
 *       description:
 *         type: string
 *         description: Description of the gallery subject
 */

/**
 * Possible values for ProjectGallerySubject
 * @swagger
 * components:
 *   schemas:
 *      ProjectGallerySubject:
 *        type: array
 *        items:
 *          type: string
 *          enum:
 *            - Daily
 *            - Injury Employee
 *            - Damage Equipment
 *            - Materials
 *            - Equipments
 *            - Other
 */
const ProjectGallerySubject = [
  "Daily",
  "Injury Employee",
  "Damage Equipment",
  "Materials",
  "Equipments",
  "Other",
];

const ProjectGallerySubjectModel = generateModel<ProjectGallerySubjectDoc>(
  "ProjectGallerySubject",
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  }
);

export default ProjectGallerySubjectModel;
