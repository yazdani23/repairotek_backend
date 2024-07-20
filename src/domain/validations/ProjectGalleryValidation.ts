import Joi from "joi";

const ProjectGallerySchema = Joi.object({
  projectId: Joi.string().required(),
  employeeId: Joi.string().required(),
  media: Joi.string().required(),
  mediaDateTime: Joi.string().required(), ///// Todo
  mediaSubjectId: Joi.string().required(),
  location: Joi.string().required(),/// Todo
  description: Joi.string(),
});

const ProjectGalleryPatchSchema = Joi.object({
  projectId: Joi.string().required(),
  employeeId: Joi.string().required(),
  media: Joi.string().required(),
  mediaDateTime: Joi.string().required(), ///// Todo
  mediaSubjectId: Joi.string().required(),
  location: Joi.string().required(), /// Todo
  description: Joi.string(),
});

export {ProjectGalleryPatchSchema, ProjectGallerySchema};
