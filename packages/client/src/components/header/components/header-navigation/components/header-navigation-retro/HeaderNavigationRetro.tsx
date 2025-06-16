import { useDynamicInputStyling } from "../../../../../../utils/hooks/useDynamicInputStyling/useDynamicInputStyling";
import useFetchData from "../../../../../../utils/hooks/useFetchData/useFetchData";
import { useHeaderProjectsCommandProcessor } from "../../../../../../utils/hooks/useHeaderProjectsCommandProcessor/useHeaderProjectsCommandProcessor";
import { useHeaderProjectsVisibilityTransition } from "../../../../../../utils/hooks/useHeaderProjectsVisibilityTransition/useHeaderProjectsVisibilityTransition";
import { useThemeContext } from "../../../../../../utils/hooks/useTheme";
import type { ProjectInterface } from "./data/headerNavigatonRetroData";
import { CONTAINER_ARIA_LABEL_TEXT, FORM_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT, SPAN_TEXT, WRAPPER_ARIA_LABEL_TEXT } from "./data/headerNavigatonRetroData";
import "./styles/custom-ping-animation.css";
import "./styles/navbar-animations.css";

const HeaderNavigationRetro = () => {
   const { mode } = useThemeContext();
   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("/projects");
   const { inputValue, setInputValue, handleInputChange, inputRef, cursorRef } = useDynamicInputStyling();
   const { projectsAreVisible, projectsAreClosing, setProjectsAreVisible, setProjectsAreClosing } = useHeaderProjectsVisibilityTransition();
   const { executeCommand } = useHeaderProjectsCommandProcessor({ projects, setProjectsAreVisible, setProjectsAreClosing });

   return (
      <div className="header__navigation-retro" aria-label={CONTAINER_ARIA_LABEL_TEXT}>
         <div className="flex font-mono gap-1 w-[24.264rem] header__navigation-retro-wrapper" aria-label={WRAPPER_ARIA_LABEL_TEXT}>
            <span className={`font-bold ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"} header-navigation-retro__projects-span`}>{SPAN_TEXT}</span>
            <form
               className="flex relative header-navigation-retro-retro__projects-form"
               aria-label={FORM_ARIA_LABEL_TEXT}
               onSubmit={(event) => {
                  event.preventDefault();
                  executeCommand(inputValue);
                  setInputValue("");
               }}
            >
               <input type="text" value={inputValue} maxLength={18} ref={inputRef} aria-label={INPUT_ARIA_LABEL_TEXT} onChange={handleInputChange()} className={`min-w-2.5 w-auto max-w-[13.125rem] text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} caret-transparent outline-none header-navigation-retro__projects-search`} />
               <span ref={cursorRef} data-testid="cursor-span" aria-hidden="true" className={`flex absolute -z-1 w-2.5 h-4 mt-1 rounded-xs custom-ping-animation bg-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} header-navigation-retro__projects-cursor-pointer`}></span>
            </form>
         </div>
         {projectsAreVisible &&
            (loading ? (
               <div className={`absolute left-[-17rem] origin-top font-mono p-5 ${mode === "light" ? "bg-[#B6CCFE] text-[#E2EAFC]" : "bg-[#E2EAFC] text-[#B6CCFE]"}`} aria-label="Loading projects">
                  Loading projects...
               </div>
            ) : error ? (
               <div className={`absolute left-[-17rem] origin-top font-mono p-5 ${mode === "light" ? "bg-[#B6CCFE] text-red-700" : "bg-[#E2EAFC] text-red-500]"}`} aria-label="Error message">
                  Error: {error.message}
               </div>
            ) : projects === null || projects.length === 0 ? (
               <div className={`absolute left-[-17rem] origin-top font-mono p-5 ${mode === "light" ? "bg-[#B6CCFE] text-[#E2EAFC]" : "bg-[#E2EAFC] text-[#B6CCFE]"}`} aria-label="Error message">
                  No projects data available or unexpected format.
               </div>
            ) : (
               <ul aria-labelledby="projects-menu-button" className={`absolute left-[-17rem] origin-top font-mono ${mode === "light" ? "bg-[#B6CCFE]" : "bg-[#E2EAFC]"} header-navigation-retro__list visible ${projectsAreClosing ? "closing" : ""}`}>
                  {projects.map((project) => (
                     <li key={project.project_id} className={`p-5 hover:bg-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} hover:cursor-pointer header-navigation-retro__list-item`}>
                        <a href={`/projects/${project.project_name}`} className={` ${mode === "light" ? "text-[#E2EAFC]" : "text-[#B6CCFE]"} header-navigation-retro__list-link`}>
                           {project.project_name}
                        </a>
                     </li>
                  ))}
               </ul>
            ))}
      </div>
   );
};

export default HeaderNavigationRetro;
