// TODO: Create the logic for fetching the features of the project from the database.
import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import { PROJECT_FEATURES_FEATURES_LIST_ARIA_LABEL, PROJECT_FEATURES_FEATURES_LIST_TITLE, ProjectFeaturesListProps } from "./data/projectFeaturesFeaturesListData";

const ProjectFeaturesFeaturesList = ({ project }: ProjectFeaturesListProps) => {
   const { mode } = useThemeContext();

   return (
      <div className="project__features-container-features-list" aria-label={PROJECT_FEATURES_FEATURES_LIST_ARIA_LABEL}>
         <h4 className={`text-2xl mb-6 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} font-semibold project__features-container-features-title`}>{PROJECT_FEATURES_FEATURES_LIST_TITLE}</h4>
         <p className={`text-justify text-xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} project__features-container-features`}>{project.project_features}</p>
      </div>
   );
};

export default ProjectFeaturesFeaturesList;
