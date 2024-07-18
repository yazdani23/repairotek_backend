
import { Document } from "mongoose";

export interface TokenBlackListDoc extends Document {
  token: string;
}
