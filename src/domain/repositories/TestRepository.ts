
import { TestDoc } from "../docs/Test";
import TestModel from "../models/TestModel";
import BaseRepository from "./BaseRepository";

class TestRepository extends BaseRepository<TestDoc> {
  constructor(){
    super(TestModel)
  }
}

export default new TestRepository();
