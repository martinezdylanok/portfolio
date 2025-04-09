import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ProjectFeatures from "./components/project-features/ProjectFeatures";
import ProjectMainCover from "./components/project-main-cover/ProjectMainCover";
import ProjectOverview from "./components/project-overview/ProjectOverview";
import ProjectRelated from "./components/project-related/ProjectRelated";
import ProjectResults from "./components/project-results/ProjectResults";
import { PROJECT_ARIA_LABEL } from "./data/projectData";
import type { ProjectInterface } from "./data/projectData";

const Project = () => {
   const { projectName } = useParams();
   const [project, setProject] = useState<ProjectInterface | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setProject(null);
      setLoading(true);

      const fetchProjects = async () => {
         try {
            const response = await fetch(`http://localhost:3000/api/projects/${projectName}`);

            if (!response.ok) {
               if (response.status === 404) {
                  setProject(null);
                  setLoading(false);
                  return;
               }

               throw new Error(`Failed to fetch project: ${response.status}`);
            }

            const projectData = await response.json();
            setProject(projectData);
         } catch (error) {
            console.error("Error fetching projects:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchProjects();
   }, [projectName]);

   if (loading) {
      return <div>Loading project...</div>;
   }

   if (!project) {
      return <div>Project not found</div>;
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
