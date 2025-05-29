const NAV_ARIA_LABEL_TEXT: string = "Main navigation";
const WRAPPER_ARIA_LABEL_TEXT: string = "Navigation wrapper";
const FORM_ARIA_LABEL_TEXT: string = "Search projects form";
const INPUT_ARIA_LABEL_TEXT: string = "Search projects";

export interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_technologies: string;
}

const SPAN_TEXT: string = "~/documents/Projects $";

const COMMANDS_LIST: string[] = ["ls", "cd"];

export interface HeaderNavigationProps {
   headerIsVisible: boolean;
}

export { COMMANDS_LIST, FORM_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT, SPAN_TEXT, WRAPPER_ARIA_LABEL_TEXT };

