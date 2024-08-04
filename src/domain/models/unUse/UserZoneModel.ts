import { Schema } from "mongoose";
import { UserZoneDoc } from "../../docs/unuse/UserZone";
import { generateModel } from "../../../utils/generators/modelGenerator";

const UserZoneModel = generateModel<UserZoneDoc>("UserZone", {
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true },
});

export default UserZoneModel;
