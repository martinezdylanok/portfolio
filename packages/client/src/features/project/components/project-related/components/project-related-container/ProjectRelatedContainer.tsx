import ProjectRelatedContainerContent from "./components/project-related-container-content/ProjectRelatedContainerContent";
import ProjectRelatedContainerProjects from "./components/project-related-container-projects/ProjectRelatedContainerProjects";
import { PROJECT_RELATED_CONTAINER_ARIA_LABEL } from "./data/projectRelatedContainerData";

const ProjectRelatedContainer = () => {
   return (
      <div className="flex flex-col gap-12.5 project__related-container" aria-label={PROJECT_RELATED_CONTAINER_ARIA_LABEL}>
         <ProjectRelatedContainerContent />
         <ProjectRelatedContainerProjects />
      </div>
   );
};

export default ProjectRelatedContainer;
