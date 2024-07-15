import { Schema } from "mongoose";
import { UserDoc } from "./User";

export interface EmployeeDoc extends UserDoc {
  employeeCode: string;
  hireDate?: Date;
  jobId?: Schema.Types.ObjectId;
  skillDescription?: string;
  description?: string;
  dateOfBirth?: Date;
  maritalStatus?: string; // وضعیت تأهل
  yearsOfExperience?: number; // تعداد سال‌های تجربه کاری
  contractType?: string; // نوع قرارداد
  bankAccountInfo?: string; // اطلاعات حساب بانکی برای پرداخت حقوق
  insuranceNumber?: string; // شماره بیمه
  // departmentId?: Schema.Types.ObjectId; // Array of department ObjectIds
}
