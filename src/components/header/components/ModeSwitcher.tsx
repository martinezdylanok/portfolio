import { MODE_SWITCHER_ALT } from "../data/constants";

const ModeSwitcher = () => {
   return (
      <button className="header-switcher" aria-label={`${MODE_SWITCHER_ALT} button`}>
         <img src="" alt={`${MODE_SWITCHER_ALT} of the website`} />
      </button>
   );
};

export default ModeSwitcher;
