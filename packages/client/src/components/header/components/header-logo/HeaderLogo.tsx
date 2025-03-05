import { LOGO_CONTAINER_ARIA_LABEL, LOGO_IMAGE_ALT_TEXT } from "./data/headerLogoConstants";
import { useState } from "react";
import "./styles/logo-animations.css";
import { useThemeContext } from "../../../../utils/theme-provider/themeProvider";

// NOTE: Set a width/height for the header__logo-wrapper element that is equal to the width/height of the image.

const HeaderLogo = () => {
   const { mode } = useThemeContext();
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => setIsHovered(true);
   const handleMouseLeave = () => setIsHovered(false);

   return (
      <div className="header__logo" aria-label={LOGO_CONTAINER_ARIA_LABEL} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         <a href="/" className="text-center header__logo-link">
            <div className="relative w-[5.945rem] h-[2.813rem] header__logo-wrapper">
               {mode === "light" ? <img src="/header/dm_logo_light_mode.svg" className={`absolute top-0 left-0 header__logo-image ${isHovered ? "lifted" : ""}`} alt={LOGO_IMAGE_ALT_TEXT} /> : <img src="/header/dm_logo_dark_mode.svg" className={`absolute top-0 left-0 header__logo-image ${isHovered ? "lifted" : ""}`} alt={LOGO_IMAGE_ALT_TEXT} />}
               <span className={`absolute left-0 text-[0.74rem] ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"} min-w-max header__logo-title ${isHovered ? "unlifted" : ""}`}>DYLAN MARTINEZ</span>
            </div>
         </a>
      </div>
   );
};

export default HeaderLogo;
