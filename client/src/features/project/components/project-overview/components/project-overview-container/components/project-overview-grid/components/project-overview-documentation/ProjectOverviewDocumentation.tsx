// TODO: Create the logic for fetching the documentation of the project from the database.

import { PROJECT_OVERVIEW_GRID_DOCUMENTATION_ARIA_LABEL, PROJECT_OVERVIEW_GRID_DOCUMENTATION_LINK_ARIA_LABEL, PROJECT_OVERVIEW_GRID_DOCUMENTATION_TITLE } from "./data/projectOverviewDocumentationData";

const ProjectOverviewDocumentation = () => {
   return (
      <div className="project__overview-grid-documentation" aria-label={PROJECT_OVERVIEW_GRID_DOCUMENTATION_ARIA_LABEL}>
         <a href="." className="project__overview-grid-documentation-link" aria-label={PROJECT_OVERVIEW_GRID_DOCUMENTATION_LINK_ARIA_LABEL}>
            <h2 className="project__overview-grid-documentation-title">{PROJECT_OVERVIEW_GRID_DOCUMENTATION_TITLE}</h2>
         </a>
      </div>
   );
};

export default ProjectOverviewDocumentation;
