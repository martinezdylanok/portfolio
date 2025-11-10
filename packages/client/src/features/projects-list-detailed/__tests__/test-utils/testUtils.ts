import { useThemeContext } from "../../../../utils/hooks/useThemeContext/useThemeContext";

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
      project_id: "1",
      project_name: "Project 1",
      project_description: "Description 1",
      project_technologies: "Tech 1",
   },
   {
      project_id: "2",
      project_name: "Project 2",
      project_description: "Description 2",
      project_technologies: "Tech 2",
   },
   {
      project_id: "3",
      project_name: "Project 3",
      project_description: "Description 3",
      project_technologies: "Tech 3",
   },
   {
      project_id: "4",
      project_name: "Project 4",
      project_description: "Description 4",
      project_technologies: "Tech 4",
   },
   {
      project_id: "5",
      project_name: "Project 5",
      project_description: "Description 5",
      project_technologies: "Tech 5",
   },
   {
      project_id: "6",
      project_name: "Project 6",
      project_description: "Description 6",
      project_technologies: "Tech 6",
   },
];

const MOCKED_ERROR_MESSAGE = "Internal Server Error";

export { MOCKED_ERROR_MESSAGE, mockProjects, resetModes, setupDarkMode, setupLightMode };

