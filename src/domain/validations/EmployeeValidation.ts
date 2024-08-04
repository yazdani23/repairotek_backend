import Joi from "joi";
import { MaritalStatus } from "../../utils/constant/MaritalStatus";
import { ContractType } from "../../utils/constant/ContractType";

const EmployeeValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string(),
  telephone: Joi.string(),
  mobile: Joi.string().required(),
  profilePhoto: Joi.string(),
  roleId: Joi.string().required(),
  password: Joi.string().required(),
  gender: Joi.string()
    .valid(...["male", "female"])
    .required(),
  employeeCode: Joi.string().required(),
  hireDate: Joi.date().optional(),
  jobId: Joi.string().hex().length(24).optional(),
  skillDescription: Joi.string().optional(),
  description: Joi.string().optional(),
  dateOfBirth: Joi.date().optional(),
  maritalStatus: Joi.string()
    .valid(...Object.values(MaritalStatus))
    .optional(),
  yearsOfExperience: Joi.number().optional(),
  contractType: Joi.string()
    .valid(...Object.values(ContractType))
    .optional(),
  bankAccountInfo: Joi.string().optional(),
  insuranceNumber: Joi.number().optional(),
});
const EmployeePatchValidationSchema = Joi.object({
  employeeCode: Joi.string().required(),
  hireDate: Joi.date().optional(),
  jobId: Joi.string().hex().length(24).optional(),
  skillDescription: Joi.string().optional(),
  description: Joi.string().optional(),
  dateOfBirth: Joi.date().optional(),
  gender: Joi.string()
    .valid(...["male", "female"])
    .required(),
  maritalStatus: Joi.string()
    .valid(...Object.values(MaritalStatus))
    .optional(),
  yearsOfExperience: Joi.number().optional(),
  contractType: Joi.string()
    .valid(...Object.values(ContractType))
    .optional(),
  bankAccountInfo: Joi.string().optional(),
  insuranceNumber: Joi.number().optional(),
});

export { EmployeeValidationSchema, EmployeePatchValidationSchema };
