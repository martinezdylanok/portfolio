// TODO: Create the logic for fetching the technologies of the project from the database.

import { PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL, PROJECT_OVERVIEW_TECHNOLOGIES_TITLE, ProjectOverviewTechnologiesProps } from "./data/projectOverviewTechnologiesData";

const ProjectOverviewTechnologies = ({ project }: ProjectOverviewTechnologiesProps) => {
   return (
      <div className="project__overview-grid-technologies" aria-label={PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL}>
         <h3 className="project__overview-grid-technologies-title">{PROJECT_OVERVIEW_TECHNOLOGIES_TITLE}</h3>
         <ul className="project__overview-grid-technologies-list">{project.project_overview_technologies}</ul>
      </div>
   );
};

export default ProjectOverviewTechnologies;
