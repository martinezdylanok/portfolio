import { FOOTER_CONTENT_SOCIAL_GITHUB_ARIA_LABEL, GITHUB_LOGO_DARK_MODE, GITHUB_LOGO_LIGHT_MODE, GITHUB_LOGO_ALT, GITHUB_PROFILE_URL } from "./data/footerContentSocialGithubData";
import { useThemeContext } from "../../../../../../../../../../utils/hooks/useTheme";

const FooterContentLinksSocialGithub = () => {
   const { mode } = useThemeContext();
   return (
      <div className="social__github-logo-container" aria-label={FOOTER_CONTENT_SOCIAL_GITHUB_ARIA_LABEL}>
         <a href={GITHUB_PROFILE_URL} target="_blank">
            <img className="opacity-50 transition-all duration-500 ease-in-out hover:opacity-100" src={` ${mode === "light" ? GITHUB_LOGO_DARK_MODE : GITHUB_LOGO_LIGHT_MODE}`} alt={GITHUB_LOGO_ALT} />
         </a>
      </div>
   );
};

export default FooterContentLinksSocialGithub;
