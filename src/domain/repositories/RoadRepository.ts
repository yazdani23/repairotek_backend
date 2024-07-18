
import { RoadDoc } from "../docs/Road";
import RoadModel from "../models/RoadModel";
import BaseRepository from "./BaseRepository";

class RoadRepository extends BaseRepository<RoadDoc> {
  constructor(){
    super(RoadModel)
  }
}

export default new RoadRepository();
