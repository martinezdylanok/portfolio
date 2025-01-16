import { FOOTER_SCROLL_UP_ARIA_LABEL, FOOTER_SCROLL_UP_ARROW_ICON, FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT, FOOTER_SCROLL_UP_TEXT, SCROLL_UP_TEXT } from "./data/footerScrollUpData";

const FooterContentScrollUp = () => {
   return (
      <div className="footer__scroll-up-container" aria-label={FOOTER_SCROLL_UP_ARIA_LABEL}>
         <a href="." className="footer__scroll-up-link">
            <img src={FOOTER_SCROLL_UP_ARROW_ICON} alt={FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT} className="footer__scroll-up-image" />
            <span className="footer__scroll-up-text">{FOOTER_SCROLL_UP_TEXT}</span>
         </a>
      </div>
   );
};

export default FooterContentScrollUp;
