import { RoleDoc } from "../docs/Role";
import { generateSchema } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the role
 *         description:
 *           type: string
 *           description: Description of the role (optional)
 *           default: ""
 *       example:
 *         name: Admin
 *         description: Administrator with full access
 */
const RoleModel = generateSchema<RoleDoc>("Role", {
  name: { type: String, required: true },
  description: { type: String, required: false, default: "" }, // Optional with default empty string
});

export default RoleModel;