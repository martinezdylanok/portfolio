import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import { PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_TITLE, PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE } from "./data/projectRelatedContainerConentData";
import { Link } from "react-router";

const ProjectRelatedContainerContent = () => {
   const { mode } = useThemeContext();

   return (
      <div className="flex justify-between items-center project__related-content" aria-label={PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL}>
         <h2 className={`text-6xl font-bold text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} project__related-content-title`}>{PROJECT_RELATED_CONTAINER_CONTENT_TITLE}</h2>
         <span className={`text-2xl font-semibold text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} project__related-content-text`}>{PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE}</span>
      </div>
   );
};

export default ProjectRelatedContainerContent;
