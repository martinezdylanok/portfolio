import { useThemeContext } from "../../../../../../utils/hooks/useTheme";

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

const projectsList = [
   {
      project_id: 1,
      project_name: "Project 1",
   },
   {
      project_id: 2,
      project_name: "Project 2",
   },
   {
      project_id: 3,
      project_name: "Project 3",
   },
];

const mockProjects = () => {
   global.fetch = vi.fn(
      () =>
         Promise.resolve({
            ok: true,
            json: () => Promise.resolve(projectsList),
         }) as any,
   );
};

export { setupLightMode, setupDarkMode, resetModes, mockProjects };
