import FooterContentLogo from "./components/footer-content-logo/FooterContentLogo";
import FooterContentSocial from "./components/footer-content-social/FooterContentSocial";
import { FOOTER_CONTENT_ARIA_LABEL } from "./data/footerContentData";

const FooterContent = () => {
   return (
      <div className="footer__content-container" aria-label={FOOTER_CONTENT_ARIA_LABEL}>
         <FooterContentLogo />
         <FooterContentSocial />
      </div>
   );
};

export default FooterContent;
