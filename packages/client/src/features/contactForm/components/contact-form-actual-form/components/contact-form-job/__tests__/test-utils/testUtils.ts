import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import userEvent from "@testing-library/user-event";

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

const user = userEvent.setup();

export { setupLightMode, setupDarkMode, resetModes, user };
