const PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT: string = "Project image";
const PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER: string = "A look into the project";

interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_technologies: string;
}

export interface relatedProjectsProjectProps {
   firstPart: string;
   secondPart: string;
   project: ProjectInterface;
}

export { PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT, PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER };
