import FooterContentLinksSocial from "./components/footer-links-social/FooterContentLinksSocial";
import FooterContentLinksNavigation from "./components/footer-links-navigation/FooterContentLinksNavigation";
import { FOOTER_CONTENT_LINKS__ARIA_LABEL } from "./data/footerContentLinksData";

const FooterContentLinks = () => {
   return (
      <div className="py-20 flex justify-around footer-content__social" aria-label={FOOTER_CONTENT_LINKS__ARIA_LABEL}>
         <FooterContentLinksSocial />
         <FooterContentLinksNavigation />
      </div>
   );
};

export default FooterContentLinks;
