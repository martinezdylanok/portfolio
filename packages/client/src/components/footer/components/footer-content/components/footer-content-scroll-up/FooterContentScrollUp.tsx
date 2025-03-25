import { FOOTER_SCROLL_UP_ARIA_LABEL, FOOTER_ARROW_ICON_LIGHT_MODE, FOOTER_ARROW_ICON_DARK_MODE, FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT, FOOTER_SCROLL_UP_TEXT, scrollToTop } from "./data/footerContentScrollUpData";
import { useThemeContext } from "../../../../../../utils/hooks/useTheme";

const FooterContentScrollUp = () => {
   const { mode } = useThemeContext();

   return (
      <div className="py-20 justify-self-center footer__scroll-up-container" aria-label={FOOTER_SCROLL_UP_ARIA_LABEL}>
         <a href="#top" onClick={scrollToTop} className="flex gap-2 group footer__scroll-up-link">
            <span className={`relative font-semibold ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"} footer__scroll-up-text`}>
               {FOOTER_SCROLL_UP_TEXT}
               <span className="absolute left-0 bottom-0 h-[1px] bg-current w-0 group-hover:w-full transition-all duration-300"></span>
            </span>
            <img src={` ${mode === "light" ? FOOTER_ARROW_ICON_DARK_MODE : FOOTER_ARROW_ICON_LIGHT_MODE}`} alt={FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT} className="footer__scroll-up-image" />
         </a>
      </div>
   );
};

export default FooterContentScrollUp;
