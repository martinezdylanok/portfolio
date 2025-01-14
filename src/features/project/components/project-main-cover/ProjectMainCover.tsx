import ProjectMainCoverContainer from "./components/project-main-cover-container/ProjectMainCoverContainer";
import { PROJECT_MAIN_COVER_ARIA_LABEL } from "./data/projectMainCoverData";

const ProjectMainCover = () => {
   return (
      <section className="project__main-cover" aria-label={PROJECT_MAIN_COVER_ARIA_LABEL}>
         <ProjectMainCoverContainer />
      </section>
   );
};

export default ProjectMainCover;
