import { FOOTER_CONTENT_LINKS_NAVIGATION__ARIA_LABEL, FOOTER_CONTENT_LINKS_NAVIGATION__LINKS, FOOTER_CONTENT_LINKS_NAVIGATION__SPAN_TEXT } from "./data/footerContentLinksNavigationData";

const FooterContentLinksNavigation = () => {
   return (
      <nav className="footer-content__links-navigation flex flex-col gap-2.5 justify-center" aria-label={FOOTER_CONTENT_LINKS_NAVIGATION__ARIA_LABEL}>
         <span className="footer-content__links-navigation-span text-xl font-bold text-heading">{FOOTER_CONTENT_LINKS_NAVIGATION__SPAN_TEXT}</span>
         <ul className="footer-content__links-navigation-list flex flex-col gap-2.5">
            {FOOTER_CONTENT_LINKS_NAVIGATION__LINKS.map((link, index) => (
               <li key={index} className="footer-content__links-navigation-list-item">
                  <a href={link.HREF} className="footer-content__links-navigation-link">
                     <span className="footer-content__links-navigation-link-text relative group text-sm font-bold cursor-pointer text-heading">
                        {link.LABEL}
                        <span className="footer-content__links-navigation-link-underline absolute left-0 bottom-0 h-[1px] bg-current w-0 group-hover:w-full transition-all duration-300"></span>
                     </span>
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};
export default FooterContentLinksNavigation;
