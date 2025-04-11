import ProjectOverviewContainer from "./components/project-overview-container/ProjectOverviewContainer";
import { PROJECT_OVERVIEW_ARIA_LABEL, ProjectOverviewProps } from "./data/projectOverviewData";

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
   return (
      <section className="max-w-[80%] mx-auto mb-50 project__overview" aria-label={PROJECT_OVERVIEW_ARIA_LABEL}>
         <ProjectOverviewContainer project={project} />
      </section>
   );
};

export default ProjectOverview;
