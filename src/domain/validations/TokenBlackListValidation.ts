
import Joi from "joi";

const TokenBlackListValidationSchema = Joi.object({
  token: Joi.string().required(),
});

const TokenBlackListPatchValidationSchema = Joi.object({
  token: Joi.string().optional(),
});

export {TokenBlackListPatchValidationSchema, TokenBlackListValidationSchema};
