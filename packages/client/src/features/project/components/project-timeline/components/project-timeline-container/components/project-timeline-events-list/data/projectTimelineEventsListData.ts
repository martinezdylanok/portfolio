const PROJECT_TIMELINE_EVENTS_LIST_ARIA_LABEL: string = "Project timeline events list";
const PROJECT_TIMELINE_EVENTS_LIST_TITLE: string = "Timeline";

import type { ProjectInterface } from "../../../../../../../data/projectData";

export interface ProjectTimelineEventsListProps {
   project: ProjectInterface;
}

export { PROJECT_TIMELINE_EVENTS_LIST_ARIA_LABEL, PROJECT_TIMELINE_EVENTS_LIST_TITLE };
