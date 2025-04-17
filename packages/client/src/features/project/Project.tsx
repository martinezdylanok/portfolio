import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useThemeContext } from "../../utils/hooks/useTheme";
import ProjectFeatures from "./components/project-features/ProjectFeatures";
import ProjectMainCover from "./components/project-main-cover/ProjectMainCover";
import ProjectOverview from "./components/project-overview/ProjectOverview";
import ProjectRelated from "./components/project-related/ProjectRelated";
import ProjectResults from "./components/project-results/ProjectResults";
import type { ProjectInterface } from "./data/projectData";
import { PROJECT_ARIA_LABEL } from "./data/projectData";

const Project = () => {
   const { projectName } = useParams();
   const { mode } = useThemeContext();
   const [project, setProject] = useState<ProjectInterface | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setProject(null);
      setLoading(true);

      const fetchProjects = async () => {
         if (!projectName) {
            setLoading(false);
            return;
         }

         try {
            // for testing purposes await new Promise((resolve) => setTimeout(resolve, 2000));

            const response = await fetch(`http://localhost:3000/api/projects/${projectName}`);

            if (!response.ok) {
               setLoading(false);
               return;
            }

            const apiResponse = await response.json();

            if (apiResponse && apiResponse.success && apiResponse.data) {
               setProject(apiResponse.data);
               setLoading(false);
            } else {
               console.error("Unexpected API response format:", apiResponse);
               setProject(null);
               setLoading(false);
            }
         } catch (error) {
            console.error("Error fetching projects:", error);
            setProject(null);
            setLoading(false);
         }
      };

      fetchProjects();
   }, [projectName]);

   if (loading) {
      return (
         <span className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`} aria-label="Loading project">
            Loading project...
         </span>
      );
   }

   if (!project) {
      return (
         <span className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`} aria-label="Project not found error">
            404 ERROR: PROJECT NOT FOUND
         </span>
      );
   }

   return (
      <div className="pt-25 project__container" aria-label={PROJECT_ARIA_LABEL}>
         <ProjectMainCover project={project} />
         <ProjectOverview project={project} />
         <ProjectFeatures project={project} />
         <ProjectResults project={project} />
         <ProjectRelated />
      </div>
   );
};

export default Project;
