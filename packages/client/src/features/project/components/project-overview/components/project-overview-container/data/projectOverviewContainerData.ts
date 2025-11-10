export const PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL: string = "Overview container";

// REFACTOR: Use the global interface to avoid duplication.
import type { ProjectInterface } from "../../../../../data/projectData";

export interface ProjectOvervierContainerProps {
   project: ProjectInterface;
}
