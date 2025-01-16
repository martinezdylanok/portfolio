import { FOOTER_CONTENT_SOCIAL_GITHUB_ARIA_LABEL, GITHUB_LOGO_URL, GITHUB_LOGO_ALT, GITHUB_PROFILE_URL } from "./data/footerContentSocialGithubData";

const FooterContentSocialGithub = () => {
   return (
      <div className="social__github-logo-container" aria-label={FOOTER_CONTENT_SOCIAL_GITHUB_ARIA_LABEL}>
         <a href={GITHUB_PROFILE_URL} target="_blank">
            <img src={GITHUB_LOGO_URL} alt={GITHUB_LOGO_ALT} />
         </a>
      </div>
   );
};

export default FooterContentSocialGithub;
