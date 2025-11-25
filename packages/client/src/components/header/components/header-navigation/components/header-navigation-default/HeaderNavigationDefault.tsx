import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import "./styles/default-navigation-animations.css";

import { HEADER_DEFAULT_NAVIGATION_LINKS, LIST_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationDefaultData";

const HeaderNavigationDefault = () => {
   const { theme } = useThemeContext();
   return (
      <nav className="header__default-navigation flex items-center" aria-label={NAV_ARIA_LABEL_TEXT}>
         <ul className="header__default-navigation-list justify-center gap-5 hidden lg:flex" aria-label={LIST_ARIA_LABEL_TEXT}>
            {HEADER_DEFAULT_NAVIGATION_LINKS.map((link, index) => (
               <li key={index} className="header__default-navigation-list-item">
                  <a href={link.HREF} aria-label={link.ARIA_LABEL}>
                     <span className="header__default-navigation-list-link-text text-heading hover:text-accent font-hanken-grotesk font-bold text-xl transition-colors duration-300 ease-in-out cursor-pointer">{link.LABEL}</span>
                  </a>
               </li>
            ))}
         </ul>

         <button className={`header__nav-menu-button`}>
            <img src={theme === "light" ? "/header/hamburguer_icon_light_mode.svg" : "/header/hamburguer_icon_dark_mode.svg"} className="header__logo-image lg:hidden" alt="" />
         </button>
      </nav>
   );
};

export default HeaderNavigationDefault;
