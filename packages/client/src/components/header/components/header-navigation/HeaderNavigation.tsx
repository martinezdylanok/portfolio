import React, { useEffect, useRef, useState } from "react";
import useFetchData from "../../../../utils/hooks/useFetchData/useFetchData";
import { useThemeContext } from "../../../../utils/hooks/useTheme";
import type { HeaderNavigationProps, ProjectInterface } from "./data/headerNavigationData";
import { FORM_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT, SPAN_TEXT, WRAPPER_ARIA_LABEL_TEXT } from "./data/headerNavigationData";
import "./styles/custom-ping-animation.css";
import "./styles/navbar-animations.css";

const HeaderNavigation = ({ headerIsVisible }: HeaderNavigationProps) => {
   const { mode } = useThemeContext();
   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("/projects");
   const [projectsAreVisible, setProjectsAreVisible] = useState(false);
   const [projectsAreClosing, setProjectsAreClosing] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const inputRef = useRef<HTMLInputElement>(null);
   const cursorRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      const adjustInputWidth = () => {
         if (inputRef.current) {
            const inputElement = inputRef.current;
            const tempSpan = document.createElement("span");
            tempSpan.style.visibility = "hidden";
            tempSpan.style.whiteSpace = "pre";
            tempSpan.style.font = window.getComputedStyle(inputElement).font;
            tempSpan.textContent = inputValue;
            document.body.appendChild(tempSpan);

            const textWidth = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);

            inputElement.style.width = `${textWidth}px`;
         }
      };
      adjustInputWidth();
   }, [inputValue]);

   useEffect(() => {
      const adjustCursorPosition = () => {
         if (inputRef.current && cursorRef.current) {
            const inputElement = inputRef.current;
            const cursorElement = cursorRef.current;

            const tempSpan = document.createElement("span");
            tempSpan.style.visibility = "hidden";
            tempSpan.style.whiteSpace = "pre";
            tempSpan.style.font = window.getComputedStyle(inputElement).font;
            tempSpan.textContent = inputValue;
            document.body.appendChild(tempSpan);

            const textWidth = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);

            const inputBorder = parseInt(window.getComputedStyle(inputElement).borderWidth);
            const inputPadding = parseInt(window.getComputedStyle(inputElement).paddingLeft);
            const cursorPosition = textWidth + inputBorder + inputPadding;

            cursorElement.style.left = `${cursorPosition}px`;
         }
      };
      adjustCursorPosition();
   }, [inputValue]);

   useEffect(() => {
      if (!headerIsVisible && projectsAreVisible) {
         setProjectsAreClosing(true);
         setTimeout(() => {
            setProjectsAreVisible(false);
            setProjectsAreClosing(false);
         }, 500);
      }
   }, [headerIsVisible, projectsAreVisible]);

   const handleInputChange = () => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(event.target.value);
      };
   };

   const executeCommand = (command: string) => {
      const normalizedCommand = command.trim().toLowerCase();

      if (!projects && (normalizedCommand.startsWith("cd") || normalizedCommand === "ls")) {
         if (loading) {
            console.warn("Projects are still loading. Please try again shortly.");
         } else if (error) {
            console.error("Failed to load projects. Cannot execute command.");
         } else {
            console.warn("Projects data is not available. Cannot execute command.");
         }
         return;
      }

      switch (normalizedCommand) {
         case "ls":
            setProjectsAreVisible(true);
            break;
         case "exit":
            setProjectsAreClosing(true);
            setTimeout(() => {
               setProjectsAreVisible(false);
               setProjectsAreClosing(false);
            }, 500);
            break;
         default:
            if (normalizedCommand.startsWith("cd")) {
               const projectName = normalizedCommand.substring(3).trim().toLocaleLowerCase();
               if (projectName.length >= 4) {
                  const matchingProject = projects?.find((project) => project.project_name.toLowerCase().includes(projectName));

                  if (matchingProject) {
                     window.location.href = `#${matchingProject.project_name}`;
                     setProjectsAreVisible(false);
                  } else {
                     console.error(`Project "${projectName}" not found`);
                  }
               } else {
                  console.error("Project name must be at least 4 characters long");
               }
            } else if (normalizedCommand && normalizedCommand !== "") {
               console.error(`Command "${normalizedCommand}" not found`);
            }
            break;
      }
   };
   return (
      <nav className="relative header__navigation" aria-label={NAV_ARIA_LABEL_TEXT}>
         <div className="flex font-mono gap-1 w-[24.264rem] header__navigation-wrapper" aria-label={WRAPPER_ARIA_LABEL_TEXT}>
            <span className={`font-bold ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"} header-navigation__projects-span`}>{SPAN_TEXT}</span>
            <form
               className="flex relative header-navigation__projects-form"
               aria-label={FORM_ARIA_LABEL_TEXT}
               onSubmit={(event) => {
                  event.preventDefault();
                  executeCommand(inputValue);
                  setInputValue("");
               }}
            >
               <input type="text" value={inputValue} maxLength={18} ref={inputRef} aria-label={INPUT_ARIA_LABEL_TEXT} onChange={handleInputChange()} className={`min-w-2.5 w-auto max-w-[13.125rem] text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} caret-transparent outline-none header-navigation__projects-search`} />
               <span ref={cursorRef} data-testid="cursor-span" aria-hidden="true" className={`flex absolute -z-1 w-2.5 h-4 mt-1 rounded-xs custom-ping-animation bg-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} header-navigation__projects-cursor-pointer`}></span>
            </form>
         </div>
         {projectsAreVisible && !loading && !error && projects && projects.length > 0 && (
            <ul aria-labelledby="projects-menu-button" className={`absolute left-[-17rem] origin-top font-mono ${mode === "light" ? "bg-[#B6CCFE]" : "bg-[#E2EAFC]"} header-navigation__list visible ${projectsAreClosing ? "closing" : ""}`}>
               {projects.map((project) => (
                  <li key={project.project_id} className={`p-5 hover:bg-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} hover:cursor-pointer header-navigation__list-item`}>
                     <a href={`/projects/${project.project_name}`} className={` ${mode === "light" ? "text-[#E2EAFC]" : "text-[#B6CCFE]"} header-navigation__list-link`}>
                        {project.project_name}
                     </a>
                  </li>
               ))}
            </ul>
         )}
         {projectsAreVisible && loading && <div className={`absolute left-[-17rem] origin-top font-mono p-5 ${mode === "light" ? "bg-[#B6CCFE] text-[#E2EAFC]" : "bg-[#E2EAFC] text-[#B6CCFE]"}`}>Loading projects...</div>}
         {projectsAreVisible && !loading && error && <div className={`absolute left-[-17rem] origin-top font-mono p-5 ${mode === "light" ? "bg-[#B6CCFE] text-red-700" : "bg-[#E2EAFC] text-red-500]"}`}>Error: {error.message}</div>}
         {projectsAreVisible && !loading && !error && projects && projects.length === 0 && <div className={`absolute left-[-17rem] origin-top font-mono p-5 ${mode === "light" ? "bg-[#B6CCFE] text-[#E2EAFC]" : "bg-[#E2EAFC] text-[#B6CCFE]"}`}>No projects found.</div>}
      </nav>
   );
};

export default HeaderNavigation;
