import { InjuryTypeDoc } from "../../docs/unuse/InjuryType";
import { generateModel } from "../../../utils/generators/modelGenerator";

const InjuryTypeModel = generateModel<InjuryTypeDoc>("InjuryType", {
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default InjuryTypeModel;
