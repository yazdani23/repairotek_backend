import { PermissionDoc } from "../docs/Permission";

import BaseService from "./BaseService";
import PermissionRepository from "../repositories/PermissionRepository";
import {PermissionPatchValidationSchema, PermissionValidationSchema, } from "../validations/PermissionValidation";

class PermissionService extends BaseService<PermissionDoc> {
  constructor() {
    super(
      PermissionRepository,
      PermissionValidationSchema,
      PermissionPatchValidationSchema
    );
  }
}
export default new PermissionService();
