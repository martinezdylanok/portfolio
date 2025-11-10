const PROJECT_OVERVIEW_DURATION_ARIA_LABEL: string = "Project overview duration";
const PROJECT_OVERVIEW_DURATION_TITLE_TEXT: string = "Duration";

// REFACTOR: Use the global interface to avoid duplication.
import type { ProjectInterface } from "../../../../../../../../../data/projectData";

export interface ProjectOverviewDurationProps {
   project: ProjectInterface;
}

export { PROJECT_OVERVIEW_DURATION_ARIA_LABEL, PROJECT_OVERVIEW_DURATION_TITLE_TEXT };
