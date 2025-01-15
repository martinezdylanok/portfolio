// TODO: Create the logic for fetching the videos of the project from the database.

import { PROJECT_RELATED_CONTAINER_VIDEOS_ARIA_LABEL } from "./data/projectRelatedContainerVideosData";

const ProjectRelatedContainerVideos = () => {
   return (
      <div className="project__related-videos" aria-label={PROJECT_RELATED_CONTAINER_VIDEOS_ARIA_LABEL}>
         <ul className="project__related-videos-list">
            <li className="project__related-videos-item"></li>
            <li className="project__related-videos-item"></li>
            <li className="project__related-videos-item"></li>
         </ul>
      </div>
   );
};

export default ProjectRelatedContainerVideos;
