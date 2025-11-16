import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { useThemeContext } from "../../../../../../../../../../utils/hooks/useThemeContext/useThemeContext";
import type { relatedProjectsProjectProps } from "./data/projectRelatedContainerProjectsProjectData";
import { PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT, PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER } from "./data/projectRelatedContainerProjectsProjectData";

const ProjectRelatedContainerProjectsProject = ({ firstPart, secondPart, project }: relatedProjectsProjectProps) => {
   const { theme } = useThemeContext();
   const containerRef = useRef<HTMLLIElement>(null);
   const [isHovered, setIsHovered] = useState(false);

   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end center"] });

   const y = useTransform(scrollYProgress, [0, 0.5], [200, 0]);

   // Get the actual CSS variable values for color transformation
   const startBg = theme === "light" ? getComputedStyle(document.documentElement).getPropertyValue("--palette-primary").trim() : getComputedStyle(document.documentElement).getPropertyValue("--palette-secondary").trim();
   const endBg = theme === "light" ? getComputedStyle(document.documentElement).getPropertyValue("--palette-secondary").trim() : getComputedStyle(document.documentElement).getPropertyValue("--palette-primary").trim();

   const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
   const backgroundColor = useTransform(progress, [0, 1], [startBg, endBg]);

   const idPadded = String(project.project_id).padStart(2, "0");
   const projectSecondaryLogo = `/project/business-secondary-logos/${idPadded}/logo.webp`;

   return (
      <motion.li ref={containerRef} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} style={{ y, backgroundColor }} className="project__related-container-projects-project" data-testid="related-project">
         <Link key={project.project_id} to={`/projects/${project.project_name}`} className="project__related-container-projects-project-link">
            <div className="project__related-container-projects-project-content flex flex-col relative h-fit overflow-hidden">
               <div className="project__related-container-projects-project-upper-part">
                  <img className="project__related-container-projects-project-image size-[550px]" src={projectSecondaryLogo} alt={PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT} />
               </div>
               <motion.div initial={{ height: 0 }} animate={{ height: isHovered ? 115 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="project__related-container-projects-project-lower-part absolute flex flex-col w-full overflow-hidden bg-page pl-4 pt-4" data-testid="related-project-lower-part">
                  <motion.span className="project__related-container-projects-project-second-part text-muted font-medium text-xl mb-6" data-testid="project-second-part-name">
                     {secondPart || PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER}
                  </motion.span>
                  <motion.h3 className="project__related-container-projects-project-first-part text-heading text-2xl font-bold">{firstPart}</motion.h3>
               </motion.div>
            </div>
         </Link>
      </motion.li>
   );
};

export default ProjectRelatedContainerProjectsProject;
