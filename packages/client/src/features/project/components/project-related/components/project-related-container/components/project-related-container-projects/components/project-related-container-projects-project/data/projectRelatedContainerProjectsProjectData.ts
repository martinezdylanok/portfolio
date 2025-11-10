const PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT: string = "Project image";
const PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER: string = "A look into the project";

import type { ProjectInterface } from "../../../../../../../../../data/projectData";

export interface relatedProjectsProjectProps {
   firstPart: string;
   secondPart: string;
   project: Pick<ProjectInterface, "project_id" | "project_name" | "project_description"> & { project_technologies?: string };
}

export { PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT, PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER };
