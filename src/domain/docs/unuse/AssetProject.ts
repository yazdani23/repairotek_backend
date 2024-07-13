import { Types } from "mongoose";
import { AssetDoc } from "../Asset";

export interface AssetProjectDoc extends AssetDoc {
  projectId: Types.ObjectId;
}
