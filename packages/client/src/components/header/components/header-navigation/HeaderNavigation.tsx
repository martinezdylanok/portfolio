import HeaderNavigationDefault from "./components/header-navigation-default/HeaderNavigationDefault";
import { NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationData";

const HeaderNavigation = () => {
   return (
      <div className="header__navigation relative" aria-label={NAV_ARIA_LABEL_TEXT}>
         <HeaderNavigationDefault />
      </div>
   );
};

export default HeaderNavigation;
