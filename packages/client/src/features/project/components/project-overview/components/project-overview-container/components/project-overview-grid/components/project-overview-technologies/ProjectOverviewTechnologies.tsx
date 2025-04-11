import { useThemeContext } from "../../../../../../../../../../utils/hooks/useTheme";
import { PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL, PROJECT_OVERVIEW_TECHNOLOGIES_TITLE, ProjectOverviewTechnologiesProps } from "./data/projectOverviewTechnologiesData";

const ProjectOverviewTechnologies = ({ project }: ProjectOverviewTechnologiesProps) => {
   const { mode } = useThemeContext();

   // REFACTOR: Make these be in the tailwind config.
   const textColorClass = mode === "light" ? "text-[#B6CCFE]" : "text-[#E2EAFC]";

   return (
      <div className="project__overview-grid-technologies" aria-label={PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL}>
         <h3 className={`text-xl mb-6 ${textColorClass} project__overview-grid-technologies-title`}>{PROJECT_OVERVIEW_TECHNOLOGIES_TITLE}</h3>
         <p className={`text-2xl font-semibold text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} project__overview-grid-technologies-list`}>{project.project_overview_technologies}</p>
      </div>
   );
};

export default ProjectOverviewTechnologies;
