
import { RoadDoc } from "../docs/Road";
import BaseService from "./BaseService";
import RoadRepository from "../repositories/RoadRepository";
import RoadValidationSchema from "../validations/RoadValidation";

class RoadService extends BaseService<RoadDoc> {
  private roadRepository = this.repository as typeof RoadRepository;
  constructor() {
    super(RoadRepository, RoadValidationSchema);
  }
}
export default new RoadService();
