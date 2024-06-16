
import { PermissionDoc } from "../docs/Permission";
import PermissionModel from "../models/PermissionModel";
import BaseRepository from "./BaseRepository";

class PermissionRepository extends BaseRepository<PermissionDoc> {
 constructor(){
    super(PermissionModel)
 }
 async getById(id: string): Promise<PermissionDoc | null> {
    try {
      return await this.model
        .findById(id)
        .populate("roleIds") 
        .exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getAll(): Promise<PermissionDoc[]> {
    try {
      return await this.model
        .find()
        // .populate("userId")
        .populate("resourceId")
        .exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
}


export default  new PermissionRepository();
