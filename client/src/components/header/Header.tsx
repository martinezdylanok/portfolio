import HeaderLogo from "./components/header-logo/HeaderLogo";
import HeaderNavigation from "./components/header-navigation/HeaderNavigation";
import HeaderModeSwitcher from "./components/header-mode-switcher/HeaderModeSwitcher";

const Header = () => {
   return (
      <header>
         <HeaderLogo />
         <HeaderNavigation />
         <HeaderModeSwitcher />
      </header>
   );
};

export default Header;
