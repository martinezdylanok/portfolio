const DUMMY_LOGO_IMAGE_URL = "projectLists/coronavirus_56dp_EDF2FB_FILL0_wght400_GRAD0_opsz48.svg";
const DUMMY_LOGO_IMAGE_URL_1 = "projectLists/south_america_24dp_EDF2FB_FILL0_wght400_GRAD0_opsz24.svg";
const PROJECT_LOGO_ALT_TEXT: string = "Project logo";
const PROJECT_SHOWCASE_IMAGE_ALT_TEXT: string = "Project showcase image";

interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_technologies: string;
}

export interface ProjectsListProjectProps {
   project: ProjectInterface;
   isOddProject: boolean;
}

export { DUMMY_LOGO_IMAGE_URL, DUMMY_LOGO_IMAGE_URL_1, PROJECT_LOGO_ALT_TEXT, PROJECT_SHOWCASE_IMAGE_ALT_TEXT };
