import { AssetDoc } from "../docs/Asset";
import AssetModel from "../models/AssetModel";
import BaseRepository from "./BaseRepository";

class AssetRepository extends BaseRepository<AssetDoc> {
  constructor() {
    super(AssetModel);
  }
}

export default new AssetRepository();
