import { PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL, ProjectMainCoverContentProps } from "./data/projectMainCoverContentData";
import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";

const ProjectMainCoverContent = ({ project }: ProjectMainCoverContentProps) => {
   const { mode } = useThemeContext();

   const projectNameParts = project.project_name.split(":");

   const firstPart = projectNameParts[0]?.toUpperCase() || "";

   const secondPart = projectNameParts[1]?.trim() || "";

   return (
      <div className="max-w-1/2 main-cover__content" aria-label={PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL}>
         {secondPart && <h2 className={`text-2xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} mb-6`}>{secondPart}</h2>}
         <h3 className={`text-8xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} font-bold mb-12 main-cover__project-title`}>{firstPart}</h3>
         <p className={`text-2xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} text-left main-cover__project-description`}>{project.project_description}</p>
      </div>
   );
};

export default ProjectMainCoverContent;
