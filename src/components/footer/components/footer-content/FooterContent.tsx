import FooterContentLogo from "./components/footer-content-logo/FooterContentLogo";
import FooterContentSocial from "./components/footer-content-social/FooterContentSocial";

const FooterContent = () => {
   return (
      <div className="footer__content-container" aria-label="Footer content container">
         <FooterContentLogo />
         <FooterContentSocial />
      </div>
   );
};

export default FooterContent;
