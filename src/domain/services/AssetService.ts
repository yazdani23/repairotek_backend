import { AssetDoc } from "../docs/Asset";
import BaseService from "./BaseService";
import AssetRepository from "../repositories/AssetRepository";
import {AssetValidationSchema, AssetPatchValidationSchema} from "../validations/AssetValidation";

class AssetService extends BaseService<AssetDoc> {
  private AssetRepository = this.repository as typeof AssetRepository;
  constructor() {
    super(AssetRepository, AssetValidationSchema,AssetPatchValidationSchema);
  }
}
export default new AssetService();
