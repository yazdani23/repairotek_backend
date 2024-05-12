import { ProjectDoc } from "../docs/Project";
import ProjectModel from "../models/ProjectModel";
import BaseRepository from "./BaseRepository";

class ProjectRepository extends BaseRepository<ProjectDoc> {
  constructor() {
    super(ProjectModel);
  }
  async getById(id: string): Promise<ProjectDoc | null> {
    try {
      return await this.model
        .findById(id)
        .populate("userZoneId").populate("userId")//returns just name property
        // .populate("roleId") //returns all the role's properties
        .exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getAll(): Promise<ProjectDoc[]> {
    try {
      return await this.model.find().populate("userZoneId", "userId")
      // .populate("userId")
      .exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
}

export default new ProjectRepository();