import { useParams } from "react-router";
import useFetchData from "../../utils/hooks/useFetchData/useFetchData";
import { useThemeContext } from "../../utils/hooks/useTheme";
import ProjectFeatures from "./components/project-features/ProjectFeatures";
import ProjectMainCover from "./components/project-main-cover/ProjectMainCover";
import ProjectOverview from "./components/project-overview/ProjectOverview";
import ProjectRelated from "./components/project-related/ProjectRelated";
import ProjectResults from "./components/project-results/ProjectResults";
import type { ProjectInterface } from "./data/projectData";
import { PROJECT_ARIA_LABEL } from "./data/projectData";

const Project = () => {
   const { mode } = useThemeContext();
   const { projectName } = useParams<{ projectName: string }>();
   const apiPath = projectName ? `projects/${projectName}` : null;
   const { data: project, loading, error } = useFetchData<ProjectInterface>(apiPath);

   if (loading) {
      return (
         <span className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`} aria-label="Loading project">
            Loading projects...
         </span>
      );
   }

   if (error) {
      return (
         <span className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`} aria-label="Error message">
            Error loading project: {error.message}
         </span>
      );
   }

   if (!project) {
      return (
         <span className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`} aria-label="Error message">
            No projects data available or unexpected format.
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
