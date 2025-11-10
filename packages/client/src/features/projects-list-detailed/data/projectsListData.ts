const PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT: string = "Projects list container";
const PROJECTS_LIST_UL_TEST_ID: string = "projects-ul";
const PROJECTS_LIST_LOADING_TEXT: string = "Loading projects...";
const PROJECTS_LIST_LOADING_ARIA_LABEL: string = "Loading projects";
const PROJECTS_LIST_ERROR_TEXT: string = "Error loading projects:";
const PROJECTS_LIST_ERROR_ARIA_LABEL: string = "Error message";
const PROJECTS_LIST_NO_DATA_TEXT: string = "No projects data available or unexpected format.";
const PROJECTS_LIST_DETAILED_HEADER_TITLE: string = "PROJECTS";
const PROJECTS_LIST_DETAILED_HEADER_DESCRIPTION: string = "A curated list of my work, every project here is not just a solution for my client's needs, its a piece of myself...";

export interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_overview_technologies: string;
}

export { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_DETAILED_HEADER_DESCRIPTION, PROJECTS_LIST_DETAILED_HEADER_TITLE, PROJECTS_LIST_ERROR_ARIA_LABEL, PROJECTS_LIST_ERROR_TEXT, PROJECTS_LIST_LOADING_ARIA_LABEL, PROJECTS_LIST_LOADING_TEXT, PROJECTS_LIST_NO_DATA_TEXT, PROJECTS_LIST_UL_TEST_ID };
