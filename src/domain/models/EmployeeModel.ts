import { Schema } from "mongoose";
import {toJsonSchema } from "../../utils/generators/modelGenerator";
import UserModel from "./UserModel";
import { EmployeeDoc } from "../docs/Employee";
import { MaritalStatus } from "../../utils/constant/MaritalStatus";
import { ContractType } from "../../utils/constant/ContractType";



const EmployeeSchema = new Schema<EmployeeDoc>({
  employeeCode: { type: Number, required: false },
  hireDate: { type: Date, required: false },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: false },
  skillDescription: { type: String, required: false },
  description: { type: String, required: false },
  dateOfBirth: { type: Date, required: false },
  maritalStatus: { type: String, enum: MaritalStatus, required: false }, // وضعیت تأهل
  yearsOfExperience: { type: Number, required: false }, // تعداد سال‌های تجربه کاری
  contractType: { type: String, enum: ContractType, required: false }, // نوع قرارداد
  bankAccountInfo: { type: String, required: false }, // اطلاعات حساب بانکی برای پرداخت حقوق
  insuranceNumber: { type: Number, required: false }, // شماره بیمه
  // departmentId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Department",
  //   required: false,
  // },
});
// const EmplyeeSch= toJsonSchema(EmployeeSchema)

const EmployeeModel = UserModel.discriminator("Employee", EmployeeSchema);


export default EmployeeModel;
