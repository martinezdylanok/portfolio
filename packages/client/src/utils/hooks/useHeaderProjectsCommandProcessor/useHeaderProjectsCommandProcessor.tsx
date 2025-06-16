import { UseHeaderProjectsCommandProcessorProps } from "./data/useHeaderProjectsCommandProcessorData";

export const useHeaderProjectsCommandProcessor = ({ projects, setProjectsAreVisible, setProjectsAreClosing }: UseHeaderProjectsCommandProcessorProps) => {
   const executeCommand = (command: string) => {
      const normalizedCommand = command.trim().toLowerCase();

      switch (normalizedCommand) {
         case "ls":
            setProjectsAreVisible(true);
            setProjectsAreClosing(false);
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
                  const matchingProject = projects?.find((project) => project.project_name.toLowerCase().includes(projectName));

                  if (matchingProject) {
                     window.location.href = `#${matchingProject.project_name}`;
                     setProjectsAreVisible(false);
                     setProjectsAreClosing(false);
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

   return {
      executeCommand,
   };
};
