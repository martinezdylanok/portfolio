import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import { PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL, ProjectMainCoverContentProps } from "./data/projectMainCoverContentData";

const ProjectMainCoverContent = ({ project }: ProjectMainCoverContentProps) => {
   const { mode } = useThemeContext();

   const projectNameParts = project.project_name.split(":");

   const firstPartName = projectNameParts[0]?.toUpperCase() || "";

   const secondPartName = projectNameParts[1]?.trim() || "";

   return (
      <div className="max-w-1/2 main-cover__content" aria-label={PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL}>
         {secondPartName && (
            <h2 className={`text-2xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} mb-6`} data-testid="Second part name">
               {secondPartName}
            </h2>
         )}
         <h2 className={`text-8xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} font-bold mb-12 main-cover__project-title`} data-testid="First part name">
            {firstPartName}
         </h2>
         <p className={`text-2xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} text-left main-cover__project-description`} data-testid="Project description">
            {project.project_description}
         </p>
      </div>
   );
};

export default ProjectMainCoverContent;
