import { Document, Schema, Types } from "mongoose";

export interface ZoneDoc extends Document {
  id: Types.ObjectId;
  name: string;
  provinceId: Schema.Types.ObjectId;
  state: string;
  roadWay: {
    name: string;
    status: "good" | "average" | "poor";
    traffic?: "low" | "medium" | "high";
  };
  location: {
    type: string;
    coordinates: [number, number];
  };
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
