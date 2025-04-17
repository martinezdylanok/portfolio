import { useThemeContext } from "../../../../utils/hooks/useTheme";

const setupLightMode = () => {
   vi.mocked(useThemeContext).mockReturnValue({
      mode: "light",
      toggleMode: vi.fn(),
   });
};

const setupDarkMode = () => {
   vi.mocked(useThemeContext).mockReturnValue({
      mode: "dark",
      toggleMode: vi.fn(),
   });
};

const resetModes = () => {
   vi.resetAllMocks();
};

const mockProjects = [
   {
      project_id: 1,
      project_name: "Project 1",
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
      project_name: "Project 2",
      project_description: "Description 2",
      project_overview_technologies: "Tech 2",
      project_overview_description: "Description 2",
      project_overview_duration: "Duration 2",
      project_features: "Features 2",
      project_challenges: "Challenges 2",
      project_final_results: "Final results 2",
   },
   {
      project_id: 3,
      project_name: "Project 3",
      project_description: "Description 3",
      project_overview_technologies: "Tech 3",
      project_overview_description: "Description 3",
      project_overview_duration: "Duration 3",
      project_features: "Features 3",
      project_challenges: "Challenges 3",
      project_final_results: "Final results 3",
   },
];

export { mockProjects, resetModes, setupDarkMode, setupLightMode };
