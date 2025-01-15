import ProjectResultsContent from "./components/project-results-content/ProjectResultsContent";
import { PROJECT_RESULTS_CONTAINER_ARIA_LABEL } from "./data/projectResultsContainerData";

const ProjectResultsContainer = () => {
   return (
      <div className="project__results-container" aria-label={PROJECT_RESULTS_CONTAINER_ARIA_LABEL}>
         <ProjectResultsContent />
      </div>
   );
};

export default ProjectResultsContainer;
