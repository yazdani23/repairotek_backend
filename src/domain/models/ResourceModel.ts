import { generateModel } from "../../utils/generators/modelGenerator";
import { ResourceDoc } from "../docs/Resource";

/**
 * @swagger
 * components:
 *   schemas:
 *     Resource:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the admin
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the admin was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the admin was last updated
 *         name:
 *           type: string
 *           description: Name of the resource
 *           unique: true
 *         description:
 *           type: string
 *           description: Description of the resource
 *           required: false
 */

const ResourceModel = generateModel<ResourceDoc>("Resource", {
  name: { type: String, required: true, unique: true },
  description: { type: String },
});

export default ResourceModel;
