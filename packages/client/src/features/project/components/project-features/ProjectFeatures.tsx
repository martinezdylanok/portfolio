import ProjectFeaturesContainer from "./components/project-features-container/ProjectFeaturesContainer";
import { PROJECT_FEATURES_ARIA_LABEL, ProjectFeaturesProps } from "./data/projectFeaturesData";

const ProjectFeatures = ({ project }: ProjectFeaturesProps) => {
   return (
      <section className="max-w-[80%] mx-auto mb-50 project__features" aria-label={PROJECT_FEATURES_ARIA_LABEL}>
         <ProjectFeaturesContainer project={project} />
      </section>
   );
};

export default ProjectFeatures;
