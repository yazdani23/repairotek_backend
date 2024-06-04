
import { CameraDoc } from "../../domain/docs/Camera";
import CameraService from "../../domain/services/CameraService";
import BaseController from "./BaseController";

class CameraController extends BaseController<CameraDoc> {
  private cameraService = this.service as typeof CameraService;
  constructor() {
    super(CameraService);
  }
}
export default new CameraController();
