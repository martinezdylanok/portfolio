import ProjectMainCoverContent from "./components/project-main-cover-content/ProjectMainCoverContent";
import ProjectMainCoverLogos from "./components/project-main-cover-logos/ProjectMainCoverLogos";

const ProjectMainCoverContainer = () => {
   return (
      <div className="main-cover__container" aria-label="Main cover container">
         <ProjectMainCoverContent />
         <ProjectMainCoverLogos />
      </div>
   );
};

export default ProjectMainCoverContainer;
