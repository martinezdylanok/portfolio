//TODO: Fetch project's title and details from database.

import { PROJECT_OVERVIEW_CONTENT_ARIA_LABEL } from "./data/projectOverviewContentData";

const ProjectOverviewContent = () => {
   return (
      <div className="project__overview-content" aria-label={PROJECT_OVERVIEW_CONTENT_ARIA_LABEL}>
         <h2 className="project__overview-content-title"></h2>
         <p className="project__overview-project-details"></p>
      </div>
   );
};

export default ProjectOverviewContent;
