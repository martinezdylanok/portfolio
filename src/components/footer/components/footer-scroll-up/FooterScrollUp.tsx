import { ARROW_ICON, ARROW_ICON_ALT_TEXT, SCROLL_UP_TEXT } from "./data/constants";

const FooterContentScrollUp = () => {
   return (
      <div className="footer__scroll-up" aria-label="Footer scroll up">
         <a href="." className="scroll-up__link">
            <img src={ARROW_ICON} alt={ARROW_ICON_ALT_TEXT} className="link__arrow-icon" />
            <span className="link__text">{SCROLL_UP_TEXT}</span>
         </a>
      </div>
   );
};

export default FooterContentScrollUp;
