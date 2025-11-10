const CONTACT_FORM_SELECTOR_ARIA_LABEL: string = "Contact form selector";
const CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL: string = "Contact form first selector";
const CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL: string = "Contact form second selector";
const CONTACT_FORM_SELECTOR_FIRST_TEXT: string = "CONTACT";
const CONTACT_FORM_SELECTOR_SECOND_TEXT: string = "JOB OFFER";

export interface ContactFormSelectorProps {
   activeForm: "firstForm" | "secondForm";
   handleActiveFormUpdate: (newActiveForm: "firstForm" | "secondForm") => void;
}

export { CONTACT_FORM_SELECTOR_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_TEXT, CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL, CONTACT_FORM_SELECTOR_SECOND_TEXT };
