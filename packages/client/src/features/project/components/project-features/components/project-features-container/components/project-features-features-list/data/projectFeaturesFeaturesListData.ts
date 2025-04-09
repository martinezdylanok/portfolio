const PROJECT_FEATURES_FEATURES_LIST_ARIA_LABEL: string = "Project features features list";
const PROJECT_FEATURES_FEATURES_LIST_TITLE: string = "Features";

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

export interface ProjectFeaturesListProps {
   project: ProjectInterface;
}

export { PROJECT_FEATURES_FEATURES_LIST_ARIA_LABEL, PROJECT_FEATURES_FEATURES_LIST_TITLE };
