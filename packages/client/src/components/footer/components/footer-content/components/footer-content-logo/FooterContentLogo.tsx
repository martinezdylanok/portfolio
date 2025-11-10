import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { FOOTER_CONTENT_LOGO__ARIA_LABEL, FOOTER_CONTENT_LOGO__IMAGE_ALT, FOOTER_CONTENT_LOGO_DARK_MODE, FOOTER_CONTENT_LOGO_LIGHT_MODE } from "./data/footerContentLogoData";

const FooterContentLogo = () => {
   const { theme } = useThemeContext();

   return (
      <div className="footer-content__logo flex h-fit w-fit justify-self-center py-20" aria-label={FOOTER_CONTENT_LOGO__ARIA_LABEL}>
         <a className="footer-content__logo-link inline-block self-center" href="/">
            <img src={`${theme === "light" ? FOOTER_CONTENT_LOGO_LIGHT_MODE : FOOTER_CONTENT_LOGO_DARK_MODE}`} className={`footer-content__logo-image cursor-pointer transition-all duration-500 ease-in-out hover:scale-110`} alt={FOOTER_CONTENT_LOGO__IMAGE_ALT} />
         </a>
      </div>
   );
};

export default FooterContentLogo;
