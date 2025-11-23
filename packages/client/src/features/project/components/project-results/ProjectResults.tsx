import ProjectResultsContainer from "./components/project-results-container/ProjectResultsContainer";
import { PROJECT_RESULTS_ARIA_LABEL, ProjectResultsProps } from "./data/projectResultsData";

const ProjectResults = ({ project }: ProjectResultsProps) => {
   return (
      <section className="project__results min-w-screen bg-section p-25" aria-label={PROJECT_RESULTS_ARIA_LABEL}>
         <ProjectResultsContainer project={project} />
      </section>
   );
};

export default ProjectResults;
