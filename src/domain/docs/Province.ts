import { Document, Schema } from "mongoose";

export interface ProvinceDoc extends Document {
  code: number;
  name: string;
  countryId: Schema.Types.ObjectId
}
