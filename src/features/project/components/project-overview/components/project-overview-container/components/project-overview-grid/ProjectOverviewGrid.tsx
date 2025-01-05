import ProjectOverviewTechnologies from "./components/project-overview-technologies/ProjectOverviewTechnologies";
import ProjectOverviewDuration from "./components/project-overview-duration/ProjectOverviewDuration";
import ProjectOverviewDocumentation from "./components/project-overview-documentation/ProjectOverviewDocumentation";

const ProjectOverviewGrid = () => {
   return (
      <div className="overview__grid" aria-label="Project overview grid">
         <ProjectOverviewTechnologies />
         <ProjectOverviewDuration />
         <ProjectOverviewDocumentation />
      </div>
   );
};

export default ProjectOverviewGrid;
