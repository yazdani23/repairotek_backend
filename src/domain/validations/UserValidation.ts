import Joi from "joi";

const UserValidationSchema = Joi.object({
  userCode: Joi.number().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string(),
  telephone: Joi.string(),
  mobile: Joi.number().required(),
  profilePhoto: Joi.string(),
  roleId: Joi.string().required(),
  gender: Joi.string()
    .valid(...["male", "female"])
    .required(),
  password: Joi.string().required(),
  // password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
});

const UserPatchValidationSchema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string().email().optional(),
  address: Joi.string(),
  telephone: Joi.string(),
  mobile: Joi.number().optional(),
  profilePhoto: Joi.string(),
  roleId: Joi.string().optional(),
  gender: Joi.string()
    .valid(...["male", "female"])
    .required(),
  // password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
});
export { UserPatchValidationSchema, UserValidationSchema };
