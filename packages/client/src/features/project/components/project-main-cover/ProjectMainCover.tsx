import ProjectMainCoverContainer from "./components/project-main-cover-container/ProjectMainCoverContainer";
import { PROJECT_MAIN_COVER_ARIA_LABEL, ProjectMainCoverProps } from "./data/projectMainCoverData";

const ProjectMainCover = ({ project }: ProjectMainCoverProps) => {
   return (
      <section className="max-w-[80%] mx-auto mb-50 project__main-cover" aria-label={PROJECT_MAIN_COVER_ARIA_LABEL}>
         <ProjectMainCoverContainer project={project} />
      </section>
   );
};

export default ProjectMainCover;
