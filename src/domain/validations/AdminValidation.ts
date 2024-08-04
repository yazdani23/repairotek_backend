import Joi from "joi";

const AdminValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  gender: Joi.string()
    .valid(...["male", "female"])
    .required(),
  email: Joi.string().required(),
  address: Joi.string().required(),
  telephone: Joi.string().required(),
  mobile: Joi.string().required(),
  profilePhoto: Joi.string().required(),
  roleId: Joi.string().required(),
  password: Joi.string().required(),
  lastActivity: Joi.number().required(),
  nationalId: Joi.string().required(),
  permissions: Joi.array().required(),
});
const AdminValidationPatchSchema = Joi.object({});

export { AdminValidationSchema, AdminValidationPatchSchema };
