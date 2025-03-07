const NAV_ARIA_LABEL_TEXT: string = "Main navigation";
const BUTTON_ARIA_LABEL_TEXT: string = "Toggle projects menu";
const INPUT_ARIA_LABEL_TEXT: string = "Search projects";

interface Project {
   project_id: number;
   project_name: string;
}

const SPAN_TEXT: string = "~/documents/Projects $";

export { NAV_ARIA_LABEL_TEXT, BUTTON_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT, SPAN_TEXT };
export type { Project };
