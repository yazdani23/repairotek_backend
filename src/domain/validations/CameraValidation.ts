import Joi from "joi";

const CameraValidationSchema = Joi.object({
  modelName: Joi.string().required(),
  cameraIp: Joi.string().required(),
  cameraSpecification: Joi.string().required()
});

export default CameraValidationSchema;
