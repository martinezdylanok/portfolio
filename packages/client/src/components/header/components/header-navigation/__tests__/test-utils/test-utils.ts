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

const setupRetroMode = () => {
   vi.mocked(useThemeContext).mockReturnValue({
      mode: "retro",
      toggleMode: vi.fn(),
   });
};

const resetModes = () => {
   vi.resetAllMocks();
};

export { resetModes, setupDarkMode, setupLightMode, setupRetroMode };
