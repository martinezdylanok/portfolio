import ProjectOverviewTechnologies from "./components/project-overview-technologies/ProjectOverviewTechnologies";
import ProjectOverviewDuration from "./components/project-overview-duration/ProjectOverviewDuration";
import ProjectOverviewDocumentation from "./components/project-overview-documentation/ProjectOverviewDocumentation";
import { PROJECT_OVERVIEW_GRID_ARIA_LABEL } from "./data/projectOverviewGridData";

const ProjectOverviewGrid = () => {
   return (
      <div className="project__overview-grid" aria-label={PROJECT_OVERVIEW_GRID_ARIA_LABEL}>
         <ProjectOverviewTechnologies />
         <ProjectOverviewDuration />
         <ProjectOverviewDocumentation />
      </div>
   );
};

export default ProjectOverviewGrid;
