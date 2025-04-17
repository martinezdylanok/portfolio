//TODO: Fetch project's images.

import { PROJECT_OVERVIEW_IMAGE_ALT_TEXT, PROJECT_OVERVIEW_IMAGE_CONTAINER_ARIA_LABEL, PROJECT_OVERVIEW_IMAGE_WRAPPER_ARIA_LABEL, ProjectOverviewImageProps } from "./data/projectOverviewImageData";

const ProjectOverviewImage = ({ project }: ProjectOverviewImageProps) => {
   return (
      <div className="project__overview-image-wrapper" aria-label={PROJECT_OVERVIEW_IMAGE_WRAPPER_ARIA_LABEL}>
         <div className="project__overview_image-container" aria-label={PROJECT_OVERVIEW_IMAGE_CONTAINER_ARIA_LABEL}>
            <img src="" alt={PROJECT_OVERVIEW_IMAGE_ALT_TEXT} />
         </div>
      </div>
   );
};

export default ProjectOverviewImage;
