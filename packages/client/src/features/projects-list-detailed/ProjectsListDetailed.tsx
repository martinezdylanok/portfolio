import { motion } from "framer-motion";
import useFetchData from "../../utils/hooks/useFetchData/useFetchData";
import ProjectsListDetailedProject from "./components/ProjectsListDetailedProject";
import { isOdd } from "./data/isOdd";
import type { ProjectInterface } from "./data/projectsListData";
import { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_DETAILED_HEADER_SPAN_01, PROJECTS_LIST_DETAILED_HEADER_SPAN_02, PROJECTS_LIST_DETAILED_HEADER_SPAN_03, PROJECTS_LIST_DETAILED_HEADER_SPAN_04, PROJECTS_LIST_DETAILED_HEADER_SPAN_05, PROJECTS_LIST_DETAILED_HEADER_SPAN_06, PROJECTS_LIST_DETAILED_HEADER_TITLE, PROJECTS_LIST_ERROR_ARIA_LABEL, PROJECTS_LIST_ERROR_TEXT, PROJECTS_LIST_LOADING_ARIA_LABEL, PROJECTS_LIST_LOADING_TEXT, PROJECTS_LIST_NO_DATA_TEXT, PROJECTS_LIST_UL_TEST_ID } from "./data/projectsListData";
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
      <div id="projects" className="projects-list-detailed__container flex flex-col gap-25 pb-25 overflow-hidden bg-page" aria-label={PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT}>
         <motion.div className="projects-list-detailed__header grid grid-cols-8 gap-y-25 w-full min-w-screen min-h-screen pt-25">
            <motion.h3 initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-title col-start-1 col-span-7 font-hanken-grotesk text-[200px] mb-12.5 text-heading font-bold leading-none">
               {PROJECTS_LIST_DETAILED_HEADER_TITLE}
            </motion.h3>
            <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description row-start-2 col-start-2 col-span-2 text-justify font-hanken-grotesk text-2xl text-body font-semibold leading-none">
               {PROJECTS_LIST_DETAILED_HEADER_SPAN_01}
            </motion.span>
            <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description row-start-2 col-start-6 col-span-2 text-right font-hanken-grotesk text-6xl text-heading font-bold leading-none">
               {PROJECTS_LIST_DETAILED_HEADER_SPAN_02}
            </motion.span>
            <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="flex flex-col gap-5 row-start-3 col-start-3 col-span-4">
               <span className="projects-list-detailed__header-description text-left italic font-hanken-grotesk text-2xl text-muted leading-none">{PROJECTS_LIST_DETAILED_HEADER_SPAN_03}</span>
               <span className="projects-list-detailed__header-description text-right font-hanken-grotesk text-2xl text-accent font-semibold leading-none">{PROJECTS_LIST_DETAILED_HEADER_SPAN_04}</span>
            </motion.div>
            <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description row-start-4 col-start-6 col-span-2 text-justify font-hanken-grotesk text-2xl text-body font-semibold leading-none">
               {PROJECTS_LIST_DETAILED_HEADER_SPAN_05}
            </motion.span>
            <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description row-start-4 col-start-2 col-span-2 text-left font-hanken-grotesk text-6xl text-heading font-bold leading-none">
               {PROJECTS_LIST_DETAILED_HEADER_SPAN_06}
            </motion.span>
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
