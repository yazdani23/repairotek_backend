import { MaterialDoc } from "../docs/Material";

import BaseService from "./BaseService";
import MaterialRepository from "../repositories/MaterialRepository";
import { MaterialPatchValidationSchema, MaterialValidationSchema} from "../validations/MaterialValidation";

class MaterialService extends BaseService<MaterialDoc> {
  constructor() {
    super(MaterialRepository, MaterialValidationSchema, MaterialPatchValidationSchema);
  }
}
export default new MaterialService();
