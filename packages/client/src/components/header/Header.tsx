import HeaderLogo from "./components/header-logo/HeaderLogo";
import HeaderNavigation from "./components/header-navigation/HeaderNavigation";
import HeaderModeSwitcher from "./components/header-mode-switcher/HeaderModeSwitcher";
import { useThemeContext } from "../../utils/hooks/useTheme";

const Header = () => {
   const { mode } = useThemeContext();
   return (
      <header className={`header flex items-center justify-between p-5 ${mode === "light" ? "bg-[#EDF2FB]" : "bg-[#ABC4FF]"}`}>
         <HeaderLogo />
         <HeaderNavigation />
         <HeaderModeSwitcher />
      </header>
   );
};

export default Header;
