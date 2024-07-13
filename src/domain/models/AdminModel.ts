import { AdminDoc } from "../docs/Admin";
import UserModel from "./UserModel";
import {
  generateModel,
} from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - gender
 *         - email
 *         - address
 *         - mobile
 *         - roleId
 *         - password
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the user
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *         gender:
 *           type: string
 *           enum:
 *             - Male
 *             - Female
 *             - Other
 *           description: Gender of the user
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the user
 *         address:
 *           type: string
 *           description: Address of the user
 *         telephone:
 *           type: string
 *           description: Telephone number of the user (optional)
 *         mobile:
 *           type: string
 *           description: Mobile number of the user
 *         profilePhoto:
 *           type: string
 *           description: URL to the profile photo of the user (optional)
 *         roleId:
 *           type: string
 *           format: ObjectId
 *           description: Role ID of the user
 *         password:
 *           type: string
 *           description: Password for the user
 *         lastActivity:
 *           type: number
 *           description: Timestamp of the user's last activity (optional)
 *         nationalId:
 *           type: string
 *           description: National ID of the user (optional)
 *         permissions:
 *           type: array
 *           items:
 *             type: string
 *             format: ObjectId
 *           description: List of permission IDs associated with the user
 *       example:
 *         firstName: John
 *         lastName: Doe
 *         gender: Male
 *         email: johndoe@example.com
 *         address: 123 Main St
 *         telephone: '123-456-7890'
 *         mobile: '098-765-4321'
 *         profilePhoto: 'http://example.com/photo.jpg'
 *         roleId: '60c72b2f9b1d8c001f8e4c9e'
 *         password: 'securepassword123'
 *         lastActivity: 1622520000
 *         nationalId: 'A12345678'
 *         permissions: ['60c72b2f9b1d8c001f8e4c9d']
 *     Admin:
 *       allOf:
 *         - $ref: '#/components/schemas/User'
 *         - type: object
 *           description: Admin model extending the User model
 *       example:
 *         firstName: Jane
 *         lastName: Smith
 *         gender: Female
 *         email: janesmith@example.com
 *         address: 456 Another St
 *         telephone: '321-654-0987'
 *         mobile: '987-654-3210'
 *         profilePhoto: 'http://example.com/photo2.jpg'
 *         roleId: '60c72b2f9b1d8c001f8e4c9f'
 *         password: 'anothersecurepassword456'
 *         lastActivity: 1622606400
 *         nationalId: 'B98765432'
 *         permissions: ['60c72b2f9b1d8c001f8e4ca0']
 */

///////////// Discriminat //////////////////
const AdminModel = generateModel<AdminDoc>(
  "Admin",
  {},
  ["password"],
  UserModel
);

export default AdminModel;
