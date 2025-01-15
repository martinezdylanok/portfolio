import ProjectFeaturesContainer from "./components/project-features-container/ProjectFeaturesContainer";
import { PROJECT_FEATURES_ARIA_LABEL } from "./data/projectFeaturesData";

const ProjectFeatures = () => {
   return (
      <section className="project__features" aria-label={PROJECT_FEATURES_ARIA_LABEL}>
         <ProjectFeaturesContainer />
      </section>
   );
};

export default ProjectFeatures;
