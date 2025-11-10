export const PROJECT_OVERVIEW_GRID_ARIA_LABEL: string = "Project overview grid";

// REFACTOR: Use the global interface to avoid duplication.
import type { ProjectInterface } from "../../../../../../../data/projectData";

export interface ProjecOverviewGridProps {
   project: ProjectInterface;
}
