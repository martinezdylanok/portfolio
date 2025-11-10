export const PROJECT_OVERVIEW_ARIA_LABEL: string = "Project overview";

// REFACTOR: Use the global interface to avoid duplication.
import type { ProjectInterface } from "../../../data/projectData";

export interface ProjectOverviewProps {
   project: ProjectInterface;
}
