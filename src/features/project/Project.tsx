import ProjectFeatures from "./components/project-features/ProjectFeatures";
import ProjectMainCover from "./components/project-main-cover/ProjectMainCover";
import ProjectOverview from "./components/project-overview/ProjectOverview";
import ProjectRelated from "./components/project-related/ProjectRelated";
import ProjectResults from "./components/project-results/ProjectResults";

const Project = () => {
   return (
      <div className="project__container" aria-label="Project container">
         <ProjectMainCover />
         <ProjectOverview />
         <ProjectFeatures />
         <ProjectResults />
         <ProjectRelated />
      </div>
   );
};

export default Project;
