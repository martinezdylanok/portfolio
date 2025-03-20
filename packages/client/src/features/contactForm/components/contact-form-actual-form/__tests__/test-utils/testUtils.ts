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

const mockHandleActiveStateChange = vi.fn();

const defaultProps = {
   activeState: { active: "first" as const },
};

export { setupLightMode, setupDarkMode, resetModes, mockHandleActiveStateChange, defaultProps };
