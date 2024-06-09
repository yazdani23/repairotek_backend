import { Schema } from "mongoose";
import { UserDoc } from "../docs/User";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { Gender } from "../../utils/constant/enums/Gender";
import { RoleNames } from "../../utils/constant/RoleNames";


const UserModel = generateSchema<UserDoc>("User", {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: Gender, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  telephone: { type: String, required: false },
  mobile: { type: String, required: true },
  profilePhoto: { type: String },
  role: { type: String, enum: RoleNames, required: true },
  password: { type: String, required: true },
  lastActivity: { type: Number },
  nationalId: { type: String },
  permissions: [
    {
      type: Schema.Types.ObjectId, //permissionId
      ref: "Permission",
    },
  ],
});

export default UserModel;


//Todo maybe Change
// UserSchema.virtual("zones", {
//   ref: "Zone",
//   localField: "_id",
//   foreignField: "userIds",
// });
