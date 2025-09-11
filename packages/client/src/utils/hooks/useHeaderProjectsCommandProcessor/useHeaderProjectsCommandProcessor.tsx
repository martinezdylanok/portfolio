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
               const hyphenIndex = projectName.search("-");
               const whiteSpace = " ";
               const formattedProjectName = projectName.substring(0, hyphenIndex) + whiteSpace + projectName.substring(hyphenIndex + 1);
               if (formattedProjectName.length >= 3) {
                  const matchingProject = projects?.find((project) => project.project_name.toLowerCase().includes(formattedProjectName));

                  if (matchingProject) {
                     setProjectsAreVisible(false);
                     setProjectsAreClosing(false);
                     window.location.href = `/projects/${matchingProject.project_name}`;
                  } else {
                     console.error(`Project "${projectName}" not found`);
                  }
               } else {
                  console.error("Project name must be at least 3 characters long");
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
