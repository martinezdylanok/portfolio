import ProjectOverviewContainer from "./components/project-overview-container/ProjectOverviewContainer";
import { PROJECT_OVERVIEW_ARIA_LABEL } from "./data/projectOverviewData";

const ProjectOverview = () => {
   return (
      <section className="project__overview" aria-label={PROJECT_OVERVIEW_ARIA_LABEL}>
         <ProjectOverviewContainer />
      </section>
   );
};

export default ProjectOverview;
