export const PROJECT_OVERVIEW_CONTENT_ARIA_LABEL: string = "Project overview content";

// REFACTOR: Make this interface to be used globally so there is no need to declare it locally.

interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_overview_description: string;
   project_overview_technologies: string;
   project_overview_duration: string;
   project_features: string;
   project_challenges: string;
   project_final_results: string;
}

export interface ProjectOverviewContentProps {
   project: ProjectInterface;
}
