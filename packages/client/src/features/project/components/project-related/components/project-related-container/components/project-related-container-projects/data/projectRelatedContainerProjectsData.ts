const PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL: string = "Related projects container projects";
import type { ProjectInterface } from "../../../../../../../data/projectData";

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

export { getProjectNameParts, getRandomProjects, PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL };
