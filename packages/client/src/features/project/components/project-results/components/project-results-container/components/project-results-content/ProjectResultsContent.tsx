import { motion } from "framer-motion";
import { PROJECT_RESULTS_CONTENT_ARIA_LABEL, PROJECT_RESULTS_CONTENT_SPAN, PROJECT_RESULTS_CONTENT_TITLE, ProjectResultsContentProps } from "./data/projectResultsContentData";
import { useProjectResultsBodyAnimations } from "./utils/useProjectResultsBodyAnimations";
import { useProjectResultsScrollAnimations } from "./utils/useProjectResultsScrollAnimations";

const ProjectResultsContent = ({ project }: ProjectResultsContentProps) => {
   const { containerRef, transforms } = useProjectResultsScrollAnimations();
   const { initial, whileInView, transition, viewport } = useProjectResultsBodyAnimations();

   return (
      <div ref={containerRef} className="project__results-content flex flex-col" aria-label={PROJECT_RESULTS_CONTENT_ARIA_LABEL}>
         <div className="project__results-content-header flex flex-col gap-3 mb-25 text-center" data-testid="results-content-header">
            <motion.span style={{ fontSize: transforms[0].fontSize, filter: transforms[0].blur }} className="project__results-content-header-title self-center font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_TITLE.split(" ")[0]} <br /> {PROJECT_RESULTS_CONTENT_TITLE.split(" ")[1]}
            </motion.span>
            <motion.span style={{ fontSize: transforms[1].fontSize, filter: transforms[1].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>

            <motion.span style={{ fontSize: transforms[2].fontSize, filter: transforms[2].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.span style={{ fontSize: transforms[3].fontSize, filter: transforms[3].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.span style={{ fontSize: transforms[4].fontSize, filter: transforms[4].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.span style={{ fontSize: transforms[5].fontSize, filter: transforms[5].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.span style={{ fontSize: transforms[6].fontSize, filter: transforms[6].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.h2 className="project__results-content-header-final font-hanken-grotesk text-8xl font-bold leading-none text-heading">{PROJECT_RESULTS_CONTENT_SPAN}</motion.h2>
         </div>
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="project__results-content-body flex flex-col gap-25">
            <div className="project__results-content-body-paragraphs grid gap-6">
               <p className="project__results-content-paragraph text-xl h-fit text-justify font-hanken-grotesk font-normal col-start-1 row-start-1 text-body" data-testid="results-content-paragraph">
                  {project.project_final_results_description_part_01}
               </p>
               <p className="project__results-content-paragraph text-xl h-fit text-justify font-hanken-grotesk font-normal col-start-2 row-start-2 text-body" data-testid="results-content-paragraph">
                  {project.project_final_results_description_part_02}
               </p>
            </div>
            <div className={`project__results-content-stats grid ${project.project_final_results_stat_03 ? "grid-cols-3" : "grid-cols-2"}`} data-testid="results-content-container">
               <div className="project__results-content-stat flex flex-col" data-testid="results-content-inner-container">
                  <span className="project__results-content-stat-title mb-6 text-xl font-hanken-grotesk font-medium text-muted">{project.project_final_results_stat_01_title}</span>
                  <h3 className="project__results-content-stat-value text-2xl font-hanken-grotesk font-bold text-body">{project.project_final_results_stat_01}</h3>
               </div>

               <div className={`project__results-content-stat flex flex-col ${project.project_final_results_stat_03 ? "text-start" : "text-end"}`} data-testid="results-content-inner-container">
                  <span className="project__results-content-stat-title mb-6 text-xl font-hanken-grotesk font-medium text-muted">{project.project_final_results_stat_02_title}</span>
                  <h3 className="project__results-content-stat-value text-2xl font-hanken-grotesk font-bold text-body">{project.project_final_results_stat_02}</h3>
               </div>

               {project.project_final_results_stat_03 && (
                  <div className="project__results-content-stat flex flex-col" data-testid="results-content-inner-container">
                     <span className="project__results-content-stat-title mb-6 text-xl font-hanken-grotesk font-medium text-muted">{project.project_final_results_stat_03_title}</span>
                     <h3 className="project__results-content-stat-value text-2xl font-hanken-grotesk font-bold text-body">{project.project_final_results_stat_03}</h3>
                  </div>
               )}
            </div>
         </motion.div>
      </div>
   );
};

export default ProjectResultsContent;
