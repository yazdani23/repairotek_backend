import Joi from "joi";

const PermissionValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  resource: Joi.string().required(),
  action: Joi.string().required(),
  roleIds: Joi.array().required(),
});

const PermissionPatchValidationSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  resource: Joi.string().optional(),
  action: Joi.string().optional(),
  roleIds: Joi.array().optional(),
});

export { PermissionValidationSchema , PermissionPatchValidationSchema};
