import Joi from "joi";

const ProvinceValidationSchema = Joi.object({
  code: Joi.number().required(),
  name: Joi.string().required(),
});
const ProvincePatchValidationSchema = Joi.object({
  code: Joi.number().required(),
  name: Joi.string().required(),
});

export { ProvincePatchValidationSchema, ProvinceValidationSchema };
