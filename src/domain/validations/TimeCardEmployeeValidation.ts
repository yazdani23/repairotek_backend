import Joi from "joi";

const TimeCardEmployeeValidationSchema = Joi.object({
  employeeId: Joi.string().required(),
  timeCardDate: Joi.date().required(),
  scheduledStartTime: Joi.string().required(),
  scheduledEndTime: Joi.string().required(),
  actualStartTime: Joi.string().required(),
  actualEndTime: Joi.string().required(),
  scheduledOverTime: Joi.number().default(0),
  actualOverTime: Joi.number().default(0),
  scheduledRestTime: Joi.number().default(0),
  actualRestTime: Joi.number().default(0),
  wageRate: Joi.number().required(),
  overTimePayRate: Joi.number().required(),
  taskId: Joi.string(),
  createdBy: Joi.string().required(),
  updatedBy: Joi.string().required(),
});
const TimeCardEmployeePatchValidationSchema = Joi.object({
  employeeId: Joi.string().required(),
  timeCardDate: Joi.date().required(),
  scheduledStartTime: Joi.string().required(),
  scheduledEndTime: Joi.string().required(),
  actualStartTime: Joi.string().required(),
  actualEndTime: Joi.string().required(),
  scheduledOverTime: Joi.number().default(0),
  actualOverTime: Joi.number().default(0),
  scheduledRestTime: Joi.number().default(0),
  actualRestTime: Joi.number().default(0),
  wageRate: Joi.number().required(),
  overTimePayRate: Joi.number().required(),
  taskId: Joi.string(),
  createdBy: Joi.string().required(),
  updatedBy: Joi.string().required(),
});

export {
  TimeCardEmployeePatchValidationSchema,
  TimeCardEmployeeValidationSchema,
};
