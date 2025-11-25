import HeaderNavigationDefault from "./components/header-navigation-default/HeaderNavigationDefault";
import { NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationData";

const HeaderNavigation = () => {
   return (
      <div className="header__navigation order-1 lg:order-2 relative" aria-label={NAV_ARIA_LABEL_TEXT}>
         <HeaderNavigationDefault />
      </div>
   );
};

export default HeaderNavigation;
