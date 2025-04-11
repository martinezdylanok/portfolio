import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useThemeContext } from "../../utils/hooks/useTheme";
import { DUMMY_LOGO_IMAGE_URL, DUMMY_LOGO_IMAGE_URL_1, PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECT_LOGO_ALT_TEXT, PROJECT_SHOWCASE_IMAGE_ALT_TEXT } from "./data/projectsListData";
import "./styles/projects-list-styles.css";
import { isOdd } from "./data/isOdd";
import type { ProjectInterface } from "./data/projectsListData";

const ProjectsList = () => {
   const { mode } = useThemeContext();
   const [projects, setProjects] = useState<ProjectInterface[]>([]);

   /* REFACTOR: into a React hook, HeaderNavigation also uses it */
   useEffect(() => {
      const fetchProjects = async () => {
         try {
            const response = await fetch("http://localhost:3000/api/projects"); // TODO: Simplify this URL

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
            console.error("Eror fetching projects: ", error);
         }
      };

      fetchProjects();
   }, []);

   return (
      <main>
         <div className="projects-list__container" aria-label={PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT}>
            <ul className={`p-5 flex flex-col gap-10 projects-list__list`}>
               {projects.map((project, index) => {
                  const isOddProject = isOdd(index); /*TODO: MAKE THIS LOGIC POSSIBLE WITH PROPS FOR SUB-COMPONENTS*/
                  return (
                     /* REFACTOR: this li element to be a sub-component */
                     <Link key={project.project_id} className="projects-list__link" to={`/projects/${project.project_name}`} aria-label={`View ${project.project_name}`}>
                        <li className={`grid grid-cols-2 p-10 min-h-screen border-0 rounded-xs transition duration-500 ease-in-out ${mode === "light" ? "bg-[#D7E3FC] hover:bg-[#CCDBFD]" : "bg-[#C1D3FE] hover:bg-[#CCDBFD]"} projects-list__list-item`}>
                           <div className={`flex flex-col justify-between ${isOddProject ? "order-2" : "order-1"} projects-list__first-wrapper`} aria-label={`Project ${project.project_name} details`}>
                              <img src={DUMMY_LOGO_IMAGE_URL_1} className={`size-[5.938rem] ${isOddProject ? "self-end" : "self-start"}`} alt={PROJECT_LOGO_ALT_TEXT} />
                              <div className="flex-col projects-list__text-container" aria-label={`Project ${project.project_name} text container`}>
                                 <span className={`text-4xl -mb-5 ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"}`}>{project.project_description || "Here we will describe the concept behind it"}</span>
                                 <h2 className={`text-[5.938rem] font-bold transition-all duration-800 ${mode === "light" ? "text-[#ABC4FF] light" : "text-[#EDF2FB] dark"}`}>{project.project_name.toLocaleUpperCase()}</h2>
                                 <span className={`text-2xl ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"}`}>{project.project_technologies || "Techstack like this... and this, you know"}</span>
                              </div>
                           </div>
                           <div className={`flex justify-${isOddProject ? "start" : "end"} items-center ${isOddProject ? "order-1" : "order-2"} projects-list__second-wrapper`} aria-label={`Project ${project.project_name} showcase`}>
                              <img src={DUMMY_LOGO_IMAGE_URL} className="size-[30rem] transition-all duration-800" alt={PROJECT_SHOWCASE_IMAGE_ALT_TEXT} />
                           </div>
                        </li>
                     </Link>
                  );
               })}
            </ul>
         </div>
      </main>
   );
};

export default ProjectsList;
