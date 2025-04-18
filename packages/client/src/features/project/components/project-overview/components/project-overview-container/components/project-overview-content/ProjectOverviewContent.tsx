import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import { PROJECT_OVERVIEW_CONTENT_ARIA_LABEL, PROJECT_OVERVIEW_CONTENT_TITLE_TEXT, ProjectOverviewContentProps } from "./data/projectOverviewContentData";

const ProjectOverviewContent = ({ project }: ProjectOverviewContentProps) => {
   const { mode } = useThemeContext();

   return (
      <div className="max-w-1/2 flex flex-col justify-end project__overview-content" aria-label={PROJECT_OVERVIEW_CONTENT_ARIA_LABEL}>
         <h2 className={`text-8xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} font-bold mb-12 project_overview__content-title`}>{PROJECT_OVERVIEW_CONTENT_TITLE_TEXT}</h2>
         <p className={`text-2xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} text-left project_overview__content-description`}>{project.project_overview_description}</p>
      </div>
   );
};

export default ProjectOverviewContent;
