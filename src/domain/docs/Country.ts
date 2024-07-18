import { Document } from "mongoose";

export interface CountryDoc extends Document {
  geonameId: number;
  code: string; // ISO کد کشور
  name: string;
  capital: string;
  population: number;
  area: number; //
  languages: string[];
  currency: string;
  // timezone: string;
  flagUrl: string;
}