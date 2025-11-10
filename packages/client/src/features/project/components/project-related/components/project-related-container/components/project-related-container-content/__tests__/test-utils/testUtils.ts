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

export { resetModes, setupDarkMode, setupLightMode };
