
import { RoadDoc } from "../docs/Road";
import BaseService from "./BaseService";
import RoadRepository from "../repositories/RoadRepository";
import {RoadPatchValidationSchema, RoadValidationSchema} from "../validations/RoadValidation";

class RoadService extends BaseService<RoadDoc> {
  private roadRepository = this.repository as typeof RoadRepository;
  constructor() {
    super(RoadRepository, RoadValidationSchema, RoadPatchValidationSchema);
  }
}
export default new RoadService();
