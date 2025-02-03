import ContactFormTitle from "./components/contact-form-title/ContactFormTitle";
import ContactFormSelector from "./components/contact-form-selector/ContactFormSelector";
import ContactFormActualForm from "./components/contact-form-actual-form/ContactFormActualForm";
import { CONTACT_FORM_ARIA_LABEL } from "./data/contactFormData";

const ContactForm = () => {
   return (
      <div className="project__contact-form" aria-label={CONTACT_FORM_ARIA_LABEL}>
         <ContactFormTitle />
         <ContactFormSelector />
         <ContactFormActualForm />
      </div>
   );
};

export default ContactForm;
