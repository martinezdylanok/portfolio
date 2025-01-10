import { BUTTON_ARIA_LABEL_TEXT, IMAGE_ALT_TEXT } from "./data/headerModeSwitcherData";

const HeaderModeSwitcher = () => {
   return (
      <button className="header__mode-switcher-button" aria-label={BUTTON_ARIA_LABEL_TEXT}>
         <img src="" className="header__mode-switcher-image" alt={IMAGE_ALT_TEXT} />
      </button>
   );
};

export default HeaderModeSwitcher;
