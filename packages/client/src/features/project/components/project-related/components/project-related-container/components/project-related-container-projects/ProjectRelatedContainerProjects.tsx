import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import type { ProjectInterface } from "./data/projectRelatedContainerProjectsData.ts";
import { PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL } from "./data/projectRelatedContainerProjectsData.ts";

const ProjectRelatedContainerProjects = () => {
   const [projects, setProjects] = useState<ProjectInterface[]>([]);
   const { mode } = useThemeContext();

   const getRandomProjects = (projectsArray: ProjectInterface[], count: number): ProjectInterface[] => {
      const shuffled = [...projectsArray];

      // Fisher-Yates shuffle algorithm
      for (let i = shuffled.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled.slice(0, Math.min(count, shuffled.length));
   };

   const getProjectNameParts = (projectName: string): { firstPart: string; secondPart: string } => {
      const projectNameParts = projectName.split(":");

      const firstPart = projectNameParts[0]?.toUpperCase() || "";
      const secondPart = projectNameParts[1]?.trim() || "";

      return { firstPart, secondPart };
   };

   /* REFACTOR: into a React hook, HeaderNavigation also uses it */
   useEffect(() => {
      const fetchProjects = async () => {
         try {
            const response = await fetch("http://localhost:3000/api/projects"); // TODO: Simplify this URL

            if (!response.ok) {
               throw new Error(`Failed to fetch projects: ${response.status}`);
            }
            const projectsData = await response.json();
            if (projectsData && projectsData.success && Array.isArray(projectsData.data)) {
               const randomProjects = getRandomProjects(projectsData.data, 2);
               setProjects(randomProjects);
            } else {
               console.error("Unexpected API response format:", projectsData);
            }
         } catch (error) {
            console.error("Error fetching projects: ", error);
         }
      };

      fetchProjects();
   }, []);

   return (
      <div className="project__related-projects" aria-label={PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL}>
         <ul className="flex justify-between project__related-projects-list">
            {projects.map((project) => {
               const { firstPart, secondPart } = getProjectNameParts(project.project_name);
               //TODO: Add placeholders in the DATA file.
               return (
                  <Link key={project.project_id} to={`/projects/${project.project_name}`}>
                     <li className="project__related-project">
                        <div className="project__related-project-upper-part">
                           <img className="size-[20rem]" src="../../../../../../../../../public/success_icon_dark_mode.svg" alt="Project image" />
                        </div>
                        <div className="flex flex-col project__related-project-lower-part">
                           <span className={`text-2xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} mb-6`}>{secondPart || "A look into the project"}</span>
                           <h3 className={`text-4xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} font-bold`}>{firstPart}</h3>
                        </div>
                     </li>
                  </Link>
               );
            })}
         </ul>
      </div>
   );
};

export default ProjectRelatedContainerProjects;
