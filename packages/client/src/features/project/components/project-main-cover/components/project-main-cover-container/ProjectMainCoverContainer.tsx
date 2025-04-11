import ProjectMainCoverContent from "./components/project-main-cover-content/ProjectMainCoverContent";
import ProjectMainCoverLogos from "./components/project-main-cover-logos/ProjectMainCoverLogos";
import { PROJECT_MAIN_COVER_CONTAINER_ARIA_LABEL, ProjectMainCoverContainerProps } from "./data/projectMainCoverContainerData";

const ProjectMainCoverContainer = ({ project }: ProjectMainCoverContainerProps) => {
   return (
      <div className="flex main-cover__container" aria-label={PROJECT_MAIN_COVER_CONTAINER_ARIA_LABEL}>
         <ProjectMainCoverContent project={project} />
         <ProjectMainCoverLogos />
      </div>
   );
};

export default ProjectMainCoverContainer;
