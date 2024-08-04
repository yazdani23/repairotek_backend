import Joi from "joi";
import mongoose from "mongoose";
const objectIdValidator = (value: string, helpers: any) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error("any.invalid");
  }
  return value;
};

const UserValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string(),
  telephone: Joi.string(),
  mobile: Joi.number().required(),
  nationalId: Joi.number().required(),
  lastActivity: Joi.number().required(),
  profilePhoto: Joi.string(),
  roleId: Joi.string().required(),
  gender: Joi.string()
    .valid(...["male", "female"])
    .required(),
  password: Joi.string().required(),
  permissions: Joi.array()
    .items(Joi.string().custom(objectIdValidator, "ObjectID validation"))
    .required(),
  // password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
});

const UserPatchValidationSchema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string().email().optional(),
  address: Joi.string(),
  telephone: Joi.string(),
  mobile: Joi.number().optional(),
  lastActivity: Joi.number().required(),
  nationalId: Joi.number().required(),
  profilePhoto: Joi.string(),
  roleId: Joi.string().optional(),
  gender: Joi.string()
    .valid(...["male", "female"])
    .required(),
  permissions: Joi.array()
    .items(Joi.string().custom(objectIdValidator, "ObjectID validation"))
    .required(),
  // password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
});
export { UserPatchValidationSchema, UserValidationSchema };
