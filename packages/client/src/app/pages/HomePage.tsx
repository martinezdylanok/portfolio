import AboutMe from "../../features/about-me/AboutMe";
import ProjectsList from "../../features/projects-list/ProjectsList";

const HomePage = () => {
   return (
      <div className="home-page">
         <AboutMe />
         <ProjectsList />
      </div>
   );
};

export default HomePage;
