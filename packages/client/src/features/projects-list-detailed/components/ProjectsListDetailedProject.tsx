import { motion } from "framer-motion";
import { Link } from "react-router";
import type { ProjectsListProjectProps } from "./data/ProjectsListProjectData";
import { PROJECT_LOGO_ALT_TEXT } from "./data/ProjectsListProjectData";

const ProjectsListDetailedProject = ({ project, isOddProject }: ProjectsListProjectProps) => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const projectPrimaryLogo = `/project/business-logos/${idPadded}/logo.webp`;

   const projectNameParts = project.project_name.split(":");

   const firstPartName = projectNameParts[0]?.toUpperCase() || "";

   const secondPartName = projectNameParts[1]?.trim() || "";

   return (
      <motion.li initial={{ x: isOddProject ? -700 : 700, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.1, ease: "easeInOut" }} viewport={{ once: true, amount: 0.1 }} className="projects-list__list-item grid min-h-screen cursor-pointer rounded-xs border-0 group bg-card p-12 transition duration-500 ease-in-out hover:bg-accent" aria-label={`Project list item: ${project.project_name}`}>
         <Link className="projects-list__link contents" to={`/projects/${project.project_name}`} aria-label={`View ${project.project_name}`}>
            <div className="flex items-center justify-between py-12.5">
               <div className={`projects-list__first-wrapper max-w-3/4 ${isOddProject ? "order-1 text-left" : "order-2 text-right"}`} aria-label={`Project ${project.project_name} details`}>
                  <h2 className="text-8xl font-bold transition-colors duration-300 text-heading group-hover:text-white">{firstPartName.toLocaleUpperCase()}</h2>
                  <h3 className="text-6xl font-bold transition-colors duration-300 text-heading group-hover:text-white">{secondPartName.toLocaleUpperCase()}</h3>
                  <span className="text-2xl text-body transition-colors duration-300 group-hover:text-white">{project.project_overview_technologies || "Techstack like this... and this, you know"}</span>
               </div>
               <div className={`projects-list__second-wrapper size-75 flex items-center justify-center rounded-[50%] transition-colors duration-300 bg-card group-hover:bg-page ${isOddProject ? "order-2" : "order-1"}`} aria-label={`Project ${project.project_name} logo`}>
                  <img src={projectPrimaryLogo} className="h-[40%] w-[80%] object-contain" alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} />
               </div>
            </div>
         </Link>
      </motion.li>
   );
};

export default ProjectsListDetailedProject;
