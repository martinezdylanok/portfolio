// TODO: Fetch project's data from DATABASE.

import { PROJECT_TEMPORAL_NAMES, NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationData";

const HeaderNavigation = () => {
   return (
      <nav className="header__navigation" aria-label={NAV_ARIA_LABEL_TEXT}>
         <ul className="header-navigation__list">
            {PROJECT_TEMPORAL_NAMES.map((project) => (
               <li key={project.id} className="header-navigation__list-item">
                  <a href={`#${project.name}`} className="header-navigation__list-link">
                     {project.name}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default HeaderNavigation;
