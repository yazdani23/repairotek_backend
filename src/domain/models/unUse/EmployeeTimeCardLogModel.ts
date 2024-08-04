import { Schema } from "mongoose";
import { EmployeeTimeCardLogDoc } from "../../docs/unuse/TimeCardLogEmployee";
import { generateModel } from "../../../utils/generators/modelGenerator";

const EmployeeTimeCardLogModel = generateModel<EmployeeTimeCardLogDoc>(
  "EmployeeTimeCard",
  {
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    timeCardDate: { type: Date, required: true },
    // startTime: { type: Date, required: true },
    // endTime: { type: Date, required: true },
    // overTime: { type: Date, required: true },
    // restTime: { type: Date, required: true },
    overTimePayRate: { type: Number, required: true },
    wageRate: { type: Number },
  }
);
export default EmployeeTimeCardLogModel;
