
import { OperatorDoc } from "../docs/Operator";
import { generateModel } from "../../utils/generators/modelGenerator";
import { generateCode } from "../../utils/functions/generateCode";
import UserModel from "./UserModel";


/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       allOf:
 *         - $ref: '#/components/schemas/User'
 *         - type: object
 *           properties:
 *             id:
 *               type: string
 *               description: Unique identifier for the admin
 *             createdAt:
 *               type: string
 *               format: date-time
 *               description: Timestamp when the admin was created
 *             updatedAt:
 *               type: string
 *               format: date-time
 *               description: Timestamp when the admin was last updated
 *             employeeCode:
 *               type: number
 *               description: Unique code assigned to the employee
 *             hireDate:
 *               type: string
 *               format: date
 *               description: Date when the employee was hired

 *       example:
 *         firstName: John
 *         lastName: Doe
 *         gender: Male
 *         email: johndoe@example.com
 *         address: 123 Main St
 *         mobile: '098-765-4321'
 *         roleId: '60c72b2f9b1d8c001f8e4c9e'
 *         password: 'securepassword123'
 *         employeeCode: 1234
 *         hireDate: '2022-01-15'

 */
///////////// Discriminat //////////////////
const OperatorModel = generateModel<OperatorDoc>(
  "Operator",
  {
    opreatorCode: {
      type: String,
      required: true,
      default: () => generateCode("OPR"),
      unique: true,
    },
    hireDate: { type: Date, required: false },
  },
  ["__t", "password"],
  UserModel
);


export default OperatorModel;

