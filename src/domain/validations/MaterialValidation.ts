import Joi from "joi";

const MaterialValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  pricePerUnit: Joi.number().default(0).min(0),
  value: Joi.number().required().default(0).min(0),
  unit: Joi.string()
    .valid(...["gr", "Kg", "Tone"])
    .required()
    .default(""),
});

const MaterialPatchValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  pricePerUnit: Joi.number().default(0).min(0),
  value: Joi.number().required().default(0).min(0),
  unit: Joi.string()
    .valid(...["gr", "Kg", "Tone"])
    .required()
    .default(""),
});
export { MaterialPatchValidationSchema, MaterialValidationSchema };
