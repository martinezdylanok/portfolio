import ContactFormTitle from "./components/contact-form-title/ContactFormTitle";
import ContactFormSelector from "./components/contact-form-selector/ContactFormSelector";
import ContactFormActualForm from "./components/contact-form-actual-form/ContactFormActualForm";

const ContactForm = () => {
   return (
      <div className="project__contact-form" aria-label="Contact form container">
         <ContactFormTitle />
         <ContactFormSelector />
         <ContactFormActualForm />
      </div>
   );
};

export default ContactForm;
