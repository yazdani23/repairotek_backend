import { ProvinceDoc } from "../docs/Province";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

const ProvinceModel = generateSchema<ProvinceDoc>("Province", {
  code: { type: Number, required: true, unique: true},
  name: { type: String, required: true, unique: true},
  countryId: { type: Schema.Types.ObjectId, ref: "Country", required: true },
});

export default ProvinceModel;

