
import { CountryDoc } from "../docs/Country";
import BaseService from "./BaseService";
import CountryRepository from "../repositories/CountryRepository";
import {CountryValidationSchema, CountryPatchValidationSchema} from "../validations/CountryValidation";

class CountryService extends BaseService<CountryDoc> {
  private countryRepository = this.repository as typeof CountryRepository;
  constructor() {
    super(CountryRepository, CountryValidationSchema, CountryPatchValidationSchema);
  }
}
export default new CountryService();
