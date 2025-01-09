import { REPOSITORY_URL, CALL_TO_ACTION_TEXT } from "./data/constants";

const FooterCallToAction = () => {
   return (
      <div className="footer__call-to-action" aria-label="Footer call to action">
         <a href={REPOSITORY_URL} className="call-to-action__link">
            <span className="link__text">{CALL_TO_ACTION_TEXT}</span>
         </a>
      </div>
   );
};

export default FooterCallToAction;
