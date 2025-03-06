import { useState } from "react";
import { BUTTON_ARIA_LABEL_TEXT, LIGHT_MODE_ALT_TEXT, DARK_MODE_ALT_TEXT, RETRO_MODE_ALT_TEXT } from "./data/headerModeSwitcherData";
import "./styles/toggle-mode-animation.css";
import { useThemeContext } from "../../../../utils/hooks/useTheme";

const HeaderModeSwitcher = () => {
   const { mode, toggleMode } = useThemeContext();

   const [animate, setAnimate] = useState(false);

   const handleClick = () => {
      toggleMode();
      setAnimate(true);
      setTimeout(() => {
         setAnimate(false);
      }, 1500);
   };

   return (
      <button className={`p-1.5 header__mode-switcher-button`} aria-label={BUTTON_ARIA_LABEL_TEXT} onClick={handleClick}>
         {mode === "light" ? <img src="/header/light_mode_icon.svg" className={`cursor-pointer header__mode-switcher-image ${animate ? "toggle-mode-animation" : ""}`} alt={LIGHT_MODE_ALT_TEXT} /> : <img src="/header/dark_mode_icon.svg" className={`cursor-pointer header__mode-switcher-image ${animate ? "toggle-mode-animation" : ""}`} alt={DARK_MODE_ALT_TEXT} />}
         <img src="/header/retro_mode_icon.svg" className="hidden cursor-pointer header__mode-switcher-image" alt={RETRO_MODE_ALT_TEXT} />
      </button>
   );
};

export default HeaderModeSwitcher;
