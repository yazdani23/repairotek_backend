import Joi from "joi";

const UserValidationSchema = Joi.object({
  userCode: Joi.number().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  webSite: Joi.string(),
  address: Joi.string(),
  telephone: Joi.string(),
  mobile: Joi.number().required(),
  profilePhoto: Joi.string(),
  roleId: Joi.string().required(),
  //todo: remove
  password: Joi.string().required(),
  // password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
});
export default UserValidationSchema