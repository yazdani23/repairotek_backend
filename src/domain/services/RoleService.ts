import { RoleDoc } from "../docs/Role";
import BaseService from "./BaseService";
import RoleRepository from "../repositories/RoleRepository";
import {
  RolePatchValidationSchema,
  RoleValidationSchema,
} from "../validations/RoleValidation";

class RoleService extends BaseService<RoleDoc> {
  constructor() {
    super(RoleRepository, RoleValidationSchema, RolePatchValidationSchema);
  }
}
export default new RoleService();
