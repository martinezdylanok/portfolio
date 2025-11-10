export const PROJECT_OVERVIEW_CONTENT_ARIA_LABEL: string = "Project overview content";
export const PROJECT_OVERVIEW_CONTENT_TITLE_TEXT: string = "OVERVIEW";

// REFACTOR: Use the global interface to avoid duplication.
import type { ProjectInterface } from "../../../../../../../../data/projectData";

export interface ProjectOverviewContentProps {
   project: ProjectInterface;
}
