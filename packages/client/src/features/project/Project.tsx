import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useThemeContext } from "../../utils/hooks/useTheme";
import ProjectFeatures from "./components/project-features/ProjectFeatures";
import ProjectMainCover from "./components/project-main-cover/ProjectMainCover";
import ProjectOverview from "./components/project-overview/ProjectOverview";
import ProjectRelated from "./components/project-related/ProjectRelated";
import ProjectResults from "./components/project-results/ProjectResults";
import { PROJECT_ARIA_LABEL } from "./data/projectData";
import type { ProjectInterface } from "./data/projectData";

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
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const response = await fetch(`http://localhost:3000/api/projects/${projectName}`);

            if (!response.ok) {
               if (response.status === 404) {
                  setProject(null);
                  setLoading(false);
                  return;
               }
            }

            const projectData = await response.json();
            if (projectData && projectData.success && projectData.data) {
               setProject(projectData.data);
            } else {
               console.error("Unexpected API response format:", projectData);

               setProject(null);
            }
         } catch (error) {
            console.error("Error fetching projects:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchProjects();
   }, [projectName]);

   if (loading) {
      return <div className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`}>Loading project...</div>;
   }

   if (!project) {
      return <div className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`}>404 ERROR: PROJECT NOT FOUND</div>;
   }

   return (
      <div className="project__container" aria-label={PROJECT_ARIA_LABEL}>
         <ProjectMainCover project={project} />
         <ProjectOverview project={project} />
         <ProjectFeatures project={project} />
         <ProjectResults project={project} />
         <ProjectRelated />
      </div>
   );
};

export default Project;
