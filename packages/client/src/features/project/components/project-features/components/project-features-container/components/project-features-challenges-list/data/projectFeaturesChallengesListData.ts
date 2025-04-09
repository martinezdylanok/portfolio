const PROJECT_FEATURES_CHALLENGES_ARIA_LABEL: string = "Project features challenges list";
const PROJECT_FEATURES_CHALLENGES_TITLE: string = "Challenges";

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

export interface ProjectFeaturesChallengesListProps {
   project: ProjectInterface;
}

export { PROJECT_FEATURES_CHALLENGES_ARIA_LABEL, PROJECT_FEATURES_CHALLENGES_TITLE };
