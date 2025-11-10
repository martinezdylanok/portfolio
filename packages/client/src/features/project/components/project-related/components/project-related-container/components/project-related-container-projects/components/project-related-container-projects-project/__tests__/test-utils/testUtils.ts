import { useThemeContext } from "../../../../../../../../../../../../utils/hooks/useThemeContext/useThemeContext";

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
      project_id: 0,
      project_name: "Project 1",
      project_description: "Description 1",
      project_technologies: "Technologies 1",
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
