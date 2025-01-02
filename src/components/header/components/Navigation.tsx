import { PROJECTS_TEXT, CONTACT_TEXT } from "../data/constants";
const Navigation = () => {
   return (
      <nav className="header-navigation" aria-label="Main navigation">
         <ul className="header-navigation__list">
            <li className="header-navigation__list-item">
               <a href={`#${PROJECTS_TEXT}`} aria-label={`${PROJECTS_TEXT} link`}>
                  {PROJECTS_TEXT}
               </a>
            </li>
            <li className="header-navigation__list-item">
               <a href={`#${CONTACT_TEXT}`} aria-label={`${CONTACT_TEXT} link`}>
                  {CONTACT_TEXT}
               </a>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
