import { Schema, Types } from 'mongoose';
import { NextFunction, Request, Response } from "express";
import { ProjectDoc } from "../../domain/docs/Project";
import ProjectService from "../../domain/services/ProjectService";
import BaseController from "./BaseController";
import { StatusProject } from "../../utils/constant/StatusProject";
import logger from "../../utils/helpers/logger";


class ProjectController extends BaseController<ProjectDoc> {
  private projectService = this.service as typeof ProjectService;
  constructor() {
    super(ProjectService);
  }
  
  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      
      if (!req.user) {
        throw new Error("User not authenticated");
      }
      const { id } = req.user;
      const {
        title,
        zoneId,
        areaLength,
        areaWidth,
        areaHeight,
        measureUnit,
        description,
        longitude,
        latitude,
      } = req.body;

      const user = await this.projectService.create({
        adminId: id,
        title,
        zoneId: zoneId,
        areaLength,
        areaWidth,
        areaHeight,
        measureUnit,
        description,
        longitude,
        latitude,
      } as ProjectDoc);
      console.log(user);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error: any) {
      next(error);
    }
  };

  getProjectGallery = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const projectId = req.params.id;
    const projectGallery = await this.projectService.getProjectGallery(
      projectId
    );
    if (!projectGallery) {
      throw Error(`Project not found with id: ${projectId}`);
    }
    return res.json(projectGallery);
  };

  async getProjectStatuses(
    req: Request,
    res: Response
  ): Promise<Response<String[] | null>> {
    const statuses = StatusProject;
    logger.info(statuses);
    return res.json(statuses);
  }
}
export default new ProjectController();

// const ProjectController = crudControllerGenerator("Project", ProjectService);
// export default ProjectController;
