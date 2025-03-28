// TODO: Create the logic for fetching the challenges of the project from the database.

import { PROJECT_FEATURES_CHALLENGES_ARIA_LABEL, PROJECT_FEATURES_CHALLENGES_TITLE } from "./data/projectFeaturesChallengesListData";

const ProjectFeaturesChallengesList = () => {
   return (
      <div className="project__features-container-challenges-list" aria-label={PROJECT_FEATURES_CHALLENGES_ARIA_LABEL}>
         <h2 className="project__features-container-challenges-title">{PROJECT_FEATURES_CHALLENGES_TITLE}</h2>
         <p className="project__features-container-description-"></p>
      </div>
   );
};

export default ProjectFeaturesChallengesList;
