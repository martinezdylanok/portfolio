export const PROJECT_TIMELINE_CONTAINER_ARIA_LABEL: string = "Timeline container";
export const PROJECT_TIMELINE_CONTAINER_TITLE_TEXT: string = "THE ___TIMELINE";
export const PROJECT_TIMELINE_CONTAINER_IMG_ALT_LABEL: string = "Project timeline";
import type { ProjectInterface } from "../../../../../data/projectData";
export interface ProjectTimelineContainerProps {
   project: ProjectInterface;
}
