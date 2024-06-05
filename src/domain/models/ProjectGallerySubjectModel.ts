
import { generateSchema } from "../../utils/generators/modelGenerator";
import { ProjectGallerySubjectDoc } from "../docs/ProjectGallerySubject";

const ProjectGallerySubject = [
  "Daily",
  "Injury Employee",
  "Damage Equipment",
  "Materials",
  "Equipments",
  "Other",
];
const ProjectGallerySubjectModel = generateSchema<ProjectGallerySubjectDoc>(
  "ProjectGallerySubject",
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  }
);


export default ProjectGallerySubjectModel;