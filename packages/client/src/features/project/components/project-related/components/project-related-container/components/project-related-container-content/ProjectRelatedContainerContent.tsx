import { Link } from "react-router";
import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import { PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE, PROJECT_RELATED_CONTAINER_CONTENT_TITLE } from "./data/projectRelatedContainerConentData";

const ProjectRelatedContainerContent = () => {
   const { mode } = useThemeContext();

   return (
      //TODO: Add placeholders in the DATA file.
      <div className="flex justify-between items-center project__related-content" aria-label={PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL}>
         <h2 className={`text-6xl font-bold mb-6 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} project__related-content-title`}>{PROJECT_RELATED_CONTAINER_CONTENT_TITLE}</h2>
         <Link to={`/projects/`} aria-label={PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL}>
            <span className={`relative group text-2xl font-semibold text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} project__related-content-text`}>
               {PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE}
               <span className="absolute left-0 bottom-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </span>
         </Link>
      </div>
   );
};

export default ProjectRelatedContainerContent;
