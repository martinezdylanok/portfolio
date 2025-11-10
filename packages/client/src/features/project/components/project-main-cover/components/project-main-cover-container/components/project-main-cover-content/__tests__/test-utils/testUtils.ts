import { useThemeContext } from "../../../../../../../../../../utils/hooks/useThemeContext/useThemeContext";

const setupLightMode = () => {
   vi.mocked(useThemeContext).mockReturnValue({
      theme: "light",
      toggleTheme: vi.fn(),
   });
};

const setupDarkMode = () => {
   vi.mocked(useThemeContext).mockReturnValue({
      theme: "dark",
      toggleTheme: vi.fn(),
   });
};

const resetModes = () => {
   vi.resetAllMocks();
};

const mockProjects = [
   {
      project_id: 1,
      project_name: "Project with only 1 part name:",
      project_description: "Description 1",
      project_overview_technologies: "Tech 1",
      project_overview_description: "Description 1",
      project_overview_duration: "Duration 1",
      project_features: "Features 1",
      project_challenges: "Challenges 1",
      project_final_results: "Final results 1",
   },
   {
      project_id: 2,
      project_name: "Project with 2 parts name: Here is the prove",
      project_description: "Description 2",
      project_overview_technologies: "Tech 2",
      project_overview_description: "Description 2",
      project_overview_duration: "Duration 2",
      project_features: "Features 2",
      project_challenges: "Challenges 2",
      project_final_results: "Final results 2",
   },
];

export { mockProjects, resetModes, setupDarkMode, setupLightMode };
