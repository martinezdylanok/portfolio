export const PROJECT_OVERVIEW_IMAGE_WRAPPER_ARIA_LABEL: string = "Project overview image wrapper";
export const PROJECT_OVERVIEW_IMAGE_CONTAINER_ARIA_LABEL: string = "Project overview image container";
export const PROJECT_OVERVIEW_IMAGE_ALT_TEXT: string = "Project overview image";

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

export interface ProjectOverviewImageProps {
   project: ProjectInterface;
}
