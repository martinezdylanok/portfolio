import FooterContentLinksSocialGithub from "./components/footer-content-social-github/FooterContentLinksSocialGithub";
import FooterContentLinksSocialLinkedin from "./components/footer-content-social-linkedin/FooterContentLinksSocialLinkedin";
import { FOOTER_CONTENT_SOCIAL__ARIA_LABEL, FOOTER_CONTENT_SOCIAL__SPAN_TEXT } from "./data/footerContentSocialData";

const FooterContentLinksSocial = () => {
   return (
      <div className="footer-content__links-social flex flex-col gap-5 self-start justify-center items-center" aria-label={FOOTER_CONTENT_SOCIAL__ARIA_LABEL}>
         <span className="footer-content__links-social-span font-hanken-grotesk text-xl font-bold decoration-1 text-heading">{FOOTER_CONTENT_SOCIAL__SPAN_TEXT}</span>
         <FooterContentLinksSocialLinkedin />
         <FooterContentLinksSocialGithub />
      </div>
   );
};

export default FooterContentLinksSocial;
