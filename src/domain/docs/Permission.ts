import { Document, Schema } from "mongoose";

export interface PermissionDoc extends Document {
  userId: Schema.Types.ObjectId;
  resourceId: Schema.Types.ObjectId;
  canRead: boolean;
  canWrite: boolean;
  canEdit: boolean;
  canDelete: boolean;
}

