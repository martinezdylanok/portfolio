const COMPANY_NAME = "MacroHard";
const PRODUCT_NAME = "Doors";
const PRODUCT_VERSION = "xd";
const OS_LOGO_ALT = "OS logo";
const COPYRIGHT_STATEMENT = "Copyright MacroHard Corporation";

const BootingScreen = () => {
   return (
      <div className="booting-screen" role="status" aria-label="Booting Screen">
         <div className="booting-screen__logo">
            <div className="booting-screen__logo-text">
               <span className="booting-screen__company-name">{COMPANY_NAME}&reg;</span>
               <img src="" alt={OS_LOGO_ALT} />
               <div className="booting-screen__product-name">
                  <span className="booting-screen__product-name-text">{PRODUCT_NAME}&reg;</span>
                  <span className="booting-screen__version">{PRODUCT_VERSION}</span>
               </div>
            </div>
         </div>
         <div className="booting-screen__loading">
            <div className="booting-screen__loading-bar" role="progressbar" aria-label="Loading bar">
               <div className="booting-screen__inner-bar"></div>
               <div className="booting-screen__progress-bar"></div>
            </div>
         </div>
         <div className="booting-screen__copyright-container">
            <span className="booting-screen__copyright-statement">{COPYRIGHT_STATEMENT}</span>
            <span className="booting-screen__copyright-company">{COMPANY_NAME}</span>
         </div>
      </div>
   );
};

export default BootingScreen;
