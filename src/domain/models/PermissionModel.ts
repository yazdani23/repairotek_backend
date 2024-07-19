import { PermissionDoc } from "../docs/Permission";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

const PermissionModel = generateSchema<PermissionDoc>("Permission", {
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  resourceId: { type: Schema.Types.ObjectId, ref: "Resource", required: true },
  canRead: { type: Boolean, default: false },
  canWrite: { type: Boolean, default: false },
  canEdit: { type: Boolean, default: false },
  canDelete: { type: Boolean, default: false },
});

export default PermissionModel;