import { Link } from "react-router";
import { useThemeContext } from "../../../utils/hooks/useTheme";
import type { ProjectsListProjectProps } from "./data/ProjectsListProjectData";
import { DUMMY_LOGO_IMAGE_URL, DUMMY_LOGO_IMAGE_URL_1, PROJECT_LOGO_ALT_TEXT, PROJECT_SHOWCASE_IMAGE_ALT_TEXT } from "./data/ProjectsListProjectData";

const ProjectsListProject = ({ project, isOddProject }: ProjectsListProjectProps) => {
   const { mode } = useThemeContext();

   return (
      <li className={`grid grid-cols-2 p-10 min-h-screen border-0 rounded-xs transition duration-500 ease-in-out ${mode === "light" ? "bg-[#D7E3FC] hover:bg-[#CCDBFD]" : "bg-[#C1D3FE] hover:bg-[#CCDBFD]"} projects-list__list-item`} aria-label={`Project list item: ${project.project_name}`}>
         <Link className="contents projects-list__link" to={`/projects/${project.project_name}`} aria-label={`View ${project.project_name}`}>
            <div className={`flex flex-col justify-between ${isOddProject ? "order-2" : "order-1"} projects-list__first-wrapper`} aria-label={`Project ${project.project_name} details`}>
               <img src={DUMMY_LOGO_IMAGE_URL_1} className={`size-[5.938rem] ${isOddProject ? "self-end" : "self-start"}`} alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} />
               <div className="flex-col projects-list__text-container" aria-label={`Project ${project.project_name} text container`}>
                  <span className={`text-4xl -mb-5 ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"}`}>{project.project_description || "Here we will describe the concept behind it"}</span>
                  <h2 className={`text-[5.938rem] font-bold transition-all duration-800 ${mode === "light" ? "text-[#ABC4FF] light" : "text-[#EDF2FB] dark"}`}>{project.project_name.toLocaleUpperCase()}</h2>
                  <span className={`text-2xl ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"}`}>{project.project_technologies || "Techstack like this... and this, you know"}</span>
               </div>
            </div>
            <div className={`flex justify-${isOddProject ? "start" : "end"} items-center ${isOddProject ? "order-1" : "order-2"} projects-list__second-wrapper`} aria-label={`Project ${project.project_name} showcase`}>
               <img src={DUMMY_LOGO_IMAGE_URL} className="size-[30rem] transition-all duration-800" alt={`${PROJECT_SHOWCASE_IMAGE_ALT_TEXT} for ${project.project_name}`} />
            </div>
         </Link>
      </li>
   );
};

export default ProjectsListProject;
