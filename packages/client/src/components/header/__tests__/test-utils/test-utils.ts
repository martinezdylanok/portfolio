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

const getPageYOffset = () => {
   Object.defineProperty(window, "pageYOffset", {
      get: () => 0,
      configurable: true,
   });
};

export { setupLightMode, setupDarkMode, resetModes, getPageYOffset };
