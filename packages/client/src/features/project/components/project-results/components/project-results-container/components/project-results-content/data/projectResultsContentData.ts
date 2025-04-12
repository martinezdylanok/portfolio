const PROJECT_RESULTS_CONTENT_ARIA_LABEL: string = "Project results content";
const PROJECT_RESULTS_CONTENT_TITLE: string = "FINAL RESULTS";

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

export interface ProjectResultsContentProps {
   project: ProjectInterface;
}

export { PROJECT_RESULTS_CONTENT_ARIA_LABEL, PROJECT_RESULTS_CONTENT_TITLE };
