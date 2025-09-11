import { useState } from "react";
import { useAnimatedToggle } from "../../../../../../utils/hooks/useAnimatedToggle/useAnimatedToggle";
import useFetchData from "../../../../../../utils/hooks/useFetchData/useFetchData";
import { useHeaderProjectsVisibilityTransition } from "../../../../../../utils/hooks/useHeaderProjectsVisibilityTransition/useHeaderProjectsVisibilityTransition";
import { useThemeContext } from "../../../../../../utils/hooks/useTheme";
import "../../styles/custom-ping-animation.css";
import "../../styles/navbar-animations.css";
import "../header-navigation-default/styles/toggle-nav-element-animation.css";
import { ProjectInterface, WRAPPER_ARIA_LABEL_TEXT } from "./data/headerNavigationDefaultData";

const HeaderNavigationDefault = () => {
   const { mode } = useThemeContext();

   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("/projects");

   const { projectsAreVisible, projectsAreClosing, setProjectsAreVisible, setProjectsAreClosing } = useHeaderProjectsVisibilityTransition();

   type navElement = "about" | "projects" | "contact";

   const [selectedNavElement, setSelectedNavElement] = useState<navElement | null>(null);

   const { isAnimating: isAboutAnimating, handlePress: startAboutAnimation } = useAnimatedToggle(() => {
      setSelectedNavElement("about");
   });
   const { isAnimating: isProjectsAnimating, handlePress: startProjectsAnimation } = useAnimatedToggle(() => {
      toggleProjects();
      setSelectedNavElement("projects");
   });
   const { isAnimating: isContactAnimating, handlePress: startContactAnimation } = useAnimatedToggle(() => {
      setSelectedNavElement("contact");
   });

   const handleAboutPress = () => {
      if (selectedNavElement === "about") return;
      startAboutAnimation();
   };

   const handleProjectsPress = () => {
      if (selectedNavElement === "projects") {
         toggleProjects();
         return;
      }
      startProjectsAnimation();
   };

   const handleContactPress = () => {
      if (selectedNavElement === "contact") return;
      startContactAnimation();
   };

   const toggleProjects = () => {
      if (projectsAreVisible && !projectsAreClosing) {
         setProjectsAreClosing(true);
         setTimeout(() => {
            setProjectsAreVisible(false);
            setProjectsAreClosing(false);
         }, 500);
      } else {
         setProjectsAreVisible(true);
         setProjectsAreClosing(false);
      }
   };

   return (
      <div className="header__navigation-default" aria-label="">
         <div className="flex justify-center max-w-[15.625rem] gap-5 p-[1px] header__navigation-default-wrapper" aria-label={WRAPPER_ARIA_LABEL_TEXT}>
            <button onClick={handleAboutPress} className="text-center" aria-label="">
               <span>
                  <a href="#about" className={`${mode === "light" ? "text-[#B6CCFE] hover:text-[#ABC4FF]" : "text-[#E2EAFC] hover:text-[#EDF2FB]"} text-xl transition-colors duration-300 ease-in-out cursor-pointer ${isAboutAnimating ? "toggle-nav-element-animation" : ""} ${selectedNavElement === "about" ? "font-semibold" : ""}`}>
                     about
                  </a>
               </span>
            </button>
            <button onClick={handleProjectsPress} className="text-center" aria-label="">
               <span>
                  <a className={`${mode === "light" ? "text-[#B6CCFE] hover:text-[#ABC4FF]" : "text-[#E2EAFC] hover:text-[#EDF2FB]"} text-xl transition-colors duration-300 ease-in-out cursor-pointer ${isProjectsAnimating ? "toggle-nav-element-animation" : ""} ${selectedNavElement === "projects" ? "font-semibold" : ""}`}>projects</a>
               </span>
            </button>
            <button onClick={handleContactPress} className="text-center" aria-label="">
               <span>
                  <a href="#contact" className={`${mode === "light" ? "text-[#B6CCFE] hover:text-[#ABC4FF]" : "text-[#E2EAFC] hover:text-[#EDF2FB]"} text-xl transition-colors duration-300 ease-in-out cursor-pointer ${isContactAnimating ? "toggle-nav-element-animation" : ""} ${selectedNavElement === "contact" ? "font-semibold" : ""}`}>
                     contact
                  </a>
               </span>
            </button>
            {projectsAreVisible &&
               (loading ? (
                  <span> Loading projects... </span>
               ) : error ? (
                  <span> Error: {error.message} </span>
               ) : projects === null || projects.length === 0 ? (
                  <span> No projects data available or unexpected format. </span>
               ) : (
                  <ul aria-labelledby="projects-menu-button" className={`flex-col absolute w-100 top-7.5 origin-top header-navigation-default__list visible ${projectsAreClosing ? "closing" : ""}`}>
                     {projects?.map((project) => (
                        <li key={project.project_id} className={`p-5 ${mode === "light" ? "bg-[#B6CCFE]" : "bg-[#E2EAFC]"} ${mode === "light" ? "hover:bg-[#ABC4FF]" : "hover:bg-[#EDF2FB]"} cursor-pointer header-navigation-default__list-item font-semibold transition-colors duration-300 ease-in-out`}>
                           <a href={`/projects/${project.project_name}`} className={`${mode === "light" ? "text-[#E2EAFC]" : "text-[#B6CCFE]"} header-navigation-default__list-link`}>
                              {project.project_name.toUpperCase()}
                           </a>
                        </li>
                     ))}
                  </ul>
               ))}
         </div>
      </div>
   );
};

export default HeaderNavigationDefault;
