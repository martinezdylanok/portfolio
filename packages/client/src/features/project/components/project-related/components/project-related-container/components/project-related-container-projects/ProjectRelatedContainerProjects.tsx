import ProjectRelatedContainerProjectsProject from "./components/project-related-container-projects-project/ProjectRelatedContainerProjectsProject.tsx";
import { PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL, getProjectNameParts } from "./data/projectRelatedContainerProjectsData.ts";
import { useRelatedProjects } from "./utils/useRelatedProjects";

const ProjectRelatedContainerProjects = () => {
   const { relatedProjects, loading, error } = useRelatedProjects();

   if (loading) {
      return (
         <span className="project__related-container-projects-loading-message text-center text-2xl font-semibold pt-48 text-heading" aria-label="Loading projects">
            Loading projects...
         </span>
      );
   }

   if (error) {
      return (
         <span className="project__related-container-projects-error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label="Error message">
            Error loading projects: {error.message}
         </span>
      );
   }

   if (relatedProjects.length === 0) {
      return (
         <span className="project__related-container-projects-error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label="Error message">
            No projects data available or unexpected format.
         </span>
      );
   }

   return (
      <div className="project__related-container-projects" aria-label={PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL}>
         <ul className="project__related-container-projects-list flex justify-between" data-testid="related-projects-list">
            {relatedProjects.map((project) => {
               const { firstPart, secondPart } = getProjectNameParts(project.project_name);
               //TODO: Add placeholders in the DATA file.
               return <ProjectRelatedContainerProjectsProject key={project.project_id} firstPart={firstPart} secondPart={secondPart} project={project} />;
            })}
         </ul>
      </div>
   );
};

export default ProjectRelatedContainerProjects;
