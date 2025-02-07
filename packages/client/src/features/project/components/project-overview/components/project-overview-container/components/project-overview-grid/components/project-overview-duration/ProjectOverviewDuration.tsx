// TODO: Create the logic for fetching the duration of the project from the database.

import { PROJECT_OVERVIEW_DURATION_ARIA_LABEL, PROJECT_OVERVIEW_DURATION_TITLE_TEXT } from "./data/projectOverviewDurationData";

const ProjectOverviewDuration = () => {
   return (
      <div className="project__overview-grid-duration" aria-label={PROJECT_OVERVIEW_DURATION_ARIA_LABEL}>
         <h3 className="project__overview-grid-duration-title">{PROJECT_OVERVIEW_DURATION_TITLE_TEXT}</h3>
         <p className="project__overview-grid-duration-value"></p>
      </div>
   );
};

export default ProjectOverviewDuration;
