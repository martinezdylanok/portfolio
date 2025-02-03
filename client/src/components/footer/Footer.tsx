import FooterCallToAction from "./components/footer-call-to-action/FooterCallToAction";
import FooterContent from "./components/footer-content/FooterContent";
import FooterScrollUp from "./components/footer-scroll-up/FooterScrollUp";

const Footer = () => {
   return (
      <footer>
         <FooterContent />
         <FooterCallToAction />
         <FooterScrollUp />
      </footer>
   );
};

export default Footer;
