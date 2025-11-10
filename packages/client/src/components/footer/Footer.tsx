import FooterContent from "./components/footer-content/FooterContent";
import { FOOTER_ARIA_LABEL } from "./data/footerData";

const Footer = () => {
   return (
      <footer className="footer bg-section" aria-label={FOOTER_ARIA_LABEL}>
         <FooterContent />
      </footer>
   );
};

export default Footer;
