import FooterContentLinks from "./components/footer-content-links/FooterContentLinks";
import FooterContentLogo from "./components/footer-content-logo/FooterContentLogo";
import FooterContentScrollUp from "./components/footer-content-scroll-up/FooterContentScrollUp";
import { FOOTER_CONTENT_ARIA_LABEL } from "./data/footerContentData";

const FooterContent = () => {
   return (
      <div className="footer__content-container mx-5 grid grid-cols-3" aria-label={FOOTER_CONTENT_ARIA_LABEL}>
         <FooterContentLogo />
         <FooterContentLinks />
         <FooterContentScrollUp />
      </div>
   );
};

export default FooterContent;
