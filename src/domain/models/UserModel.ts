import { Schema } from "mongoose";
import { UserDoc } from "../docs/User";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { Gender } from "../../utils/constant/enums/Gender";
import { RoleNames } from "../../utils/constant/RoleNames";

/**
 * @swagger
 * components:
 *   schemas:
 *     UserInfo:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - role
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the user
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the user
 *         profilePhoto:
 *           type: string
 *           description: URL to the profile photo of the user (optional)
 *         role:
 *           type: string
 *           description: Role of the user
 *       example:
 *         firstName: John
 *         lastName: Doe
 *         email: johndoe@example.com
 *         profilePhoto: http://example.com/profile.jpg
 *         role: admin
 */


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
 */
const UserModel = generateSchema<UserDoc>("User", {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: Gender, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  telephone: { type: String, required: false },
  mobile: { type: String, required: true },
  profilePhoto: { type: String },
  role: { type: String, enum: RoleNames, required: true },
  password: { type: String, required: true },
  lastActivity: { type: Number },
  nationalId: { type: String },
  // permissions: [
  //   {
  //     type: Schema.Types.ObjectId, //permissionId
  //     ref: "Permission",
  //   },
  // ],
});

export default UserModel;


