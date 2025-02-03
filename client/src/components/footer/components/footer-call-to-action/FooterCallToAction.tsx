import { FOOTER_CALL_TO_ACTION_ARIA_LABEL, FOOTER_REPOSITORY_URL, FOOTER_CALL_TO_ACTION_TEXT } from "./data/footerCallToActionData";

const FooterCallToAction = () => {
   return (
      <div className="footer__call-to-action" aria-label={FOOTER_CALL_TO_ACTION_ARIA_LABEL}>
         <a href={FOOTER_REPOSITORY_URL} className="footer__call-to-action-link">
            <span className="footer__call-to-action-text">{FOOTER_CALL_TO_ACTION_TEXT}</span>
         </a>
      </div>
   );
};

export default FooterCallToAction;
