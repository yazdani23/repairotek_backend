import UserModel from "../models/UserModel";
import { UserDoc } from "../docs/User";
import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository<UserDoc> {
  constructor() {
    super(UserModel);
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
  async findByEmail(email: string): Promise<UserDoc | null> {
    return await this.model.findOne({ email }).populate("roleId");
  }

  async signup(user: Partial<UserDoc>): Promise<UserDoc> {
    const newUser = new this.model(user);
    await newUser.save();
    return newUser;
  }
}

export default new UserRepository();
