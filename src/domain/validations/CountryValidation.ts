import Joi from "joi";

const CountryValidationSchema = Joi.object({
  geonameId: Joi.number().required(),
  code: Joi.string().required(),
  name: Joi.string().required(),
  capital: Joi.string().required(),
  population: Joi.number().required(),
  area: Joi.number().required(),
  languages: Joi.array().items(Joi.string()).required(),
  currency: Joi.string().required(),
  flagUrl: Joi.string().required(),
});
const CountryPatchValidationSchema = Joi.object({
  geonameId: Joi.number().required(),
  code: Joi.string().required(),
  name: Joi.string().required(),
  capital: Joi.string().required(),
  population: Joi.number().required(),
  area: Joi.number().required(),
  languages: Joi.array().items(Joi.string()).required(),
  currency: Joi.string().required(),
  flagUrl: Joi.string().required(),
});

export { CountryValidationSchema, CountryPatchValidationSchema };
