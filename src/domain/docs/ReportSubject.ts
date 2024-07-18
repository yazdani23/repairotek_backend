import { Document } from "mongoose";

export interface ReportSubjectDoc extends Document {
  title: string;
  description?: string;
}
