

import { ProvinceDoc } from "../docs/Province";

import BaseService from "./BaceService";
import ProvinceRepository from "../repositories/ProvinceRepository";
import ProvinceValidationSchema from "../validations/ProvinceValidation";

class ProvinceService extends BaseService<ProvinceDoc> {
  constructor(
  ) {
    super(ProvinceRepository, ProvinceValidationSchema);
  }
}
export default new ProvinceService();
