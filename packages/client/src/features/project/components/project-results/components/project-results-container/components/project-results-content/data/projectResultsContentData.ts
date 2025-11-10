const PROJECT_RESULTS_CONTENT_ARIA_LABEL: string = "Project results content";
const PROJECT_RESULTS_CONTENT_TITLE: string = "FINAL RESULTS";
const PROJECT_RESULTS_CONTENT_SPAN: string = "RESULTS";

import type { ProjectInterface } from "../../../../../../../data/projectData";

export interface ProjectResultsContentProps {
   project: ProjectInterface;
}

export { PROJECT_RESULTS_CONTENT_ARIA_LABEL, PROJECT_RESULTS_CONTENT_SPAN, PROJECT_RESULTS_CONTENT_TITLE };
