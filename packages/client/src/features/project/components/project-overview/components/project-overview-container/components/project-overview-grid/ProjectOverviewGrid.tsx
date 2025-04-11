import ProjectOverviewTechnologies from "./components/project-overview-technologies/ProjectOverviewTechnologies";
import ProjectOverviewDuration from "./components/project-overview-duration/ProjectOverviewDuration";
import { PROJECT_OVERVIEW_GRID_ARIA_LABEL, ProjecOverviewGridProps } from "./data/projectOverviewGridData";
import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";

const ProjectOverviewGrid = ({ project }: ProjecOverviewGridProps) => {
   const { mode } = useThemeContext();

   // REFACTOR: Make these be in the tailwind config.
   // TODO: inspect colors to match perfectly text color of ProjectOverviewDuration and ProejctOverViewTechnologies
   const borderColorClass = mode === "light" ? "border-[#B6CCFE80]" : "border-[#E2EAFC80]";

   return (
      <div className="flex gap-2.5 h-fit w-1/2 project__overview-grid" aria-label={PROJECT_OVERVIEW_GRID_ARIA_LABEL}>
         <ProjectOverviewTechnologies project={project} />
         <div className={`mx-6 max-h-full w-[2px] self-stretch border border-solid ${borderColorClass}`} aria-hidden="true"></div>
         <ProjectOverviewDuration project={project} />
      </div>
   );
};

export default ProjectOverviewGrid;
