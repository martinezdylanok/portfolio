const CONTACT_FORM_ACTUAL_FORM_CONTACT_ARIA_LABEL: string = "Contact form";
const CONTACT_FORM_ACTUAL_FORM_JOB_OFFER_ARIA_LABEL: string = "Job offer form";
const CONTACT_FORM_ACTUAL_FORM_NAME_PLACEHOLDER: string = "NAME";
const CONTACT_FORM_ACTUAL_FORM_PHONE_PLACEHOLDER: string = "PHONE NUMBER";
const CONTACT_FORM_ACTUAL_FORM_EMAIL_PLACEHOLDER: string = "EMAIL";
const CONTACT_FORM_ACTUAL_FORM_MESSAGE_PLACEHOLDER: string = "MESSAGE";
const CONTACT_FORM_ACTUAL_FORM_SEND_BUTTON_TEXT: string = "SEND";
const CONTACT_FORM_ACTUAL_FORM_JOB_OFFER_TEXT: string = "IF YOU FIND MY WORK INTERESTING, \nWE CAN HAVE A TALK ABOUT HOW I CAN HELP YOU.";

const colors = {
   light: {
      text: "text-[#ABC4FF]",
   },
   dark: {
      text: "text-[#EDF2FB]",
   },
};

export interface ContactFormActualFormProps {
   activeState: { active: "first" | "second" };
}

export { CONTACT_FORM_ACTUAL_FORM_CONTACT_ARIA_LABEL, CONTACT_FORM_ACTUAL_FORM_JOB_OFFER_ARIA_LABEL, CONTACT_FORM_ACTUAL_FORM_NAME_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_PHONE_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_EMAIL_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_MESSAGE_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_SEND_BUTTON_TEXT, CONTACT_FORM_ACTUAL_FORM_JOB_OFFER_TEXT, colors };
