export const PROJECT_OVERVIEW_IMAGE_WRAPPER_ARIA_LABEL: string = "Project overview image wrapper";
export const PROJECT_OVERVIEW_IMAGE_CONTAINER_ARIA_LABEL: string = "Project overview image container";
export const PROJECT_OVERVIEW_IMAGE_ALT_TEXT: string = "Project overview image";

import type { ProjectInterface } from "../../../../../../../data/projectData";

export interface ProjectOverviewImageProps {
   project: ProjectInterface;
}
