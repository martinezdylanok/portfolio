export interface ProjectNameParts {
   firstPart: string;
   secondPart: string;
}

export const parseProjectName = (projectName: string): ProjectNameParts => {
   const projectNameParts = projectName.split(":");

   const firstPart = projectNameParts[0]?.toUpperCase() || "";
   const secondPart = projectNameParts[1]?.trim() || "";

   return {
      firstPart,
      secondPart,
   };
};
