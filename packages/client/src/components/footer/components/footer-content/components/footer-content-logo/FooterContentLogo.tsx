import { FOOTER_CONTENT_LOGO__ARIA_LABEL, FOOTER_CONTENT_LOGO__IMAGE_ALT, FOOTER_CONTENT_LOGO_DARK_MODE, FOOTER_CONTENT_LOGO_LIGHT_MODE } from "./data/footerContentLogoData";
import { useThemeContext } from "../../../../../../utils/hooks/useTheme";

const FooterContentLogo = () => {
   const { mode } = useThemeContext();

   return (
      <div className="py-20 flex w-fit h-fit justify-self-center footer-content__logo" aria-label={FOOTER_CONTENT_LOGO__ARIA_LABEL}>
         <a className="inline-block self-center" href="/">
            <img src={`${mode === "light" ? FOOTER_CONTENT_LOGO_LIGHT_MODE : FOOTER_CONTENT_LOGO_DARK_MODE}`} className={`cursor-pointer footer-content__logo-image transition-all duration-500 ease-in-out hover:scale-110`} alt={FOOTER_CONTENT_LOGO__IMAGE_ALT} />
         </a>
      </div>
   );
};

export default FooterContentLogo;
