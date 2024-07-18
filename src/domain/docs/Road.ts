
import { Document } from "mongoose";

export interface RoadDoc extends Document {
  name: string;
  length?: number;
  condition?: string;
  type?: string;
  decription?:string;
}
