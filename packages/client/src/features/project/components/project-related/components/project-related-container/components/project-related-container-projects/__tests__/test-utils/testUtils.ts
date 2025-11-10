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

const firstNamesExpected = mockProjects.map((p) => p.project_name.split(":")[0].toUpperCase());

const secondNamesExpected = mockProjects.map((p) => p.project_name.split(":")[1] || "A look into the project");

export { firstNamesExpected, mockProjects, resetModes, secondNamesExpected, setupDarkMode, setupLightMode };
