import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";

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
      project_id: 0,
      project_name: "Project 1",
      project_description: "Description 1",
      project_overview_technologies: "Tech 1",
   },
   {
      project_id: 1,
      project_name: "Project 2",
      project_description: "Description 2",
      project_technologies: "Tech 2",
   },
   {
      project_id: 2,
      project_name: "Project 3",
      project_description: "Description 3",
      project_technologies: "Tech 3",
   },
];

export { mockProjects, resetModes, setupDarkMode, setupLightMode };
