//TODO: Fetch project's images.
import { motion } from "framer-motion";
import { PROJECT_OVERVIEW_IMAGE_ALT_TEXT, PROJECT_OVERVIEW_IMAGE_CONTAINER_ARIA_LABEL, PROJECT_OVERVIEW_IMAGE_WRAPPER_ARIA_LABEL, ProjectOverviewImageProps } from "./data/projectOverviewImageData";

const ProjectOverviewImage = ({ project }: ProjectOverviewImageProps) => {
   return (
      <div className="project__overview-image-wrapper" aria-label={PROJECT_OVERVIEW_IMAGE_WRAPPER_ARIA_LABEL}>
         <motion.div className="project__overview-image-container" aria-label={PROJECT_OVERVIEW_IMAGE_CONTAINER_ARIA_LABEL}>
            <img className="project__overview-image rounded-md" src="../../../../../../../../../public/prairie-dog-9569847_1920.jpg" alt={PROJECT_OVERVIEW_IMAGE_ALT_TEXT} />
         </motion.div>
      </div>
   );
};

export default ProjectOverviewImage;
