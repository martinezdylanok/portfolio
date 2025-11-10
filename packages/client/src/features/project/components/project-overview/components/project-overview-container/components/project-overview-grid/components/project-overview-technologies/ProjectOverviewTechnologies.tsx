import { PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL, PROJECT_OVERVIEW_TECHNOLOGIES_TITLE, ProjectOverviewTechnologiesProps } from "./data/projectOverviewTechnologiesData";

const ProjectOverviewTechnologies = ({ project }: ProjectOverviewTechnologiesProps) => {
   return (
      <div className="project__overview-grid-technologies max-w-1/2" aria-label={PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL}>
         <h3 className="project__overview-grid-technologies-title text-xl font-medium mb-6 text-muted">{PROJECT_OVERVIEW_TECHNOLOGIES_TITLE}</h3>
         <p className="project__overview-grid-technologies-list text-2xl font-bold text-body">{project.project_overview_technologies}</p>
      </div>
   );
};

export default ProjectOverviewTechnologies;
