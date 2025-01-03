import ProjectMainCover from "./components/project-main-cover/ProjectMainCover";
import ProjectOverview from "./components/project-overview/ProjectOverview";
import ProjectResults from "./components/project-results/ProjectResults";

const Project = () => {
   return (
      <div className="project__container" aria-label="Project container">
         <ProjectMainCover />
         <ProjectOverview />
         <ProjectResults />
      </div>
   );
};

export default Project;
