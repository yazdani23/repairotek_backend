
import { CountryDoc } from "../docs/Country";
import CountryModel from "../models/CountryModel";
import BaseRepository from "./BaseRepository";

class CountryRepository extends BaseRepository<CountryDoc> {
  constructor(){
       super(CountryModel)
  }
}

export default new CountryRepository();
