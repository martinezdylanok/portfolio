import { PROJECT_OVERVIEW_CONTENT_ARIA_LABEL, ProjectOverviewContentProps } from "./data/projectOverviewContentData";

const ProjectOverviewContent = ({ project }: ProjectOverviewContentProps) => {
   return (
      <div className="project__overview-content row-start-2 grid col-span-2 gap-25" aria-label={PROJECT_OVERVIEW_CONTENT_ARIA_LABEL}>
         <p className="project__overview-content-description col-start-1 row-start-1 text-xl font-hanken-grotesk font-normal text-body text-justify">{project.project_overview_description_part_01}</p>
         <p className="project__overview-content-description col-start-2 row-start-2 text-xl font-hanken-grotesk font-normal text-body text-justify">{project.project_overview_description_part_02}</p>
      </div>
   );
};

export default ProjectOverviewContent;
