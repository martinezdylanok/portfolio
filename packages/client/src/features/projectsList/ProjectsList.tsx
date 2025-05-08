import useFetchData from "../../utils/hooks/useFetchData/useFetchData";
import { useThemeContext } from "../../utils/hooks/useTheme";
import ProjectsListProject from "./components/ProjectsListProject";
import { isOdd } from "./data/isOdd";
import type { ProjectInterface } from "./data/projectsListData";
import { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_UL_TEST_ID } from "./data/projectsListData";
import "./styles/projects-list-styles.css";

const ProjectsList = () => {
   const { mode } = useThemeContext();
   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("projects");

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

   if (!projects || !Array.isArray(projects)) {
      return (
         <span className={`text-center text-2xl font-semibold pt-48 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`} aria-label="Error message">
            No projects data available or unexpected format.
         </span>
      );
   }

   return (
      <main>
         <div className="projects-list__container" aria-label={PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT}>
            <ul className={`p-5 flex flex-col gap-10 projects-list__list`} data-testid={PROJECTS_LIST_UL_TEST_ID}>
               {projects.map((project, index) => {
                  const isOddProject = isOdd(index);
                  return <ProjectsListProject key={project.project_id} project={project} isOddProject={isOddProject} />;
               })}
            </ul>
         </div>
      </main>
   );
};

export default ProjectsList;
