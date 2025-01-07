import ProjectFeaturesChallengesList from "./components/project-features-challenges-list/ProjectFeaturesChallengesList";
import ProjectFeaturesFeaturesList from "./components/project-features-features-list/ProjectFeaturesFeaturesList";

const ProjectFeaturesContainer = () => {
   return (
      <div className="features__container" aria-label="Features container">
         <ProjectFeaturesFeaturesList />
         <ProjectFeaturesChallengesList />
      </div>
   );
};

export default ProjectFeaturesContainer;
