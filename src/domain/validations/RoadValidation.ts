import Joi from "joi";

const RoadValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name should be a string",
    "any.required": "Name is required",
  }),
  length: Joi.number().optional().messages({
    "number.base": "Length should be a number",
  }),
  condition: Joi.string().optional().messages({
    "string.base": "Condition should be a string",
  }),
  type: Joi.string().optional().messages({
    "string.base": "Type should be a string",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
});
const RoadPatchValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name should be a string",
    "any.required": "Name is required",
  }),
  length: Joi.number().optional().messages({
    "number.base": "Length should be a number",
  }),
  condition: Joi.string().optional().messages({
    "string.base": "Condition should be a string",
  }),
  type: Joi.string().optional().messages({
    "string.base": "Type should be a string",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
});

export { RoadPatchValidationSchema, RoadValidationSchema };
