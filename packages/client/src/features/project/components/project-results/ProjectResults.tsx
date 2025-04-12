import ProjectResultsContainer from "./components/project-results-container/ProjectResultsContainer";
import { PROJECT_RESULTS_ARIA_LABEL, ProjectResultsProps } from "./data/projectResultsData";

const ProjectResults = ({ project }: ProjectResultsProps) => {
   return (
      <section className="max-w-[80%] mx-auto mb-50 project__results" aria-label={PROJECT_RESULTS_ARIA_LABEL}>
         <ProjectResultsContainer project={project} />
      </section>
   );
};

export default ProjectResults;
