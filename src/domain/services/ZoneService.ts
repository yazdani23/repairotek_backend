import { ZoneDoc } from "../docs/Zone";

import BaseService from "./BaseService";
import ZoneRepository from "../repositories/ZoneRepository";
import {ZonePatchValidationSchema, ZoneValidationSchema} from "../validations/ZoneValidation";

class ZoneService extends BaseService<ZoneDoc> {
  constructor() {
    super(ZoneRepository, ZoneValidationSchema, ZonePatchValidationSchema);
  }
}
export default new ZoneService();
