// TODO: Create the logic for fetching the logos of the project from the database.

import { PROJECT_MAIN_COVER_COMPANY_LOGO_ALT_TEXT, PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL, PROJECT_MAIN_COVER_OWN_LOGO_ALT_TEXT } from "./data/projectMainCoverLogosData";

const ProjectMainCoverLogos = () => {
   return (
      <div className="main-cover__logos" aria-label={PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL}>
         <div className="main-cover__company-logo">
            <img src="" alt={PROJECT_MAIN_COVER_COMPANY_LOGO_ALT_TEXT} />
         </div>
         <div className="main-cover__own-logo">
            <img src="" alt={PROJECT_MAIN_COVER_OWN_LOGO_ALT_TEXT} />
         </div>
      </div>
   );
};

export default ProjectMainCoverLogos;
