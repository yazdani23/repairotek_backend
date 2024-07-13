import { AssetProjectDoc } from "../../docs/unuse/AssetProject";
import { generateModel } from "../../../utils/generators/modelGenerator";

const AssetsProjectModel = generateModel<AssetProjectDoc>("AssetsProject", {});

export default AssetsProjectModel;
