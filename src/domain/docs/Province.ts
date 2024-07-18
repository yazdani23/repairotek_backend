import { Document, Schema, Types } from "mongoose";

export interface ProvinceDoc extends Document {
  id: Types.ObjectId;
  code: number;
  name: string;
  countryId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
