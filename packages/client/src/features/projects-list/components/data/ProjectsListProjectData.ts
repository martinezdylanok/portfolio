const DUMMY_LOGO_IMAGE_URL_1 = "projectLists/south_america_24dp_EDF2FB_FILL0_wght400_GRAD0_opsz24.svg";
const PROJECT_LOGO_ALT_TEXT: string = "Project logo";

// Array of letters in "PROJECT" for character-by-character rendering
export const PROJECT_LETTERS = ["P", "R", "O", "J", "E", "C", "T"];

interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_overview_technologies: string;
}

export interface ProjectsListProjectProps {
   project: ProjectInterface;
   isOddProject: boolean;
   index: number;
}

export { DUMMY_LOGO_IMAGE_URL_1, PROJECT_LOGO_ALT_TEXT };
