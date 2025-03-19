const CONTACT_FORM_SELECTOR_ARIA_LABEL: string = "Contact form selector";
const CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL: string = "Contact form first selector";
const CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL: string = "Contact form second selector";
const CONTACT_FORM_SELECTOR_FIRST_TEXT: string = "CONTACT";
const CONTACT_FORM_SELECTOR_SECOND_TEXT: string = "JOB OFFER";

const colors = {
   light: {
      text: "text-[#ABC4FF]",
   },
   dark: {
      text: "text-[#EDF2FB]",
   },
};

export interface ContactFormSelectorProps {
   activeState: { active: "first" | "second" };
   activeStateChange: { handleActiveStateChange: (newActiveState: "first" | "second") => void };
}

export { CONTACT_FORM_SELECTOR_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_ARIA_LABEL, CONTACT_FORM_SELECTOR_SECOND_ARIA_LABEL, CONTACT_FORM_SELECTOR_FIRST_TEXT, CONTACT_FORM_SELECTOR_SECOND_TEXT, colors };
