import { useThemeContext } from "../../../../../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { FOOTER_CONTENT_SOCIAL_LINKEDIN_ARIA_LABEL, LINKEDIN_LOGO_ALT, LINKEDIN_LOGO_DARK_MODE, LINKEDIN_LOGO_LIGHT_MODE, LINKEDIN_PROFILE_URL } from "./data/footerContentSocialLinkedinData";
const FooterContentLinksSocialLinkedin = () => {
   const { theme } = useThemeContext();
   return (
      <div className="footer-content__links-social-linkedin" aria-label={FOOTER_CONTENT_SOCIAL_LINKEDIN_ARIA_LABEL}>
         <a href={LINKEDIN_PROFILE_URL} target="_blank" className="footer-content__links-social-linkedin-link">
            <img className="footer-content__links-social-linkedin-image size-6 opacity-50 transition-all duration-500 ease-in-out hover:opacity-100" src={` ${theme === "light" ? LINKEDIN_LOGO_LIGHT_MODE : LINKEDIN_LOGO_DARK_MODE}`} alt={LINKEDIN_LOGO_ALT} />
         </a>
      </div>
   );
};

export default FooterContentLinksSocialLinkedin;
