import { useHeaderVisibility } from "../../utils/hooks/useHeaderVisibility/useHeaderVisibility";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import HeaderModeSwitcher from "./components/header-mode-switcher/HeaderModeSwitcher";
import HeaderNavigation from "./components/header-navigation/HeaderNavigation";
import { HEADER_ARIA_LABEL } from "./data/headerData";

const Header = () => {
   const isVisible = useHeaderVisibility();

   return (
      <header
         aria-label={HEADER_ARIA_LABEL}
         className={`
            header
            fixed w-full min-h-[6.25rem] z-20 px-5 
            flex items-center justify-between 
            bg-section
            transition-transform duration-800 ease-in-out
            ${isVisible ? "transform-none" : "-translate-y-full"}
         `}
      >
         <HeaderLogo />
         <HeaderNavigation />
         <HeaderModeSwitcher />
      </header>
   );
};

export default Header;
