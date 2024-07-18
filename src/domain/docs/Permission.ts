import { Document, Schema, Types } from "mongoose";

export interface PermissionDoc extends Document {
  id: Types.ObjectId;
  userId: Schema.Types.ObjectId;
  resourceId: Schema.Types.ObjectId;
  canRead: boolean;
  canWrite: boolean;
  canEdit: boolean;
  canDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

