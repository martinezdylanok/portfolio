const PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL: string = "Logos of the project's involved parties";
const PROJECT_MAIN_COVER_BUSINESS_LOGO_ALT_TEXT: string = "Business's logo";
const PROJECT_MAIN_COVER_BUSINESS_SECONDARY_LOGO_ALT_TEXT: string = "Business's secondary logo";

import type { ProjectInterface } from "../../../../../../../data/projectData";
export interface ProjectMainCoverLogosProps {
   project: ProjectInterface;
}

export { PROJECT_MAIN_COVER_BUSINESS_LOGO_ALT_TEXT, PROJECT_MAIN_COVER_BUSINESS_SECONDARY_LOGO_ALT_TEXT, PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL };
