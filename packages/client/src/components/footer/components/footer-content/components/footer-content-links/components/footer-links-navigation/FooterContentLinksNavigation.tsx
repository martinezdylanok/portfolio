import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import { FOOTER_CONTENT_LINKS_NAVIGATION__ARIA_LABEL, FOOTER_CONTENT_LINKS_NAVIGATION__SPAN_TEXT, FOOTER_CONTENT_LINKS_NAVIGATION__LINKS } from "./data/footerContentLinksNavigationData";

const FooterContentLinksSocial = () => {
   const { mode } = useThemeContext();

   return (
      <nav className="flex flex-col gap-2.5 justify-center footer-content__social" aria-label={FOOTER_CONTENT_LINKS_NAVIGATION__ARIA_LABEL}>
         <span className={`text-xl font-bold underline decoration-1 ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"} footer-content__span `}>{FOOTER_CONTENT_LINKS_NAVIGATION__SPAN_TEXT}</span>
         <ul className="flex flex-col gap-2.5">
            {FOOTER_CONTENT_LINKS_NAVIGATION__LINKS.map((link: string, index: number) =>
               link === "Home" ? (
                  <a href="." key={index}>
                     <li>
                        <span className={`relative group font-semibold cursor-pointer ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"}`}>
                           {link}
                           <span className={`absolute left-0 bottom-0 h-[1px] bg-current w-0 group-hover:w-full transition-all duration-300`}></span>
                        </span>
                     </li>
                  </a>
               ) : (
                  <a href={`#${link.toLowerCase()}`} key={index}>
                     <li>
                        <span className={`relative group font-semibold cursor-pointer ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"}`}>
                           {link}
                           <span className={`absolute left-0 bottom-0 h-[1px] bg-current w-0 group-hover:w-full transition-all duration-300`}></span>
                        </span>
                     </li>
                  </a>
               ),
            )}
         </ul>
      </nav>
   );
};
export default FooterContentLinksSocial;
