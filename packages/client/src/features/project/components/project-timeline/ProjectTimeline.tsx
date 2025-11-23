import ProjectTimelineContainer from "./components/project-timeline-container/ProjectTimelineContainer";
import { PROJECT_TIMELINE_ARIA_LABEL, ProjectTimelineProps } from "./data/projectTimelineData";

const ProjectTimeline = ({ project }: ProjectTimelineProps) => {
   return (
      <section className="project__timeline min-h-screen min-w-screen bg-card p-25" aria-label={PROJECT_TIMELINE_ARIA_LABEL}>
         <ProjectTimelineContainer project={project} />
      </section>
   );
};

export default ProjectTimeline;
