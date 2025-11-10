export const PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL: string = "Project main cover content";

// REFACTOR: Use the global interface to avoid duplication.
import type { ProjectInterface } from "../../../../../../../data/projectData";

export interface ProjectMainCoverContentProps {
   project: ProjectInterface;
}
