import { useThemeContext } from "../../../../utils/hooks/useTheme";
import HeaderNavigationDefault from "./components/header-navigation-default/HeaderNavigationDefault";
import HeaderNavigationRetro from "./components/header-navigation-retro/HeaderNavigationRetro";
import { NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationData";

const HeaderNavigation = () => {
   const { mode } = useThemeContext();

   return (
      // TODO: Add navigation default component
      <nav className="relative header__navigation" aria-label={NAV_ARIA_LABEL_TEXT}>
         <HeaderNavigationRetro />
      </nav>
   );
};

export default HeaderNavigation;
