import { motion } from "framer-motion";
import ProjectMainCoverContent from "./components/project-main-cover-content/ProjectMainCoverContent";
import ProjectMainCoverLogos from "./components/project-main-cover-logos/ProjectMainCoverLogos";
import { PROJECT_MAIN_COVER_CONTAINER_ARIA_LABEL, ProjectMainCoverContainerProps } from "./data/projectMainCoverContainerData";
import { useProjectMainCoverContainerAnimations } from "./utils/useProjectMainCoverContainerAnimations";

const ProjectMainCoverContainer = ({ project }: ProjectMainCoverContainerProps) => {
   const { initial, whileInView, transition, viewport } = useProjectMainCoverContainerAnimations();

   return (
      <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="project__main-cover-container grid gap-24 content-center" aria-label={PROJECT_MAIN_COVER_CONTAINER_ARIA_LABEL}>
         <ProjectMainCoverContent project={project} />
         <ProjectMainCoverLogos project={project} />
      </motion.div>
   );
};

export default ProjectMainCoverContainer;
