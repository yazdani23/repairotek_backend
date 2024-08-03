import Joi from "joi";

const ResourceValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name should be a string",
    "any.required": "Name is required",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
});
const ResourcePatchValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name should be a string",
    "any.required": "Name is required",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
});

export { ResourcePatchValidationSchema, ResourceValidationSchema };
