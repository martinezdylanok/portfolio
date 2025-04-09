import ProjectOverviewContent from "./components/project-overview-content/ProjectOverviewContent";
import ProjectOverviewGrid from "./components/project-overview-grid/ProjectOverviewGrid";
import { PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL, ProjectOvervierContainerProps } from "./data/projectOverviewContainerData";

const ProjectOverviewContainer = ({ project }: ProjectOvervierContainerProps) => {
   return (
      <div className="project__overview-container" aria-label={PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL}>
         <ProjectOverviewContent project={project} />
         <ProjectOverviewGrid project={project} />
      </div>
   );
};

export default ProjectOverviewContainer;
