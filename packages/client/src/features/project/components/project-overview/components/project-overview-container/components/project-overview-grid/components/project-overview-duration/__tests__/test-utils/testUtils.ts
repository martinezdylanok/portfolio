import { useThemeContext } from "../../../../../../../../../../../../utils/hooks/useTheme";

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
      project_name: "Project 01",
      project_description: "Description 1",
      project_overview_technologies: "Tech 1",
      project_overview_description: "Description 1",
      project_overview_duration: "Duration 1",
      project_features: "Features 1",
      project_challenges: "Challenges 1",
      project_final_results: "Final results 1",
   },
];

export { mockProjects, resetModes, setupDarkMode, setupLightMode };
