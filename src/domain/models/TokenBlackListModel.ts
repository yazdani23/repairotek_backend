import { TokenBlackListDoc } from "../docs/TokenBlackList";
import { generateSchema } from "../../utils/generators/modelGenerator";

const TokenBlackListModel = generateSchema<TokenBlackListDoc>("TokenBlackList", {
  token: { type: String, required: true, unique: true },
});

export default TokenBlackListModel;
