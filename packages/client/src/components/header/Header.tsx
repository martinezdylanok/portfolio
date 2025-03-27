import { useState, useEffect, useRef } from "react";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import HeaderNavigation from "./components/header-navigation/HeaderNavigation";
import HeaderModeSwitcher from "./components/header-mode-switcher/HeaderModeSwitcher";
import { useThemeContext } from "../../utils/hooks/useTheme";
import { HEADER_ARIA_LABEL } from "./data/headerData";

const Header = () => {
   const { mode } = useThemeContext();
   const [isVisible, setIsVisible] = useState(true);
   const previousScrollPosition = useRef(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPosition = window.pageYOffset;

         if (previousScrollPosition.current > currentScrollPosition) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }

         previousScrollPosition.current = currentScrollPosition;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });

   return (
      <header
         aria-label={HEADER_ARIA_LABEL}
         className={`
            fixed w-full min-h-[6.25rem] z-10 px-5 
            flex items-center justify-between 
            transition-transform duration-800 ease-in-out
            ${isVisible ? "transform-none" : "-translate-y-full"}
            ${mode === "light" ? "bg-[#EDF2FB]" : "bg-[#ABC4FF]"}
            header
         `}
      >
         <HeaderLogo />
         <HeaderNavigation />
         <HeaderModeSwitcher />
      </header>
   );
};

export default Header;
