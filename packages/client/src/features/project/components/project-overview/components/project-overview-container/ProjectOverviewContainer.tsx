import ProjectOverviewContent from "./components/project-overview-content/ProjectOverviewContent";
import ProjectOverviewGrid from "./components/project-overview-grid/ProjectOverviewGrid";
import ProjectOverviewImage from "./components/project-overview-image/ProjectOverviewImage";
import { PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL, ProjectOvervierContainerProps } from "./data/projectOverviewContainerData";

const ProjectOverviewContainer = ({ project }: ProjectOvervierContainerProps) => {
   return (
      <div className="flex flex-col project__overview-container" aria-label={PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL}>
         <ProjectOverviewImage project={project} />
         <div className="flex project__overview-inner-container">
            <ProjectOverviewGrid project={project} />
            <ProjectOverviewContent project={project} />
         </div>
      </div>
   );
};

export default ProjectOverviewContainer;
