import ProjectRelatedContainerContent from "./components/project-related-container-content/ProjectRelatedContainerContent";
import ProjectRelatedContainerVideos from "./components/project-related-container-videos/ProjectRelatedContainerVideos";

const ProjectRelatedContainer = () => {
   return (
      <div className="related__container" aria-label="Related projects container">
         <ProjectRelatedContainerContent />
         <ProjectRelatedContainerVideos />
      </div>
   );
};

export default ProjectRelatedContainer;
