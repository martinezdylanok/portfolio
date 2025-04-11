import React, { useState, useEffect, useRef } from "react";
import { NAV_ARIA_LABEL_TEXT, WRAPPER_ARIA_LABEL_TEXT, SPAN_TEXT, FORM_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT } from "./data/headerNavigationData";
import type { ProjectInterface, HeaderNavigationProps } from "./data/headerNavigationData";
import "./styles/custom-ping-animation.css";
import "./styles/navbar-animations.css";
import { useThemeContext } from "../../../../utils/hooks/useTheme";

const HeaderNavigation = ({ headerIsVisible }: HeaderNavigationProps) => {
   const { mode } = useThemeContext();
   const [projects, setProjects] = useState<ProjectInterface[]>([]);
   const [projectsAreVisible, setProjectsAreVisible] = useState(false);
   const [projectsAreClosing, setProjectsAreClosing] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const inputRef = useRef<HTMLInputElement>(null);
   const cursorRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      const fetchProjects = async () => {
         try {
            const response = await fetch("http://localhost:3000/api/projects/");

            if (!response.ok) {
               throw new Error(`Failed to fetch projects: ${response.status}`);
            }

            const projectsData = await response.json();

            if (projectsData && projectsData.success && Array.isArray(projectsData.data)) {
               setProjects(projectsData.data);
            } else {
               console.error("Unexpected API response format:", projectsData);
            }
         } catch (error) {
            console.error("Error fetching projects:", error);
         }
      };

      fetchProjects();
   }, []);

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
                  const matchingProject = projects.find((project) => project.project_name.toLowerCase().includes(projectName));

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
               }}
            >
               <input type="text" maxLength={18} ref={inputRef} aria-label={INPUT_ARIA_LABEL_TEXT} onChange={handleInputChange()} className={`min-w-2.5 w-auto max-w-[13.125rem] text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} caret-transparent outline-none header-navigation__projects-search`} />
               <span ref={cursorRef} data-testid="cursor-span" aria-hidden="true" className={`flex absolute -z-1 w-2.5 h-4 mt-1 rounded-xs custom-ping-animation bg-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} header-navigation__projects-cursor-pointer`}></span>
            </form>
         </div>
         <ul aria-labelledby="projects-menu-button" className={`hidden absolute left-[-17rem] origin-top font-mono ${mode === "light" ? "bg-[#B6CCFE]" : "bg-[#E2EAFC]"} header-navigation__list ${projectsAreVisible ? "visible" : ""} ${projectsAreClosing ? "closing" : ""}`}>
            {projects.map((project) => (
               <li key={project.project_id} className={`p-5 hover:bg-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} hover:cursor-pointer header-navigation__list-item`}>
                  <a href={`#${project.project_name}`} className={` ${mode === "light" ? "text-[#E2EAFC]" : "text-[#B6CCFE]"} header-navigation__list-link`}>
                     {project.project_name}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default HeaderNavigation;
