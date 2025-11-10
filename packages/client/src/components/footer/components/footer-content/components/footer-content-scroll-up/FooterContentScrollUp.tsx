import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { FOOTER_ARROW_ICON_DARK_MODE, FOOTER_ARROW_ICON_LIGHT_MODE, FOOTER_SCROLL_UP_ARIA_LABEL, FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT, FOOTER_SCROLL_UP_TEXT } from "./data/footerContentScrollUpData";
import { scrollToTop } from "./utils/scrollToTop";

const FooterContentScrollUp = () => {
   const { theme } = useThemeContext();

   return (
      <div className="footer-content__scroll-up justify-self-center py-20" aria-label={FOOTER_SCROLL_UP_ARIA_LABEL}>
         <a href="#top" onClick={scrollToTop} className="footer-content__scroll-up-link flex gap-2 group">
            <span className="footer-content__scroll-up-text relative font-hanken-grotesk text-xl font-bold text-heading">
               {FOOTER_SCROLL_UP_TEXT}
               <span className="footer-content__scroll-up-text-underline absolute left-0 bottom-0 h-[1px] bg-current w-0 group-hover:w-full transition-all duration-300"></span>
            </span>
            <img src={`${theme === "light" ? FOOTER_ARROW_ICON_LIGHT_MODE : FOOTER_ARROW_ICON_DARK_MODE}`} alt={FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT} className="footer-content__scroll-up-image group-hover:animate-bounce transition-all duration-300" />
         </a>
      </div>
   );
};

export default FooterContentScrollUp;
