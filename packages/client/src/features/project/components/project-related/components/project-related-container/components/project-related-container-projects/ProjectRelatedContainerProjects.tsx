import { useEffect, useState } from "react";
import useFetchData from "../../../../../../../../utils/hooks/useFetchData/useFetchData.tsx";
import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import ProjectRelatedContainerProjectsProject from "./components/project-related-container-projects-project/ProjectRelatedContainerProjectsProject.tsx";
import type { ProjectInterface } from "./data/projectRelatedContainerProjectsData.ts";
import { PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL, getProjectNameParts, getRandomProjects } from "./data/projectRelatedContainerProjectsData.ts";

const ProjectRelatedContainerProjects = () => {
   const { mode } = useThemeContext();
   const { data: allProjects, loading, error } = useFetchData<ProjectInterface[]>("/projects");
   const [relatedProjects, setRelatedProjects] = useState<ProjectInterface[]>([]);

   useEffect(() => {
      if (!loading && !error && allProjects && Array.isArray(allProjects) && allProjects.length > 0) {
         const randomProjects = getRandomProjects(allProjects, 2);
         setRelatedProjects(randomProjects);
      } else if (!loading && !error && !allProjects) {
         setRelatedProjects([]);
      }
   }, [allProjects, loading, error]);

   if (loading) {
      return (
         <span className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`} aria-label="Loading projects">
            Loading projects...
         </span>
      );
   }

   if (error) {
      return (
         <span className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`} aria-label="Error message">
            Error loading projects: {error.message}
         </span>
      );
   }

   if (relatedProjects.length === 0) {
      return (
         <span className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`} aria-label="Error message">
            No projects data available or unexpected format.
         </span>
      );
   }

   return (
      <div className="project__related-projects" aria-label={PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL}>
         <ul className="flex justify-between project__related-projects-list" data-testid="related-projects-list">
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
