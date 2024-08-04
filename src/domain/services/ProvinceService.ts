import { ProvinceDoc } from "../docs/Province";

import BaseService from "./BaseService";
import ProvinceRepository from "../repositories/ProvinceRepository";
import { ProvincePatchValidationSchema, ProvinceValidationSchema} from "../validations/ProvinceValidation";

class ProvinceService extends BaseService<ProvinceDoc> {
  constructor() {
    super(ProvinceRepository, ProvinceValidationSchema, ProvincePatchValidationSchema);
  }
}
export default new ProvinceService();
