const PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT: string = "Projects list container";
const PROJECTS_LIST_TITLE: string = "MY WORK";
const PROJECT_LOGO_ALT_TEXT: string = "Project logo";
const PROJECT_SHOWCASE_IMAGE_ALT_TEXT: string = "Project showcase image";
const DUMMY_LOGO_IMAGE_URL = "../../../public/projectLists/coronavirus_56dp_EDF2FB_FILL0_wght400_GRAD0_opsz48.svg";
const DUMMY_LOGO_IMAGE_URL_1 = "../../../public/projectLists/south_america_24dp_EDF2FB_FILL0_wght400_GRAD0_opsz24.svg";

interface Project {
   project_id: number;
   project_name: string;
   project_technologies: string;
}

export { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_TITLE, PROJECT_LOGO_ALT_TEXT, PROJECT_SHOWCASE_IMAGE_ALT_TEXT, DUMMY_LOGO_IMAGE_URL, DUMMY_LOGO_IMAGE_URL_1 };
export type { Project };
