import { motion } from "framer-motion";
import { useThemeContext } from "../../../../utils/hooks/useThemeContext/useThemeContext";
import { LOGO_CONTAINER_ARIA_LABEL, LOGO_IMAGE_ALT_TEXT, LOGO_TITLE_TEXT } from "./data/headerLogoConstants";
import { useHeaderLogoAnimations } from "./utils/useHeaderLogoAnimations";

const HeaderLogo = () => {
   const { theme } = useThemeContext();
   const { handleMouseEnter, handleMouseLeave, imageAnimation, imageTransition, titleAnimation, titleTransition } = useHeaderLogoAnimations();

   return (
      <div className="header__logo order-2 lg:order-1" aria-label={LOGO_CONTAINER_ARIA_LABEL} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         <a href="/" className="header__logo-link">
            <div className="header__logo-wrapper relative w-25 h-12.5 hidden lg:block">
               <motion.img
                  src={theme === "light" ? "/header/dm_logo_light_mode.svg" : "/header/dm_logo_dark_mode.svg"}
                  className="header__logo-image absolute top-0 left-0 w-full border-b-0 border-solid"
                  alt={LOGO_IMAGE_ALT_TEXT}
                  animate={imageAnimation}
                  style={{
                     borderBottomColor: "var(--text-heading)",
                  }}
                  transition={imageTransition}
               />
               <motion.span className="header__logo-title absolute left-0 w-full text-center text-xs font-bold text-heading" initial={{ top: "1%", opacity: 0 }} animate={titleAnimation} transition={titleTransition}>
                  {LOGO_TITLE_TEXT}
               </motion.span>
            </div>

            <motion.img src={theme === "light" ? "/header/dm_logo_light_mode.svg" : "/header/dm_logo_dark_mode.svg"} className="header__logo-image w-25 h-12.5 lg:hidden" alt={LOGO_IMAGE_ALT_TEXT} />
         </a>
      </div>
   );
};

export default HeaderLogo;
