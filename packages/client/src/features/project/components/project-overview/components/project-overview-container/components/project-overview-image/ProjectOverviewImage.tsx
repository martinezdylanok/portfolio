//TODO: Fetch project's images.

import { PROJECT_OVERVIEW_IMAGE_ARIA_LABEL, ProjectOverviewImageProps } from "./data/projectOverviewImageData";

const ProjectOverviewImage = ({ project }: ProjectOverviewImageProps) => {
   return (
      <div className="project__overview-image-wrapper" aria-label={PROJECT_OVERVIEW_IMAGE_ARIA_LABEL}>
         <div className="project__overview_image-container">
            <img src="" alt="" />
         </div>
      </div>
   );
};

export default ProjectOverviewImage;
