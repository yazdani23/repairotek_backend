
import { Types } from "mongoose";
import { Document } from "mongoose";

export interface TokenBlackListDoc extends Document {
  id: Types.ObjectId;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}
