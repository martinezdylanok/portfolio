import { useState } from "react";
import { useThemeContext } from "../../../../utils/hooks/useTheme";
import { LOGO_CONTAINER_ARIA_LABEL, LOGO_IMAGE_ALT_TEXT, LOGO_TITLE_TEXT } from "./data/headerLogoConstants";
import "./styles/logo-animations.css";

// NOTE: Set a width/height for the header__logo-wrapper element that is equal to the width/height of the image.

const HeaderLogo = () => {
   const { mode } = useThemeContext();
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => setIsHovered(true);
   const handleMouseLeave = () => setIsHovered(false);

   return (
      <div className="header__logo" aria-label={LOGO_CONTAINER_ARIA_LABEL} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         <a href="/" className="text-center header__logo-link">
            <div className="relative w-[6.25rem] h-[3.125rem] header__logo-wrapper">
               {mode === "light" ? <img src="/header/dm_logo_light_mode.svg" className={`absolute top-0 left-0 header__logo-image ${isHovered ? "lifted" : ""}`} alt={LOGO_IMAGE_ALT_TEXT} /> : <img src="/header/dm_logo_dark_mode.svg" className={`absolute top-0 left-0 header__logo-image ${isHovered ? "lifted" : ""}`} alt={LOGO_IMAGE_ALT_TEXT} />}
               <span className={`absolute left-0 w-full text-center text-[0.625rem] font-bold ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"} header__logo-title ${isHovered ? "unlifted" : ""}`}>{LOGO_TITLE_TEXT}</span>
            </div>
         </a>
      </div>
   );
};

export default HeaderLogo;
