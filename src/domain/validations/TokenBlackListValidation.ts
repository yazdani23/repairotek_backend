
import Joi from "joi";

const TokenBlackListValidationSchema = Joi.object({
  token: Joi.string().required(),
});

export default TokenBlackListValidationSchema;
