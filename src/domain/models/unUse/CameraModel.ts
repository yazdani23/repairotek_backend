import { CameraDoc } from "../../docs/unuse/Camera";
import { generateModel } from "../../../utils/generators/modelGenerator";

const CameraModel = generateModel<CameraDoc>("Camera", {
  modelName: { type: String, required: true },
  cameraIp: { type: String, required: true },
  cameraSpecification: { type: String },
});

export default CameraModel;
