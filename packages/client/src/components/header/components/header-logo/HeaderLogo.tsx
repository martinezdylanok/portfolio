import { LOGO_CONTAINER_ARIA_LABEL, LOGO_IMAGE_ALT_TEXT } from "./data/headerLogoConstants";

const HeaderLogo = () => {
   return (
      <div className="header__logo" aria-label={LOGO_CONTAINER_ARIA_LABEL}>
         <a href="/" className="header__logo-link">
            <img src="../../../../../public/images/header/dm_logo.svg" className="header__logo-image" alt={LOGO_IMAGE_ALT_TEXT} />
         </a>
      </div>
   );
};

export default HeaderLogo;
