import { PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_TITLE, PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE } from "./data/projectRelatedContainerConentData";

const ProjectRelatedContainerContent = () => {
   return (
      <div className="project__related-content" aria-label={PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL}>
         <h2 className="project__related-content-title">{PROJECT_RELATED_CONTAINER_CONTENT_TITLE}</h2>
         <h3 className="project__related-content-subtitle">{PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE}</h3>
      </div>
   );
};

export default ProjectRelatedContainerContent;
