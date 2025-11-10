import { useDynamicInputStyling } from "../../../../../../utils/hooks/useDynamicInputStyling/useDynamicInputStyling";
import useFetchData from "../../../../../../utils/hooks/useFetchData/useFetchData";
import { useHeaderProjectsCommandProcessor } from "../../../../../../utils/hooks/useHeaderProjectsCommandProcessor/useHeaderProjectsCommandProcessor";
import { useHeaderProjectsVisibilityTransition } from "../../../../../../utils/hooks/useHeaderProjectsVisibilityTransition/useHeaderProjectsVisibilityTransition";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import "../../styles/custom-ping-animation.css";
import type { ProjectInterface } from "./data/headerNavigatonRetroData";
import { CONTAINER_ARIA_LABEL_TEXT, FORM_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT, SPAN_TEXT, WRAPPER_ARIA_LABEL_TEXT } from "./data/headerNavigatonRetroData";
import "./styles/retro-navigation-animations.css";

const HeaderNavigationRetro = () => {
   const { theme } = useThemeContext();
   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("/projects");
   const { inputValue, setInputValue, handleInputChange } = useDynamicInputStyling();
   const { projectsAreVisible, projectsAreClosing, setProjectsAreVisible, setProjectsAreClosing } = useHeaderProjectsVisibilityTransition();
   const { executeCommand } = useHeaderProjectsCommandProcessor({ projects, setProjectsAreVisible, setProjectsAreClosing });
   const formatName = (string: string) => {
      const regEx = /:/;
      const colonIndex = string.search(regEx);

      const trimmedString = colonIndex !== -1 ? string.slice(0, colonIndex) : string;

      const formattedName = trimmedString.toLowerCase().replace(/\s+/g, "-");

      return formattedName;
   };

   return (
      <div className="header__navigation-retro" aria-label={CONTAINER_ARIA_LABEL_TEXT}>
         <div className="header__navigation-retro-wrapper flex font-mono justify-evenly w-[31.25rem]" aria-label={WRAPPER_ARIA_LABEL_TEXT}>
            <span className={`header__navigation-retro-label font-bold text-[18px] ${theme === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"}`}>{SPAN_TEXT}</span>
            <form
               className="header__navigation-retro-form flex relative"
               aria-label={FORM_ARIA_LABEL_TEXT}
               onSubmit={(event) => {
                  event.preventDefault();
                  executeCommand(inputValue);
                  setInputValue("");
               }}
            >
               <input type="text" value={inputValue} maxLength={18} aria-label={INPUT_ARIA_LABEL_TEXT} onChange={handleInputChange()} className={`header__navigation-retro-input min-w-5 w-[173px] text-${theme === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} ${theme === "light" ? "caret-[#ABC4FF]" : "caret-[#EDF2FB]"} ${theme === "light" ? "bg-[#E2EAFC]" : "bg-[#B6CCFE]"} outline-none`} />
            </form>
         </div>
         {projectsAreVisible &&
            (loading ? (
               <span className={`header__navigation-retro-loading absolute left-[-17rem] origin-top font-mono p-5 ${theme === "light" ? "bg-[#B6CCFE] text-[#E2EAFC]" : "bg-[#E2EAFC] text-[#B6CCFE]"}`} aria-label="Loading projects">
                  Loading projects...
               </span>
            ) : error ? (
               <span className={`header__navigation-retro-error absolute left-[-17rem] origin-top font-mono p-5 ${theme === "light" ? "bg-[#B6CCFE] text-red-700" : "bg-[#E2EAFC] text-red-500]"}`} aria-label="Error message">
                  Error: {error.message}
               </span>
            ) : projects === null || projects.length === 0 ? (
               <span className={`header__navigation-retro-empty absolute left-[-17rem] origin-top font-mono p-5 ${theme === "light" ? "bg-[#B6CCFE] text-[#E2EAFC]" : "bg-[#E2EAFC] text-[#B6CCFE]"}`} aria-label="Error message">
                  No projects data available or unexpected format.
               </span>
            ) : (
               <ul aria-labelledby="projects-menu-button" className={`header__navigation-retro-list absolute origin-top top-[27px] left-[-50px] w-[600px] grid grid-cols-3 grid-rows-2 ${theme === "light" ? "bg-[#B6CCFE]" : "bg-[#E2EAFC]"} visible ${projectsAreClosing ? "header__navigation-retro-list--closing" : ""}`}>
                  {projects.map((project) => (
                     <li key={project.project_id} className={`header__navigation-retro-list-item p-2.5 hover:${theme === "light" ? "bg-[#ABC4FF]" : "bg-[#EDF2FB]"} cursor-pointer`}>
                        <a href={`/projects/${project.project_name}`} className={`header__navigation-retro-list-link block w-full font-mono ${theme === "light" ? "text-[#E2EAFC]" : "text-[#B6CCFE]"}`}>
                           <span className="header__navigation-retro-list-link-text block w-full">{formatName(project.project_name)}</span>
                        </a>
                     </li>
                  ))}
               </ul>
            ))}
      </div>
   );
};

export default HeaderNavigationRetro;
