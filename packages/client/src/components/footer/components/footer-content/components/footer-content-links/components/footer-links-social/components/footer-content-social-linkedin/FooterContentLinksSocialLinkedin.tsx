import { FOOTER_CONTENT_SOCIAL_LINKEDIN_ARIA_LABEL, LINKEDIN_LOGO_LIGHT_MODE, LINKEDIN_LOGO_DARK_MODE, LINKEDIN_LOGO_ALT, LINKEDIN_PROFILE_URL } from "./data/footerContentSocialLinkedinData";
import { useThemeContext } from "../../../../../../../../../../utils/hooks/useTheme";
const FooterContentLinksSocialLinkedin = () => {
   const { mode } = useThemeContext();
   return (
      <div className="social__linkedin-logo-container" aria-label={FOOTER_CONTENT_SOCIAL_LINKEDIN_ARIA_LABEL}>
         <a href={LINKEDIN_PROFILE_URL} target="_blank">
            <img className="size-6 opacity-50 transition-all duration-500 ease-in-out hover:opacity-100" src={` ${mode === "light" ? LINKEDIN_LOGO_DARK_MODE : LINKEDIN_LOGO_LIGHT_MODE}`} alt={LINKEDIN_LOGO_ALT} />
         </a>
      </div>
   );
};

export default FooterContentLinksSocialLinkedin;
