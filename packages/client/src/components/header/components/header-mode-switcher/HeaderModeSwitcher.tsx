import { useAnimatedToggle } from "../../../../utils/hooks/useAnimatedToggle/useAnimatedToggle";
import { useThemeContext } from "../../../../utils/hooks/useTheme";
import { BUTTON_ARIA_LABEL_TEXT, DARK_MODE_ALT_TEXT, LIGHT_MODE_ALT_TEXT, RETRO_MODE_ALT_TEXT } from "./data/headerModeSwitcherData";
import "./styles/toggle-mode-animation.css";

const HeaderModeSwitcher = () => {
   const { mode, toggleMode } = useThemeContext();

   const { handlePress, isAnimating } = useAnimatedToggle(toggleMode);

   return (
      <button className={`p-1.5 header__mode-switcher-button`} aria-label={BUTTON_ARIA_LABEL_TEXT} onClick={handlePress}>
         {mode === "light" ? <img src="/header/light_mode_icon.svg" className={`cursor-pointer header__mode-switcher-image ${isAnimating ? "toggle-mode-animation" : ""}`} alt={LIGHT_MODE_ALT_TEXT} /> : mode === "dark" ? <img src="/header/dark_mode_icon.svg" className={`cursor-pointer header__mode-switcher-image ${isAnimating ? "toggle-mode-animation" : ""}`} alt={DARK_MODE_ALT_TEXT} /> : mode === "retro" ? <img src="/header/retro_mode_icon.svg" className={`cursor-pointer header__mode-switcher-image ${isAnimating ? "toggle-mode-animation" : ""}`} alt={RETRO_MODE_ALT_TEXT} /> : null}
      </button>
   );
};

export default HeaderModeSwitcher;
