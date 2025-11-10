import userEvent from "@testing-library/user-event";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";

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

const user = userEvent.setup();

export { mockHandleActiveStateChange, resetModes, setupDarkMode, setupLightMode, user };

