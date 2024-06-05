import { Schema } from "mongoose";
import { ProjectGalleryDoc } from "../docs/ProjectGallery";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ProjectGalleryModel = generateSchema<ProjectGalleryDoc>(
  "ProjectGallery",
  {
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    mediaName: { type: String, required: true },
    mediaUrl: { type: String, required: true },
    thumbnailMediaUrl: { type: String, required: false },
    mediaDateTime: { type: String, required: false },
    mediaSubjectId: {
      type: Schema.Types.ObjectId,
      ref: "ProjectGallerySubject",
      required: false,
    },
    location: { type: String, required: false },
    description: { type: String },
  }
);

export default ProjectGalleryModel;
