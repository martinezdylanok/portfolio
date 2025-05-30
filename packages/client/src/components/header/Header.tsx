import { useHeaderVisibility } from "../../utils/hooks/useHeaderVisibility/useHeaderVisibility";
import { useThemeContext } from "../../utils/hooks/useTheme";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import HeaderModeSwitcher from "./components/header-mode-switcher/HeaderModeSwitcher";
import HeaderNavigation from "./components/header-navigation/HeaderNavigation";
import { HEADER_ARIA_LABEL } from "./data/headerData";

const Header = () => {
   const { mode } = useThemeContext();
   const isVisible = useHeaderVisibility();

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
         <HeaderNavigation headerIsVisible={isVisible} />
         <HeaderModeSwitcher />
      </header>
   );
};

export default Header;
