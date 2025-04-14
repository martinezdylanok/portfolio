import ProjectRelatedContainerContent from "./components/project-related-container-content/ProjectRelatedContainerContent";
import ProjectRelatedContainerVideos from "./components/project-related-container-videos/ProjectRelatedContainerVideos";
import { PROJECT_RELATED_CONTAINER_ARIA_LABEL } from "./data/projectRelatedContainerData";

const ProjectRelatedContainer = () => {
   return (
      <div className="max-w-[80%] mx-auto pt-25 project__related-container" aria-label={PROJECT_RELATED_CONTAINER_ARIA_LABEL}>
         <ProjectRelatedContainerContent />
         <ProjectRelatedContainerVideos />
      </div>
   );
};

export default ProjectRelatedContainer;
