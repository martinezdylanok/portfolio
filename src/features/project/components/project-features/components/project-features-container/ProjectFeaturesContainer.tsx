import ProjectFeaturesChallengesList from "./components/project-features-challenges-list/ProjectFeaturesChallengesList";
import ProjectFeaturesFeaturesList from "./components/project-features-features-list/ProjectFeaturesFeaturesList";
import { PROJECT_FEATURES_CONTAINER_ARIA_LABEL } from "./data/projectFeaturesContainerData";

const ProjectFeaturesContainer = () => {
   return (
      <div className="project__features-container" aria-label={PROJECT_FEATURES_CONTAINER_ARIA_LABEL}>
         <ProjectFeaturesFeaturesList />
         <ProjectFeaturesChallengesList />
      </div>
   );
};

export default ProjectFeaturesContainer;
