import Joi from "joi";
  

const ProjectValidationSchema = Joi.object({
  adminId: Joi.string().required(),
  title: Joi.string().required(),
  zoneId: Joi.string().required(),
  areaLength: Joi.number().required(),
  areaWidth: Joi.number().required(),
  areaHeight: Joi.number().required(),
  measureUnit: Joi.string().required(),
  description: Joi.string(),
  longitude: Joi.number().required(),
  latitude: Joi.number().required(),
  materials: Joi.array().items(Joi.string().optional()).default([]),
  equipment: Joi.array().items(Joi.string().optional()).default([]),
  employees: Joi.array().items(Joi.string().optional()).default([]),
});

export default ProjectValidationSchema;
