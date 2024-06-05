
import { ProjectGallerySubjectDoc } from "../docs/ProjectGallerySubject";
import ProjectGallerySubjectModel from "../models/ProjectGallerySubjectModel";
import BaseRepository from "./BaseRepository";

class ProjectGallerySubjectRepository extends BaseRepository<ProjectGallerySubjectDoc> {
  constructor(){
    super(ProjectGallerySubjectModel)
  }
}

export default new ProjectGallerySubjectRepository();
