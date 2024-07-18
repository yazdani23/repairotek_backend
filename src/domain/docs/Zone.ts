import { RoadDoc } from './Road';
import { Document, Schema } from "mongoose";

export interface ZoneDoc extends Document {
  name: string;
  provinceId: Schema.Types.ObjectId;
  municipalCode?: string; // کد منطقه شهرداری
  location: {
    type: string; // "Point" یا "Polygon"
    coordinates: number[][][]; // مختصات
  };
  description?: string;
  areaSize?: number; // مساحت منطقه
  roadCondition?: string; // وضعیت جاده‌ها در این منطقه
  roadsId?: Schema.Types.ObjectId[] | RoadDoc[];
  accessibility?: string; // دسترسی به منطقه
}

// roadWay: {
//   name: string;
//   status: "good" | "average" | "poor";
//   traffic?: "low" | "medium" | "high";
// };
