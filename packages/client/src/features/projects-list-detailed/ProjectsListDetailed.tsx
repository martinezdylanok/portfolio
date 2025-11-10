import { motion } from "framer-motion";
import useFetchData from "../../utils/hooks/useFetchData/useFetchData";
import ProjectsListDetailedProject from "./components/ProjectsListDetailedProject";
import { isOdd } from "./data/isOdd";
import type { ProjectInterface } from "./data/projectsListData";
import { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_DETAILED_HEADER_DESCRIPTION, PROJECTS_LIST_DETAILED_HEADER_TITLE, PROJECTS_LIST_ERROR_ARIA_LABEL, PROJECTS_LIST_ERROR_TEXT, PROJECTS_LIST_LOADING_ARIA_LABEL, PROJECTS_LIST_LOADING_TEXT, PROJECTS_LIST_NO_DATA_TEXT, PROJECTS_LIST_UL_TEST_ID } from "./data/projectsListData";
import { useProjectsListDetailedHeaderAnimations } from "./utils/useProjectsListDetailedHeaderAnimations";

const ProjectsListDetailed = () => {
   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("projects");
   const { initial, whileInView, transition, viewport } = useProjectsListDetailedHeaderAnimations();

   if (loading) {
      return (
         <span className="projects-list-detailed__loading-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_LOADING_ARIA_LABEL}>
            {PROJECTS_LIST_LOADING_TEXT}
         </span>
      );
   }

   if (error) {
      return (
         <span className="projects-list-detailed__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_ERROR_ARIA_LABEL}>
            {PROJECTS_LIST_ERROR_TEXT} {error.message}
         </span>
      );
   }

   if (!projects || !Array.isArray(projects)) {
      return (
         <span className="projects-list-detailed__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_ERROR_ARIA_LABEL}>
            {PROJECTS_LIST_NO_DATA_TEXT}
         </span>
      );
   }

   return (
      <div id="projects" className="projects-list-detailed__container pb-25 overflow-hidden bg-page" aria-label={PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT}>
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header flex flex-col min-w-screen min-h-screen pt-50">
            <motion.h3 className="projects-list-detailed__header-title font-hanken-grotesk text-[200px] mb-12.5 text-heading font-bold leading-none">{PROJECTS_LIST_DETAILED_HEADER_TITLE}</motion.h3>
            <span className="projects-list-detailed__header-description font-hanken-grotesk text-[80px] text-heading font-semibold leading-none">{PROJECTS_LIST_DETAILED_HEADER_DESCRIPTION}</span>
         </motion.div>
         <ul className="projects-list-detailed__list flex flex-col gap-10 px-5" data-testid={PROJECTS_LIST_UL_TEST_ID}>
            {projects.map((project, index) => {
               const isOddProject = isOdd(index);
               return <ProjectsListDetailedProject key={project.project_id} project={project} isOddProject={isOddProject} />;
            })}
         </ul>
      </div>
   );
};

export default ProjectsListDetailed;
