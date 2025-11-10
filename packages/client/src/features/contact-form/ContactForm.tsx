import { motion } from "framer-motion";
import ContactFormActualForm from "./components/contact-form-actual-form/ContactFormActualForm";
import ContactFormSelector from "./components/contact-form-selector/ContactFormSelector";
import ContactFormTitle from "./components/contact-form-title/ContactFormTitle";
import { CONTACT_FORM_ARIA_LABEL } from "./data/contactFormData";
import { getContactFormDirection } from "./utils/getContactFormDirection";
import { useContactFormAnimations } from "./utils/useContactFormAnimations";
import { useContactFormState } from "./utils/useContactFormState";

const ContactForm = () => {
   const { activeForm, handleActiveFormUpdate } = useContactFormState();
   const { initial, whileInView, transition, viewport } = useContactFormAnimations();

   return (
      <motion.div id="contact" initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} data-direction={getContactFormDirection(activeForm)} className="contact-form relative min-h-screen min-w-screen bg-section py-25 px-6" aria-label={CONTACT_FORM_ARIA_LABEL}>
         <ContactFormTitle />
         <ContactFormSelector activeForm={activeForm} handleActiveFormUpdate={handleActiveFormUpdate} />
         <ContactFormActualForm activeForm={activeForm} />
      </motion.div>
   );
};

export default ContactForm;
