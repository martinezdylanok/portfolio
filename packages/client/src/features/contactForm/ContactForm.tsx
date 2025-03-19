import { useState } from "react";
import ContactFormTitle from "./components/contact-form-title/ContactFormTitle";
import ContactFormSelector from "./components/contact-form-selector/ContactFormSelector";
import ContactFormActualForm from "./components/contact-form-actual-form/ContactFormActualForm";
import { CONTACT_FORM_ARIA_LABEL, ActiveState } from "./data/contactFormData";

const ContactForm = () => {
   const [active, setActive] = useState<ActiveState>("first");

   const handleActiveStateChange = (newActiveState: ActiveState) => {
      setActive(newActiveState);
   };

   return (
      <div data-direction={`${active === "first" ? "left" : "right"}`} className={`relative project__contact-form`} aria-label={CONTACT_FORM_ARIA_LABEL}>
         <ContactFormTitle />
         <ContactFormSelector activeState={{ active }} activeStateChange={{ handleActiveStateChange }} />
         <ContactFormActualForm activeState={{ active }} />
      </div>
   );
};

export default ContactForm;
