const PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL: string = "Project overview technologies";
const PROJECT_OVERVIEW_TECHNOLOGIES_TITLE: string = "Technologies";

// REFACTOR: Use the global interface to avoid duplication.
import type { ProjectInterface } from "../../../../../../../../../data/projectData";

export interface ProjectOverviewTechnologiesProps {
   project: ProjectInterface;
}

export { PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL, PROJECT_OVERVIEW_TECHNOLOGIES_TITLE };
