import FooterContentLinksNavigation from "./components/footer-links-navigation/FooterContentLinksNavigation";
import FooterContentLinksSocial from "./components/footer-links-social/FooterContentLinksSocial";
import { FOOTER_CONTENT_LINKS__ARIA_LABEL } from "./data/footerContentLinksData";

const FooterContentLinks = () => {
   return (
      <div className="footer-content__links flex justify-around py-20" aria-label={FOOTER_CONTENT_LINKS__ARIA_LABEL}>
         <FooterContentLinksSocial />
         <FooterContentLinksNavigation />
      </div>
   );
};

export default FooterContentLinks;
