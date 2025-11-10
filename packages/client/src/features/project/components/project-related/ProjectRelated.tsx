import ProjectRelatedContainer from "./components/project-related-container/ProjectRelatedContainer";
import { PROJECT_RELATED_ARIA_LABEL } from "./data/projectRelatedData";

const ProjectRelated = () => {
   return (
      <section className="project__related min-h-screen min-w-screen bg-section p-25" aria-label={PROJECT_RELATED_ARIA_LABEL}>
         <ProjectRelatedContainer />
      </section>
   );
};

export default ProjectRelated;
