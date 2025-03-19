// TODO: Add :before for each h2 element to add a radio button
import { CONTACT_FORM_SELECTOR_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL, CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_TEXT, CONTACT_FORM_SELECTOR_SECOND_TEXT, colors, ContactFormSelectorProps } from "./data/contactFormSelectorData";
import { useThemeContext } from "../../../../utils/hooks/useTheme";
import "./styles/contact-form-selector-styles.css";

const ContactFormSelector = ({ activeState, activeStateChange }: ContactFormSelectorProps) => {
   const { mode } = useThemeContext();

   const colorScheme = colors[mode];

   return (
      <div data-tabs-headline className={`relative grid grid-cols-2 m-5 mb-0 z-1 cursor-pointer ${mode === "light" ? "light" : "dark"} contact-form__selector`} aria-label={CONTACT_FORM_SELECTOR_ARIA_LABEL}>
         <button className={`flex transition-all cursor-pointer duration-500 ease-in-out contact-form__selector-first`} aria-label={CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL} onClick={() => activeStateChange.handleActiveStateChange("first")}>
            <span data-is-active={`${activeState.active === "first"}`} className={`text-4xl m-10 font-bold transition-all duration-500 ease-in-out ${colorScheme.text}`}>
               {CONTACT_FORM_SELECTOR_FIRST_TEXT}
            </span>
         </button>
         <button className={`flex transition-all cursor-pointer duration-500 ease-in-out contact-form__selector-second`} aria-label={CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL} onClick={() => activeStateChange.handleActiveStateChange("second")}>
            <span data-is-active={`${activeState.active === "second"}`} className={`text-4xl m-10 font-bold transition-all duration-500 ease-in-out ${colorScheme.text} `}>
               {CONTACT_FORM_SELECTOR_SECOND_TEXT}
            </span>
         </button>
      </div>
   );
};

export default ContactFormSelector;
