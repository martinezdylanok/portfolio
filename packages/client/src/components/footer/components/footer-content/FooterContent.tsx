import FooterContentLogo from "./components/footer-content-logo/FooterContentLogo";
import FooterContentScrollUp from "./components/footer-content-scroll-up/FooterContentScrollUp";
import { FOOTER_CONTENT_ARIA_LABEL } from "./data/footerContentData";
import FooterContentLinks from "./components/footer-content-links/FooterContentLinks";

const FooterContent = () => {
   return (
      <div className="mx-5 grid grid-cols-3 footer__content-container" aria-label={FOOTER_CONTENT_ARIA_LABEL}>
         <FooterContentLogo />
         <FooterContentLinks />
         <FooterContentScrollUp />
      </div>
   );
};

export default FooterContent;
