
import { OperatorDoc } from "../docs/Operator";
import { generateModel } from "../../utils/generators/modelGenerator";
import { generateCode } from "../../utils/functions/generateCode";
import UserModel from "./UserModel";

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

