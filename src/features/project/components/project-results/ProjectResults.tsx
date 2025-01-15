import ProjectResultsContainer from "./components/project-results-container/ProjectResultsContainer";
import { PROJECT_RESULTS_ARIA_LABEL } from "./data/projectResultsData";

const ProjectResults = () => {
   return (
      <section className="project__results" aria-label={PROJECT_RESULTS_ARIA_LABEL}>
         <ProjectResultsContainer />
      </section>
   );
};

export default ProjectResults;
