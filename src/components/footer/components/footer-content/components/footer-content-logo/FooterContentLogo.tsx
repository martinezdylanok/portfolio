//TODO: Fetch image from database.

import { FOOTER_CONTENT_LOGO__ARIA_LABEL, FOOTER_CONTENT_LOGO__IMAGE_ALT } from "./data/footerContentLogoData";

const FooterContentLogo = () => {
   return (
      <div className="footer-content__logo" aria-label={FOOTER_CONTENT_LOGO__ARIA_LABEL}>
         <img src="" alt={FOOTER_CONTENT_LOGO__IMAGE_ALT} />
      </div>
   );
};

export default FooterContentLogo;
