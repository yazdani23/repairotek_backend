import Joi from "joi";

const ZoneValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name should be a string",
    "any.required": "Name is required",
  }),
  provinceId: Joi.string().required().messages({
    "string.base": "Province ID should be a string",
    "any.required": "Province ID is required",
  }),
  location: Joi.object({
    type: Joi.string().valid("Point", "Polygon").required().messages({
      "string.base": "Type should be a string",
      "any.only": "Type must be one of Point, Polygon",
      "any.required": "Type is required",
    }),
    coordinates: Joi.array()
      .items(
        Joi.array()
          .items(Joi.array().items(Joi.number()).required())
          .required(),
      )
      .required()
      .messages({
        "array.base": "Coordinates should be a 3D array of numbers",
        "any.required": "Coordinates are required",
      }),
  }).required(),
  municipalCode: Joi.string().required().messages({
    "string.base": "Municipal code should be a string",
    "any.required": "Municipal code is required",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
  areaSize: Joi.number().optional().messages({
    "number.base": "Area size should be a number",
  }),
  roadCondition: Joi.string().optional().messages({
    "string.base": "Road condition should be a string",
  }),
  roadsId: Joi.array().items(Joi.string()).optional().messages({
    "array.base": "Road IDs should be an array of strings",
  }),
  accessibility: Joi.string().optional().messages({
    "string.base": "Accessibility should be a string",
  }),
});

const ZonePatchValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name should be a string",
    "any.required": "Name is required",
  }),
  provinceId: Joi.string().required().messages({
    "string.base": "Province ID should be a string",
    "any.required": "Province ID is required",
  }),
  location: Joi.object({
    type: Joi.string().valid("Point", "Polygon").required().messages({
      "string.base": "Type should be a string",
      "any.only": "Type must be one of Point, Polygon",
      "any.required": "Type is required",
    }),
    coordinates: Joi.array()
      .items(
        Joi.array()
          .items(Joi.array().items(Joi.number()).required())
          .required(),
      )
      .required()
      .messages({
        "array.base": "Coordinates should be a 3D array of numbers",
        "any.required": "Coordinates are required",
      }),
  }).required(),
  municipalCode: Joi.string().required().messages({
    "string.base": "Municipal code should be a string",
    "any.required": "Municipal code is required",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
  areaSize: Joi.number().optional().messages({
    "number.base": "Area size should be a number",
  }),
  roadCondition: Joi.string().optional().messages({
    "string.base": "Road condition should be a string",
  }),
  roadsId: Joi.array().items(Joi.string()).optional().messages({
    "array.base": "Road IDs should be an array of strings",
  }),
  accessibility: Joi.string().optional().messages({
    "string.base": "Accessibility should be a string",
  }),
});
export { ZonePatchValidationSchema, ZoneValidationSchema };
