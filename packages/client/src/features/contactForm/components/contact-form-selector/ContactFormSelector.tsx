import { CONTACT_FORM_SELECTOR_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL, CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_TEXT, CONTACT_FORM_SELECTOR_SECOND_TEXT, colors, ContactFormSelectorProps } from "./data/contactFormSelectorData";
import { useThemeContext } from "../../../../utils/hooks/useTheme";
import "./styles/contact-form-selector-styles.css";

const ContactFormSelector = ({ activeForm, handleActiveFormUpdate }: ContactFormSelectorProps) => {
   const { mode } = useThemeContext();

   const colorScheme = colors[mode];

   return (
      <div data-tabs-headline className={`relative grid grid-cols-2 m-5 mb-0 z-1 cursor-pointer ${mode === "light" ? "light" : "dark"} contact-form__selector`} aria-label={CONTACT_FORM_SELECTOR_ARIA_LABEL}>
         <button className={`flex transition-all cursor-pointer duration-500 ease-in-out contact-form__selector-first`} aria-label={CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL} aria-disabled={activeForm === "firstForm" ? "false" : "true"} onClick={() => handleActiveFormUpdate("firstForm")}>
            <h2 data-is-active={`${activeForm === "firstForm"}`} className={`text-4xl p-10 w-full text-left font-bold transition-all duration-500 ease-in-out ${colorScheme.text}`}>
               {CONTACT_FORM_SELECTOR_FIRST_TEXT}
            </h2>
         </button>
         <button className={`flex transition-all cursor-pointer duration-500 ease-in-out contact-form__selector-second`} aria-label={CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL} aria-disabled={activeForm === "secondForm" ? "false" : "true"} onClick={() => handleActiveFormUpdate("secondForm")}>
            <h2 data-is-active={`${activeForm === "secondForm"}`} className={`text-4xl p-10 w-full text-left font-bold transition-all duration-500 ease-in-out ${colorScheme.text} `}>
               {CONTACT_FORM_SELECTOR_SECOND_TEXT}
            </h2>
         </button>
      </div>
   );
};

export default ContactFormSelector;
