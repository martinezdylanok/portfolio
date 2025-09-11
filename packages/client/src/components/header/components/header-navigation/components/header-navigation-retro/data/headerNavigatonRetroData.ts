const CONTAINER_ARIA_LABEL_TEXT: string = "Retro container";
const WRAPPER_ARIA_LABEL_TEXT: string = "Retro navigation wrapper";
const FORM_ARIA_LABEL_TEXT: string = "Search projects form";
const INPUT_ARIA_LABEL_TEXT: string = "Search projects";

export interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_technologies: string;
}

const SPAN_TEXT: string = "~/dylan/portfolio/projects $";

const COMMANDS_LIST: string[] = ["ls", "cd"];

export { COMMANDS_LIST, CONTAINER_ARIA_LABEL_TEXT, FORM_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT, SPAN_TEXT, WRAPPER_ARIA_LABEL_TEXT };
