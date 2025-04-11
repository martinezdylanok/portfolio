import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import { PROJECT_MAIN_COVER_COMPANY_LOGO_ALT_TEXT, PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL, PROJECT_MAIN_COVER_OWN_LOGO_ALT_TEXT } from "./data/projectMainCoverLogosData";

const ProjectMainCoverLogos = () => {
   const { mode } = useThemeContext();

   // REFACTOR: Make these be in the tailwind config.
   const borderColorClass = mode === "light" ? "border-[#EDF2FB80]" : "border-[#ABC4FF80]";
   const bgColorClass = mode === "light" ? "bg-[#ABC4FF]" : "bg-[#EDF2FB]";

   // TODO: Add custom image depending on the project
   return (
      <div className="flex w-1/2 items-center justify-end relative main-cover__logos" aria-label={PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL}>
         <div className={`size-75 flex flex-col justify-center items-center overflow-hidden border border-solid ${borderColorClass} ${bgColorClass} rounded-[50%] z-1 relative left-20 main-cover__company-logo`}>
            <img className="h-[40%] w-[80%] object-contain" src="/project/dummy_logo_01.svg" alt={PROJECT_MAIN_COVER_COMPANY_LOGO_ALT_TEXT} />
         </div>
         <div className={`size-75 flex flex-col justify-center items-center overflow-hidden border border-solid ${borderColorClass} ${bgColorClass} rounded-[50%] main-cover__own-logo`}>
            <img className="h-[40%] w-[80%] object-contain" src="/project/dm_logo_dark_mode.svg" alt={PROJECT_MAIN_COVER_OWN_LOGO_ALT_TEXT} />
         </div>
      </div>
   );
};

export default ProjectMainCoverLogos;
