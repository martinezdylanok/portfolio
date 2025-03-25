import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import FooterContentLinksSocialGithub from "./components/footer-content-social-github/FooterContentLinksSocialGithub";
import FooterContentLinksSocialLinkedin from "./components/footer-content-social-linkedin/FooterContentLinksSocialLinkedin";
import { FOOTER_CONTENT_SOCIAL__ARIA_LABEL, FOOTER_CONTENT_SOCIAL__SPAN_TEXT } from "./data/footerContentSocialData";

const FooterContentLinksSocial = () => {
   const { mode } = useThemeContext();

   return (
      <div className="flex flex-col gap-5 self-start justify-center items-center footer-content__social" aria-label={FOOTER_CONTENT_SOCIAL__ARIA_LABEL}>
         <span className={`text-xl font-bold underline decoration-1 ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"} footer-content__span `}>{FOOTER_CONTENT_SOCIAL__SPAN_TEXT}</span>
         <FooterContentLinksSocialLinkedin />
         <FooterContentLinksSocialGithub />
      </div>
   );
};

export default FooterContentLinksSocial;
