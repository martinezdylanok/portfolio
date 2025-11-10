import { useThemeContext } from "../../../../../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { FOOTER_CONTENT_SOCIAL_GITHUB_ARIA_LABEL, GITHUB_LOGO_ALT, GITHUB_LOGO_DARK_MODE, GITHUB_LOGO_LIGHT_MODE, GITHUB_PROFILE_URL } from "./data/footerContentSocialGithubData";

const FooterContentLinksSocialGithub = () => {
   const { theme } = useThemeContext();
   return (
      <div className="footer-content__links-social-github" aria-label={FOOTER_CONTENT_SOCIAL_GITHUB_ARIA_LABEL}>
         <a href={GITHUB_PROFILE_URL} target="_blank" className="footer-content__links-social-github-link">
            <img className="footer-content__links-social-github-image opacity-50 transition-all duration-500 ease-in-out hover:opacity-100" src={` ${theme === "light" ? GITHUB_LOGO_LIGHT_MODE : GITHUB_LOGO_DARK_MODE}`} alt={GITHUB_LOGO_ALT} />
         </a>
      </div>
   );
};

export default FooterContentLinksSocialGithub;
