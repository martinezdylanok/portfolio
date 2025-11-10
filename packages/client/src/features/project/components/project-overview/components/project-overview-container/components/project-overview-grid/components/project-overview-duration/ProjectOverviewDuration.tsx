import { PROJECT_OVERVIEW_DURATION_ARIA_LABEL, PROJECT_OVERVIEW_DURATION_TITLE_TEXT, ProjectOverviewDurationProps } from "./data/projectOverviewDurationData";

const ProjectOverviewDuration = ({ project }: ProjectOverviewDurationProps) => {
   return (
      <div className="project__overview-grid-duration" aria-label={PROJECT_OVERVIEW_DURATION_ARIA_LABEL}>
         <h3 className="text-xl font-medium mb-6 text-muted">{PROJECT_OVERVIEW_DURATION_TITLE_TEXT}</h3>
         <p className="project__overview-grid-duration text-2xl font-bold text-body">{project.project_overview_duration}</p>
      </div>
   );
};

export default ProjectOverviewDuration;
