import { useThemeContext } from "../../../../../../../../../../utils/hooks/useTheme";
import { PROJECT_OVERVIEW_DURATION_ARIA_LABEL, PROJECT_OVERVIEW_DURATION_TITLE_TEXT, ProjectOverviewDurationProps } from "./data/projectOverviewDurationData";

const ProjectOverviewDuration = ({ project }: ProjectOverviewDurationProps) => {
   const { mode } = useThemeContext();

   // REFACTOR: Make these be in the tailwind config.
   const textColorClass = mode === "light" ? "text-[#B6CCFE]" : "text-[#E2EAFC]";

   return (
      <div className="project__overview-grid-duration" aria-label={PROJECT_OVERVIEW_DURATION_ARIA_LABEL}>
         <h3 className={`text-xl mb-6 ${textColorClass}`}>{PROJECT_OVERVIEW_DURATION_TITLE_TEXT}</h3>
         <p className={`text-2xl font-semibold text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} project__overview-grid-duration`}>{project.project_overview_duration}</p>
      </div>
   );
};

export default ProjectOverviewDuration;
