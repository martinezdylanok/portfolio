import { CONTACT_FORM_SELECTOR_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_TEXT, CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL, CONTACT_FORM_SELECTOR_SECOND_TEXT, ContactFormSelectorProps } from "./data/contactFormSelectorData";
import "./styles/contact-form-selector-styles.css";

const ContactFormSelector = ({ activeForm, handleActiveFormUpdate }: ContactFormSelectorProps) => {
   return (
      <div data-tabs-headline className="contact-form__selector relative grid grid-cols-2 z-1 cursor-pointer" aria-label={CONTACT_FORM_SELECTOR_ARIA_LABEL}>
         <button className="contact-form__selector-first flex transition-all cursor-pointer duration-500 ease-in-out" aria-label={CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL} aria-disabled={activeForm === "firstForm" ? "false" : "true"} onClick={() => handleActiveFormUpdate("firstForm")}>
            <h2 data-is-active={`${activeForm === "firstForm"}`} className="contact-form__selector-first-text font-hanken-grotesk text-4xl p-12 text-left font-bold transition-all duration-500 ease-in-out text-heading">
               {CONTACT_FORM_SELECTOR_FIRST_TEXT}
            </h2>
         </button>
         <button className="contact-form__selector-second flex transition-all cursor-pointer duration-500 ease-in-out" aria-label={CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL} aria-disabled={activeForm === "secondForm" ? "false" : "true"} onClick={() => handleActiveFormUpdate("secondForm")}>
            <h2 data-is-active={`${activeForm === "secondForm"}`} className="contact-form__selector-second-text font-hanken-grotesk text-4xl p-12 text-left font-bold transition-all duration-500 ease-in-out text-heading">
               {CONTACT_FORM_SELECTOR_SECOND_TEXT}
            </h2>
         </button>
      </div>
   );
};

export default ContactFormSelector;
