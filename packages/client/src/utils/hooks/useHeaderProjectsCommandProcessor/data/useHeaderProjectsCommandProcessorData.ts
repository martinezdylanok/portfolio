export interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_technologies: string;
}

export interface UseHeaderProjectsCommandProcessorProps {
   projects: ProjectInterface[] | null | undefined;
   setProjectsAreVisible: (isVisible: boolean) => void;
   setProjectsAreClosing: (isClosing: boolean) => void;
}
