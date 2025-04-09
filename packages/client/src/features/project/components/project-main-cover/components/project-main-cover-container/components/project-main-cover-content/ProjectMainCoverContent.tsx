// TODO: Create the logic for fetching the title and description of the project from the database.

import { PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL, ProjectMainCoverContentProps } from "./data/projectMainCoverContentData";

const ProjectMainCoverContent = ({ project }: ProjectMainCoverContentProps) => {
   return (
      <div className="main-cover__content" aria-label={PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL}>
         <h3 className="main-cover__project-title">{project.project_name}</h3>
         <p className="main-cover__project-description">{project.project_description}</p>
      </div>
   );
};

export default ProjectMainCoverContent;
