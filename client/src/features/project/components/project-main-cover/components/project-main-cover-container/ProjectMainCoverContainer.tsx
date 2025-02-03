import ProjectMainCoverContent from "./components/project-main-cover-content/ProjectMainCoverContent";
import ProjectMainCoverLogos from "./components/project-main-cover-logos/ProjectMainCoverLogos";
import { PROJECT_MAIN_COVER_CONTAINER_ARIA_LABEL } from "./data/projectMainCoverContainerData";

const ProjectMainCoverContainer = () => {
   return (
      <div className="main-cover__container" aria-label={PROJECT_MAIN_COVER_CONTAINER_ARIA_LABEL}>
         <ProjectMainCoverContent />
         <ProjectMainCoverLogos />
      </div>
   );
};

export default ProjectMainCoverContainer;
