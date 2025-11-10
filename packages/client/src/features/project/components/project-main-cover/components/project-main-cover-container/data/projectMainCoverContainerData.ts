export const PROJECT_MAIN_COVER_CONTAINER_ARIA_LABEL: string = "Project main cover container";

// REFACTOR: Use the global interface to avoid duplication.
import type { ProjectInterface } from "../../../../../data/projectData";

export interface ProjectMainCoverContainerProps {
   project: ProjectInterface;
}
