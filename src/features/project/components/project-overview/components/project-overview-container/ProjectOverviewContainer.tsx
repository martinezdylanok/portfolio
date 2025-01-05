import ProjectOverviewContent from "./components/project-overview-content/ProjectOverviewContent";
import ProjectOverviewGrid from "./components/project-overview-grid/ProjectOverviewGrid";

const ProjectOverviewContainer = () => {
   return (
      <div className="overview__container" aria-label="Overview container">
         <ProjectOverviewContent />
         <ProjectOverviewGrid />
      </div>
   );
};

export default ProjectOverviewContainer;
