import { motion } from "framer-motion";
import useFetchData from "../../utils/hooks/useFetchData/useFetchData";
import ProjectsListProject from "./components/ProjectsListProject";
import { isOdd } from "./data/isOdd";
import type { ProjectInterface } from "./data/projectsListData";
import { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_ERROR_ARIA_LABEL, PROJECTS_LIST_ERROR_TEXT, PROJECTS_LIST_LOADING_ARIA_LABEL, PROJECTS_LIST_LOADING_TEXT, PROJECTS_LIST_NO_DATA_TEXT, PROJECTS_LIST_SCROLLING_TEXT_PROJECTS, PROJECTS_LIST_SCROLLING_TEXT_PROJEKTER, PROJECTS_LIST_SCROLLING_TEXT_PROYECTOS, PROJECTS_LIST_UL_TEST_ID } from "./data/projectsListData";
import { useProjectsListListAnimation, useProjectsListScrollAnimation } from "./utils/useProjectsListAnimations";

const ProjectsList = () => {
   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("projects");
   const { animate, transition: scrollTransition } = useProjectsListScrollAnimation();
   const { initial, whileInView, transition: listTransition, viewport } = useProjectsListListAnimation();

   if (loading) {
      return (
         <span className="projects-list__loading-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_LOADING_ARIA_LABEL}>
            {PROJECTS_LIST_LOADING_TEXT}
         </span>
      );
   }

   if (error) {
      return (
         <span className="projects-list__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_ERROR_ARIA_LABEL}>
            {PROJECTS_LIST_ERROR_TEXT} {error.message}
         </span>
      );
   }

   if (!projects || !Array.isArray(projects)) {
      return (
         <span className="projects-list__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_ERROR_ARIA_LABEL}>
            {PROJECTS_LIST_NO_DATA_TEXT}
         </span>
      );
   }

   return (
      <div id="projects" className="projects-list__container bg-page py-25" aria-label={PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT}>
         <div className="projects-list__content-wrapper flex flex-col gap-25 overflow-hidden">
            <motion.div className="projects-list__scrolling-text flex gap-2.5" animate={animate} transition={scrollTransition}>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJEKTER}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJECTS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROYECTOS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJEKTER}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJECTS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROYECTOS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJEKTER}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJECTS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROYECTOS}</span>
            </motion.div>
            <motion.ul initial={initial} whileInView={whileInView} transition={listTransition} viewport={viewport} className="projects-list__list flex flex-col gap-10 px-5" data-testid={PROJECTS_LIST_UL_TEST_ID}>
               {projects.map((project, index) => {
                  const isOddProject = isOdd(index);
                  return <ProjectsListProject key={project.project_id} project={project} isOddProject={isOddProject} index={index} />;
               })}
            </motion.ul>
         </div>
      </div>
   );
};

export default ProjectsList;
