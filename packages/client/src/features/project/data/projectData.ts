export const PROJECT_ARIA_LABEL: string = "Project container";
export const PROJECT_LOADING_TEXT: string = "Loading projects...";
export const PROJECT_LOADING_ARIA_LABEL: string = "Loading project";
export const PROJECT_ERROR_TEXT: string = "Error loading project:";
export const PROJECT_ERROR_ARIA_LABEL: string = "Error message";
export const PROJECT_NO_DATA_TEXT: string = "No projects data available or unexpected format.";

export interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_overview_description_part_01: string;
   project_overview_description_part_02: string;
   project_overview_technologies: string;
   project_overview_duration: string;
   project_features: string;
   project_challenges: string;
   project_final_results_description_part_01: string;
   project_final_results_description_part_02: string;
   project_final_results_stat_01_title: string;
   project_final_results_stat_01: string;
   project_final_results_stat_02_title: string;
   project_final_results_stat_02: string;
   project_final_results_stat_03_title: string;
   project_final_results_stat_03: string;
   project_timeline_event_01_title: string;
   project_timeline_event_01: string;
   project_timeline_event_02_title: string;
   project_timeline_event_02: string;
   project_timeline_event_03_title: string;
   project_timeline_event_03: string;
   project_timeline_event_04_title: string;
   project_timeline_event_04: string;
   project_timeline_event_05_title: string;
   project_timeline_event_05: string;
   project_external_url: string | null;
}
