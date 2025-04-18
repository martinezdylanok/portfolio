import { useThemeContext } from "../../../../../../utils/hooks/useTheme";
import ProjectFeaturesChallengesList from "./components/project-features-challenges-list/ProjectFeaturesChallengesList";
import ProjectFeaturesFeaturesList from "./components/project-features-features-list/ProjectFeaturesFeaturesList";
import { PROJECT_FEATURES_CONTAINER_ARIA_LABEL, PROJECT_FEATURES_CONTAINER_IMG_ALT_LABEL, PROJECT_FEATURES_CONTAINER_TITLE_TEXT, ProjectFeaturesContainerProps } from "./data/projectFeaturesContainerData";

const ProjectFeaturesContainer = ({ project }: ProjectFeaturesContainerProps) => {
   const { mode } = useThemeContext();
   //TODO: Add video showcasing features
   return (
      <div className="flex flex-col project__features-container" aria-label={PROJECT_FEATURES_CONTAINER_ARIA_LABEL}>
         <h2 className={`text-8xl font-bold mb-12 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`}>{PROJECT_FEATURES_CONTAINER_TITLE_TEXT}</h2>
         <div className="flex gap-20 project__features-inner-container" data-testid="features-inner-container">
            <ProjectFeaturesFeaturesList project={project} />
            <ProjectFeaturesChallengesList project={project} />
         </div>
         <img src="" alt={PROJECT_FEATURES_CONTAINER_IMG_ALT_LABEL} />
      </div>
   );
};

export default ProjectFeaturesContainer;
