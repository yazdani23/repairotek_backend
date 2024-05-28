import { DamageTypeDoc } from "../docs/unuse/DamageType";
import DamageTypeModel from "../models/DamageTypeModel";
import BaseRepository from "./BaseRepository";

class DamageTypeRepository extends BaseRepository<DamageTypeDoc> {
  constructor() {
    super(DamageTypeModel);
  }
}

export default new DamageTypeRepository();
