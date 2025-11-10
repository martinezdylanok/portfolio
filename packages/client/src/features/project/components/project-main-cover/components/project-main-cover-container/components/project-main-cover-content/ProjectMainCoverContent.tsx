import { motion } from "framer-motion";
import { PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL, ProjectMainCoverContentProps } from "./data/projectMainCoverContentData";
import { parseProjectName } from "./utils/parseProjectName";
import { useProjectMainCoverScrollAnimations } from "./utils/useProjectMainCoverScrollAnimations";

// TODO: Implement y, progress and opacity based on container instead of fixed pixels.

const ProjectMainCoverContent = ({ project }: ProjectMainCoverContentProps) => {
   const { y, opacity } = useProjectMainCoverScrollAnimations();
   const { firstPart, secondPart } = parseProjectName(project.project_name);

   return (
      <div className="project__main-cover-content flex flex-col col-start-1 row-start-1" aria-label={PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL}>
         {secondPart && (
            <motion.h3 style={{ y, opacity }} className="project__main-cover-content-subtitle font-bold text-2xl text-heading" data-testid="Second part name">
               {secondPart}
            </motion.h3>
         )}
         <motion.h2 className="project__main-cover-content-title text-8xl text-heading font-bold mb-12.5" data-testid="First part name">
            {firstPart}
         </motion.h2>
         <p className="project__main-cover-content-description font-normal text-xl text-justify text-body" data-testid="Project description">
            {project.project_description}
         </p>
      </div>
   );
};

export default ProjectMainCoverContent;
