const PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT: string = "Projects list container";
const PROJECTS_LIST_UL_TEST_ID: string = "projects-ul";
const PROJECTS_LIST_LOADING_TEXT: string = "Loading projects...";
const PROJECTS_LIST_LOADING_ARIA_LABEL: string = "Loading projects";
const PROJECTS_LIST_ERROR_TEXT: string = "Error loading projects:";
const PROJECTS_LIST_ERROR_ARIA_LABEL: string = "Error message";
const PROJECTS_LIST_NO_DATA_TEXT: string = "No projects data available or unexpected format.";
const PROJECTS_LIST_DETAILED_HEADER_TITLE: string = "PROJECTS";
const PROJECTS_LIST_DETAILED_HEADER_SPAN_01: string = "The following is a curated selection of my best work. I like to think of each project as an extension of who I was at that moment, what I imagined, how I thought, and how I brought those ideas to life.";
const PROJECTS_LIST_DETAILED_HEADER_SPAN_02: string = "A PART OF ME";
const PROJECTS_LIST_DETAILED_HEADER_SPAN_03: string = "Each new project is another opportunity to communicate what’s coming through you. It’s another chance at bat. Another opportunity to connect. Another page filled in the diary of your inner life.";
const PROJECTS_LIST_DETAILED_HEADER_SPAN_04: string = "Rick Rubin, The Creative Act: A way of being";
const PROJECTS_LIST_DETAILED_HEADER_SPAN_05: string = "I approach every idea with curiosity and care, shaping it into something real through the craft I love: full-stack development.";
const PROJECTS_LIST_DETAILED_HEADER_SPAN_06: string = "CARE & CURIOSITY";

export interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_overview_technologies: string;
}

export { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_DETAILED_HEADER_SPAN_01, PROJECTS_LIST_DETAILED_HEADER_SPAN_02, PROJECTS_LIST_DETAILED_HEADER_SPAN_03, PROJECTS_LIST_DETAILED_HEADER_SPAN_04, PROJECTS_LIST_DETAILED_HEADER_SPAN_05, PROJECTS_LIST_DETAILED_HEADER_SPAN_06, PROJECTS_LIST_DETAILED_HEADER_TITLE, PROJECTS_LIST_ERROR_ARIA_LABEL, PROJECTS_LIST_ERROR_TEXT, PROJECTS_LIST_LOADING_ARIA_LABEL, PROJECTS_LIST_LOADING_TEXT, PROJECTS_LIST_NO_DATA_TEXT, PROJECTS_LIST_UL_TEST_ID };
