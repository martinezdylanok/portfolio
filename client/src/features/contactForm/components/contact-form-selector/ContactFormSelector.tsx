// TODO: Add :before for each h2 element to add a radio button

import { CONTACT_FORM_SELECTOR_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL, CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_TEXT, CONTACT_FORM_SELECTOR_SECOND_TEXT } from "./data/contactFormSelectorData";

const ContactFormSelector = () => {
   return (
      <div className="contact-form__selector" aria-label={CONTACT_FORM_SELECTOR_ARIA_LABEL}>
         <div className="contact-form__selector-first" aria-label={CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL}>
            <h2>{CONTACT_FORM_SELECTOR_FIRST_TEXT}</h2>
         </div>
         <div className="contact-form__selector-second" aria-label={CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL}>
            <h2>{CONTACT_FORM_SELECTOR_SECOND_TEXT}</h2>
         </div>
      </div>
   );
};

export default ContactFormSelector;
