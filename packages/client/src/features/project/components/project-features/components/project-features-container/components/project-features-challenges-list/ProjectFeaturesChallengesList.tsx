// TODO: Create the logic for fetching the challenges of the project from the database.
import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import { PROJECT_FEATURES_CHALLENGES_ARIA_LABEL, PROJECT_FEATURES_CHALLENGES_TITLE, ProjectFeaturesChallengesListProps } from "./data/projectFeaturesChallengesListData";

const ProjectFeaturesChallengesList = ({ project }: ProjectFeaturesChallengesListProps) => {
   const { mode } = useThemeContext();

   return (
      <div className="project__features-container-challenges-list" aria-label={PROJECT_FEATURES_CHALLENGES_ARIA_LABEL}>
         <h4 className={`text-2xl mb-6 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} font-semibold project__features-container-challenges-title`}>{PROJECT_FEATURES_CHALLENGES_TITLE}</h4>
         <p className={`text-justify text-xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} project__features-container-challenges`}>{project.project_challenges}</p>
      </div>
   );
};

export default ProjectFeaturesChallengesList;
