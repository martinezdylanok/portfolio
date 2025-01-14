import ProjectOverviewContent from "./components/project-overview-content/ProjectOverviewContent";
import ProjectOverviewGrid from "./components/project-overview-grid/ProjectOverviewGrid";
import { PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL } from "./data/projectOverviewContainerData";

const ProjectOverviewContainer = () => {
   return (
      <div className="project__overview-container" aria-label={PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL}>
         <ProjectOverviewContent />
         <ProjectOverviewGrid />
      </div>
   );
};

export default ProjectOverviewContainer;
