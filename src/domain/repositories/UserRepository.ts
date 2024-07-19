import bcrypt from "bcrypt";
import UserModel from "../models/UserModel";
import { UserDoc } from "../docs/User";
import BaseRepository from "./BaseRepository";
import { setToken } from "../../utils/functions/setToken";

class UserRepository extends BaseRepository<UserDoc> {
  constructor() {
    super(UserModel);
  }
  async create(data: UserDoc): Promise<UserDoc> {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10); // Adjust salt rounds as needed
      data.password = hashedPassword;
      const newRecource = new this.model(data);
       const token = setToken(data);
      //  console.log(token);
      await newRecource.save();
      return newRecource;
    } catch (error) {
      throw new Error(`Failed to create data: ${error}`);
    }
  }
  async getById(id: string): Promise<UserDoc | null> {
    try {
      return await this.model.findById(id).populate("roleId", "name").exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getAll(): Promise<UserDoc[]> {
    try {
      return await this.model.find().populate("roleId", "name").exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getUser(id: string): Promise<UserDoc | null> {
    try {
      return await this.model
        .findById(id)
        .populate("roleId", "name") //returns just name property
        // .populate("roleId") //returns all the role's properties
        .exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getUserByEmail(email: string): Promise<UserDoc | null> {
    return await this.model.findOne({ email });
  }
}

export default new UserRepository();
