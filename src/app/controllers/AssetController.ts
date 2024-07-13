import { AssetDoc } from "../../domain/docs/Asset";
import AssetService from "../../domain/services/AssetService";
import BaseController from "./BaseController";

class AssetController extends BaseController<AssetDoc> {
  private AssetService = this.service as typeof AssetService;
  constructor() {
    super(AssetService);
  }
}
export default new AssetController();
