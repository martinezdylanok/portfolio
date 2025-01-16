import FooterContentSocialGithub from "./components/footer-content-social-github/FooterContentSocialGithub";
import { FOOTER_CONTENT_SOCIAL__ARIA_LABEL } from "./data/footerContentSocialData";

const FooterContentSocial = () => {
   return (
      <div className="footer-content__social" aria-label={FOOTER_CONTENT_SOCIAL__ARIA_LABEL}>
         <FooterContentSocialGithub />
      </div>
   );
};

export default FooterContentSocial;
