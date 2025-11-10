import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router";
import { PROJECT_LETTERS, PROJECT_LOGO_ALT_TEXT, ProjectsListProjectProps } from "./data/ProjectsListProjectData";
import replaceIndex from "./data/replaceIndex";

const ProjectsListProject = ({ project, index }: ProjectsListProjectProps) => {
   const replacedIndex = replaceIndex(index, PROJECT_LETTERS);
   const idPadded = String(project.project_id).padStart(2, "0");
   const projectSecondaryLogo = `/project/business-secondary-logos/${idPadded}/logo.webp`;

   const [isHovered, setIsHovered] = useState(false);
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   const truncateDescription = (description: string, maxLength: number = 150): string => {
      if (description.length <= maxLength) return description;
      return description.substring(0, maxLength).trim() + "...";
   };

   const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
   };

   const getPosition = () => {
      const offset = 0;
      const hoverDivWidth = 256; // w-64 in pixels
      const hoverDivHeight = 350; // Approximate height with all content
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let left: number;
      let top: number;

      // Check horizontal overflow
      if (mousePosition.x + offset + hoverDivWidth > viewportWidth) {
         // Position to the left of cursor
         left = mousePosition.x - hoverDivWidth - offset;
      } else {
         // Position to the right of cursor
         left = mousePosition.x + offset;
      }

      // Check vertical overflow
      if (mousePosition.y + offset + hoverDivHeight > viewportHeight) {
         // Position above cursor
         top = mousePosition.y - hoverDivHeight - offset;
      } else {
         // Position below cursor
         top = mousePosition.y + offset;
      }

      return { left, top };
   };

   const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   return (
      <>
         <li className="projects-list__list-item grid gap-24 p-12 cursor-pointer border-0 rounded-xs transition duration-500 ease-in-out bg-card hover:bg-accent group" aria-label={`Project list item: ${project.project_name}`} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link className="projects-list__link contents" to={`/projects/${project.project_name}`} aria-label={`View ${project.project_name}`}>
               <div className="projects-list__list-item-content flex justify-center items-center gap-0">
                  {PROJECT_LETTERS.map((letter, letterIndex) =>
                     letterIndex === replacedIndex ? (
                        <motion.img key={letterIndex} src={projectSecondaryLogo} className="projects-list__list-item-logo max-h-[140px] w-[140px] object-contain transition-all duration-800" alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} />
                     ) : (
                        <motion.span key={letterIndex} className="projects-list__list-item-letter font-hanken-grotesk text-[200px] font-bold leading-none transition-all duration-800 text-heading group-hover:text-white">
                           {letter}
                        </motion.span>
                     ),
                  )}
               </div>
            </Link>
         </li>

         <AnimatePresence>
            {isHovered && (
               <motion.div key="hover-card" className="projects-list__list-item-hover-card fixed z-50 pointer-events-none rounded-lg shadow-lg p-4 bg-card" initial={{ opacity: 0, scale: 0.8, ...getPosition() }} animate={{ opacity: 1, scale: 1, ...getPosition() }} exit={{ opacity: 0, scale: 0.8, ...getPosition() }} transition={{ duration: 0.2, ease: "easeOut" }}>
                  <div className="projects-list__list-item-hover-card-content flex flex-col gap-2 w-64">
                     <img src={projectSecondaryLogo} className="projects-list__list-item-hover-card-image w-full h-32 object-contain" alt={`${project.project_name} logo`} />
                     <h3 className="projects-list__list-item-hover-card-title font-hanken-grotesk text-xl font-bold text-heading">{project.project_name}</h3>
                     <span className="projects-list__list-item-hover-card-technologies font-hanken-grotesk text-xs text-muted">{project.project_overview_technologies}</span>
                     <p className="projects-list__list-item-hover-card-description font-hanken-grotesk text-sm text-body">{truncateDescription(project.project_description)}</p>
                     <span className="projects-list__list-item-hover-card-cta font-hanken-grotesk font-bold text-sm text-accent">Click to see more</span>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default ProjectsListProject;
