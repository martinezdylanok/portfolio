import { Link } from "react-router";
import { useThemeContext } from "../../../../../../../../../../utils/hooks/useTheme";
import type { relatedProjectsProjectProps } from "./data/projectRelatedContainerProjectsProjectData";
import { PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT, PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER } from "./data/projectRelatedContainerProjectsProjectData";

const ProjectRelatedContainerProjectsProject = ({ firstPart, secondPart, project }: relatedProjectsProjectProps) => {
   const { mode } = useThemeContext();
   return (
      <li className="project__related-project" data-testid="related-project">
         <Link key={project.project_id} to={`/projects/${project.project_name}`}>
            <div className="project__related-project-upper-part">
               <img className="size-[20rem]" src="../../../../../../../../../public/success_icon_dark_mode.svg" alt={PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT} />
            </div>
            <div className="flex flex-col project__related-project-lower-part" data-testid="related-project-lower-part">
               <span className={`text-2xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} mb-6`} data-testid="project-second-part-name">
                  {secondPart || PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER}
               </span>
               <h3 className={`text-4xl text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} font-bold`}>{firstPart}</h3>
            </div>
         </Link>
      </li>
   );
};

export default ProjectRelatedContainerProjectsProject;
