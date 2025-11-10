export const buildProjectApiPath = (projectName: string | undefined): string | null => {
   return projectName ? `projects/${projectName}` : null;
};
