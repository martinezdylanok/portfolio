import React, { useState, useEffect, useRef } from "react";
import { NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationData";
import type { Project } from "./data/headerNavigationData";
import "./styles/custom-ping-animation.css";
import "./styles/navbar-animations.css";
import { useThemeContext } from "../../../../utils/theme-provider/themeProvider";

const HeaderNavigation = () => {
   const { mode } = useThemeContext();
   const [projects, setProjects] = useState<Project[]>([]);
   const [projectsAreVisible, setProjectsAreVisible] = useState(false);
   const [projectsAreClosing, setProjectsAreClosing] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const inputRef = useRef<HTMLInputElement>(null);
   const cursorRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      const fetchProjects = async () => {
         try {
            const response = await fetch("http://localhost:3000/projects"); // TODO: Simplify this URL
            if (!response.ok) {
               throw new Error("Failed to fetch projects");
            }
            const data: Project[] = await response.json();
            setProjects(data);
         } catch (error) {
            console.error("Eror fetching projects: ", error);
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

   const toggleMenu = () => {
      if (projectsAreVisible) {
         setProjectsAreClosing(true);
         setTimeout(() => {
            setProjectsAreVisible(false);
            setProjectsAreClosing(false);
         }, 500);
      } else {
         setProjectsAreVisible(true);
      }
   };

   const handleInputChange = () => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(event.target.value);
      };
   };

   return (
      <nav className="relative header__navigation" aria-label={NAV_ARIA_LABEL_TEXT}>
         <div className="flex font-mono gap-1">
            <button className="font-bold cursor-pointer header__navigation__projects-span" onClick={() => toggleMenu()}>
               <span className={`${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"} header-navigation__projects-span`}>~/documents/Projects $</span>
            </button>
            <form className="flex relative header-navigation__projects-form" action="">
               <input type="text" maxLength={18} ref={inputRef} onChange={handleInputChange()} className="min-w-2.5 w-auto max-w-[13.125rem] caret-transparent outline-none header-navigation__projects-search" />
               <span ref={cursorRef} className="flex absolute -z-1 w-2.5 h-4 mt-1 rounded-xs custom-ping-animation bg-red-500 header-navigation__projects-cursor-pointer"></span>
            </form>
         </div>
         <ul className={`hidden absolute left-[-17rem] origin-top font-mono ${mode === "light" ? "bg-[#B6CCFE]" : "bg-[#E2EAFC]"} header-navigation__list ${projectsAreVisible ? "visible" : ""} ${projectsAreClosing ? "closing" : ""}`}>
            {projects.map((project) => (
               <li key={project.project_id} className={`p-5 ${mode === "light" ? "hover:bg-[#ABC4FF]" : "hover:bg-[#EDF2FB]"} hover:cursor-pointer header-navigation__list-item`}>
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
