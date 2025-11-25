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
            fixed w-full z-9999 
            bg-page
            transition-transform duration-600 ease-in-out
            ${isVisible ? "transform-none" : "-translate-y-full"}
         `}
      >
         {/* TODO: Modify the header animation duration, also check if motion animation can be applied */}
         <div className="w-full lg:max-w-7xl flex items-center justify-between p-6 mx-auto">
            <HeaderLogo />
            <HeaderNavigation />
            <HeaderModeSwitcher />
         </div>
      </header>
   );
};

export default Header;
