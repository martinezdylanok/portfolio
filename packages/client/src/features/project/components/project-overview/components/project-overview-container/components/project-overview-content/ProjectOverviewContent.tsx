//TODO: Fetch project's title and details from database.

import { PROJECT_OVERVIEW_CONTENT_ARIA_LABEL, ProjectOverviewContentProps } from "./data/projectOverviewContentData";

const ProjectOverviewContent = ({ project }: ProjectOverviewContentProps) => {
   return (
      <div className="project__overview-content" aria-label={PROJECT_OVERVIEW_CONTENT_ARIA_LABEL}>
         <h2 className="project__overview-content-title"></h2>
         <p className="project__overview-project-description">{project.project_overview_description}</p>
      </div>
   );
};

export default ProjectOverviewContent;
