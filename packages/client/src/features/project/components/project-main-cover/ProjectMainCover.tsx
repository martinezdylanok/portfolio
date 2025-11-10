import ProjectMainCoverContainer from "./components/project-main-cover-container/ProjectMainCoverContainer";
import { PROJECT_MAIN_COVER_ARIA_LABEL, ProjectMainCoverProps } from "./data/projectMainCoverData";

const ProjectMainCover = ({ project }: ProjectMainCoverProps) => {
   return (
      <section className="project__main-cover p-25 flex min-w-screen min-h-screen bg-page" aria-label={PROJECT_MAIN_COVER_ARIA_LABEL}>
         <ProjectMainCoverContainer project={project} />
      </section>
   );
};

export default ProjectMainCover;
