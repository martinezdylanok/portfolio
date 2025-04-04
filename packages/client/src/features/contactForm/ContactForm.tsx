import { useState } from "react";
import ContactFormTitle from "./components/contact-form-title/ContactFormTitle";
import ContactFormSelector from "./components/contact-form-selector/ContactFormSelector";
import ContactFormActualForm from "./components/contact-form-actual-form/ContactFormActualForm";
import { CONTACT_FORM_ARIA_LABEL, ActiveForm } from "./data/contactFormData";

const ContactForm = () => {
   const [activeForm, setActiveForm] = useState<ActiveForm>("firstForm");

   const handleActiveFormUpdate = (newActiveForm: ActiveForm) => {
      setActiveForm(newActiveForm);
   };

   return (
      <div data-direction={`${activeForm === "firstForm" ? "left" : "right"}`} className={`relative project__contact-form`} aria-label={CONTACT_FORM_ARIA_LABEL}>
         <ContactFormTitle />
         <ContactFormSelector activeForm={activeForm} handleActiveFormUpdate={handleActiveFormUpdate} />
         <ContactFormActualForm activeForm={activeForm} />
      </div>
   );
};

export default ContactForm;
