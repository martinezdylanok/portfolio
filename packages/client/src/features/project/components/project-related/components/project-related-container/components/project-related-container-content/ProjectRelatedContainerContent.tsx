import { Link } from "react-router";
import { PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE, PROJECT_RELATED_CONTAINER_CONTENT_TITLE } from "./data/projectRelatedContainerConentData";

const ProjectRelatedContainerContent = () => {
   return (
      //TODO: Add placeholders in the DATA file.
      <div className="project__related-container-content flex justify-between mb-12 items-end" aria-label={PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL}>
         <Link to={`/projects/`} className="project__related-container-content-link" aria-label={PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL}>
            <span className="project__related-container-content-text relative group font-hanken-grotesk text-2xl font-medium text-heading">
               {PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE}
               <span className="project__related-container-content-text-underline absolute left-0 bottom-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </span>
         </Link>
         <h2 className="project__related-container-content-title text-8xl font-hanken-grotesk font-bold text-heading">{PROJECT_RELATED_CONTAINER_CONTENT_TITLE}</h2>
      </div>
   );
};

export default ProjectRelatedContainerContent;
