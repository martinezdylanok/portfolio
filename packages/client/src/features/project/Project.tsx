import { useParams } from "react-router";
import useFetchData from "../../utils/hooks/useFetchData/useFetchData";
import ProjectMainCover from "./components/project-main-cover/ProjectMainCover";
import ProjectOverview from "./components/project-overview/ProjectOverview";
import ProjectRelated from "./components/project-related/ProjectRelated";
import ProjectResults from "./components/project-results/ProjectResults";
import ProjectTimeline from "./components/project-timeline/ProjectTimeline";
import type { ProjectInterface } from "./data/projectData";
import { PROJECT_ARIA_LABEL, PROJECT_ERROR_ARIA_LABEL, PROJECT_ERROR_TEXT, PROJECT_LOADING_ARIA_LABEL, PROJECT_LOADING_TEXT, PROJECT_NO_DATA_TEXT } from "./data/projectData";
import { buildProjectApiPath } from "./utils/buildProjectApiPath";

const Project = () => {
   const { projectName } = useParams<{ projectName: string }>();
   const apiPath = buildProjectApiPath(projectName);
   const { data: project, loading, error } = useFetchData<ProjectInterface>(apiPath);

   if (loading) {
      return (
         <span className="project__loading-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECT_LOADING_ARIA_LABEL}>
            {PROJECT_LOADING_TEXT}
         </span>
      );
   }

   if (error) {
      return (
         <span className="project__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECT_ERROR_ARIA_LABEL}>
            {PROJECT_ERROR_TEXT} {error.message}
         </span>
      );
   }

   if (!project) {
      return (
         <span className="project__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECT_ERROR_ARIA_LABEL}>
            {PROJECT_NO_DATA_TEXT}
         </span>
      );
   }

   return (
      <div className="project__container flex flex-col" aria-label={PROJECT_ARIA_LABEL}>
         <ProjectMainCover project={project} />
         <ProjectOverview project={project} />
         <ProjectTimeline project={project} />
         <ProjectResults project={project} />
         <ProjectRelated />
      </div>
   );
};

export default Project;
