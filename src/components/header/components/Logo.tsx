import { LOGO_ALT } from "../data/constants";
const Logo = () => {
   return (
      <div className="header-logo">
         <a href="." aria-label={`${LOGO_ALT} link`}>
            <img src="" alt={`${LOGO_ALT} of the website`} />
         </a>
      </div>
   );
};

export default Logo;
