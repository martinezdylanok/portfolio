import ProjectResultsContent from "./components/project-results-content/ProjectResultsContent";
import { PROJECT_RESULTS_CONTAINER_ARIA_LABEL, ProjectResultsContainerProps } from "./data/projectResultsContainerData";

const ProjectResultsContainer = ({ project }: ProjectResultsContainerProps) => {
   return (
      <div className="project__results-container" aria-label={PROJECT_RESULTS_CONTAINER_ARIA_LABEL}>
         <ProjectResultsContent project={project} />
      </div>
   );
};

export default ProjectResultsContainer;
