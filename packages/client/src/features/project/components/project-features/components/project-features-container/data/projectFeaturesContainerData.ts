export const PROJECT_FEATURES_CONTAINER_ARIA_LABEL: string = "Features container";
export const PROJECT_FEATURES_CONTAINER_TITLE_TEXT: string = "FEATURES & ITS CHALLENGES";
export const PROJECT_FEATURES_CONTAINER_IMG_ALT_LABEL: string = "Projects showcase video";

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

export interface ProjectFeaturesContainerProps {
   project: ProjectInterface;
}
