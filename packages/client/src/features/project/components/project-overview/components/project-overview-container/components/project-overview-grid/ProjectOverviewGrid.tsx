import ProjectOverviewDuration from "./components/project-overview-duration/ProjectOverviewDuration";
import ProjectOverviewTechnologies from "./components/project-overview-technologies/ProjectOverviewTechnologies";
import { PROJECT_OVERVIEW_GRID_ARIA_LABEL, ProjecOverviewGridProps } from "./data/projectOverviewGridData";

const ProjectOverviewGrid = ({ project }: ProjecOverviewGridProps) => {
   return (
      <div className="project__overview-grid row-start-3 col-start-1 flex gap-12 mt-12 break-all h-fit" aria-label={PROJECT_OVERVIEW_GRID_ARIA_LABEL}>
         <ProjectOverviewTechnologies project={project} />
         <div className="project__overview-grid-divider max-h-full w-[2px] self-stretch border border-solid border-border-subtle" data-testid="divider" aria-hidden="true"></div>
         <ProjectOverviewDuration project={project} />
      </div>
   );
};

export default ProjectOverviewGrid;
