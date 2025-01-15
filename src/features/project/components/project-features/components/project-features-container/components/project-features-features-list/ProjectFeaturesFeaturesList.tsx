// TODO: Create the logic for fetching the features of the project from the database.

import { PROJECT_FEATURES_FEATURES_LIST_ARIA_LABEL, PROJECT_FEATURES_FEATURES_LIST_TITLE } from "./data/projectFeaturesFeaturesListData";

const ProjectFeaturesFeaturesList = () => {
   return (
      <div className="project__features-container-features-list" aria-label={PROJECT_FEATURES_FEATURES_LIST_ARIA_LABEL}>
         <h2 className="project__features-container-features-title">{PROJECT_FEATURES_FEATURES_LIST_TITLE}</h2>
         <p className="project__features-container-features-description"></p>
      </div>
   );
};

export default ProjectFeaturesFeaturesList;
