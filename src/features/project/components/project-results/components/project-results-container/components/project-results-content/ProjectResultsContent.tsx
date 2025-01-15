// TODO: Create the logic for fetching the results of the project from the database.

import { PROJECT_RESULTS_CONTENT_ARIA_LABEL, PROJECT_RESULTS_CONTENT_TITLE } from "./data/projectResultsContentData";

const ProjectResultsContent = () => {
   return (
      <div className="project__results-content" aria-label={PROJECT_RESULTS_CONTENT_ARIA_LABEL}>
         <h2 className="project__results-title">{PROJECT_RESULTS_CONTENT_TITLE}</h2>
         <p className="project__results-description"></p>
      </div>
   );
};

export default ProjectResultsContent;
