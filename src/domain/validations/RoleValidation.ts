import Joi from "joi";

const RoleValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  isActive:Joi.boolean()
  // permissions: Joi.array().required(),
});
const RolePatchValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  isActive: Joi.boolean(),
  // permissions: Joi.array().required(),
});


export {RolePatchValidationSchema, RoleValidationSchema};
