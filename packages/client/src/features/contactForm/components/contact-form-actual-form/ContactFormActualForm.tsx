import { CONTACT_FORM_ACTUAL_FORM_ARIA_LABEL, CONTACT_FORM_ACTUAL_FORM_EMAIL_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_MESSAGE_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_NAME_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_PHONE_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_SEND_BUTTON_TEXT, CONTACT_FORM_ACTUAL_FORM_JOB_OFFER_TEXT, ContactFormActualFormProps, colors } from "./data/contactFormActualFormData";
import "./styles/contact-form-actual-form-styles.css";
import { useThemeContext } from "../../../../utils/hooks/useTheme";

// TODO: Split the two divs into separate components with each form.
const ContactFormActualForm = ({ activeState }: ContactFormActualFormProps) => {
   const { mode } = useThemeContext();

   const colorScheme = colors[mode];

   return (
      <div className={`m-5 mt-0 ${mode === "light" ? "light" : "dark"} contact-form__actual-form-wrapper`}>
         <div className="relative contact-form__actual-forms-container">
            <div className={`contact-form__actual-form-${activeState.active === "first" ? "active" : "inactive"}`}>
               <form className="contact-form__actual-form-form" aria-label={CONTACT_FORM_ACTUAL_FORM_ARIA_LABEL}>
                  <div className="pt-20 pb-20 grid grid-cols-2 gap-y-10">
                     <div className={`ml-10 mr-10 contact-form__actual-form-input-field`}>
                        <label htmlFor="name"></label>
                        <input className={`text-2xl w-full transition-all duration-500 pb-[0.188rem] font-bold ${mode === "light" ? "light" : "dark"}`} type="text" placeholder={CONTACT_FORM_ACTUAL_FORM_NAME_PLACEHOLDER} id="name" required />
                     </div>
                     <div className={`ml-10 mr-10 contact-form__actual-form-input-field`}>
                        <label htmlFor="phone"></label>
                        <input className={`text-2xl w-full transition-all duration-500 pb-[0.188rem] font-bold ${mode === "light" ? "light" : "dark"}`} type="tel" placeholder={CONTACT_FORM_ACTUAL_FORM_PHONE_PLACEHOLDER} id="phone" required />
                     </div>
                     <div className={`ml-10 mr-10 contact-form__actual-form-input-field`}>
                        <label htmlFor="email"></label>
                        <input className={`text-2xl w-full transition-all duration-500 pb-[0.188rem] font-bold ${mode === "light" ? "light" : "dark"}`} type="email" placeholder={CONTACT_FORM_ACTUAL_FORM_EMAIL_PLACEHOLDER} id="email" required />
                     </div>
                     <div className={`ml-10 mr-10 contact-form__actual-form-input-field`}>
                        <label htmlFor="message"></label>
                        <textarea className={`text-2xl w-full transition-all duration-500 resize-none max-h-9 font-bold ${mode === "light" ? "light" : "dark"}`} placeholder={CONTACT_FORM_ACTUAL_FORM_MESSAGE_PLACEHOLDER} id="message" />
                     </div>
                  </div>
                  <div className="flex justify-center pb-10 contact-form__actual-form-send-button">
                     <button className={`text-2xl font-bold w-1/5 p-2.5 border-0 cursor-pointer rounded-full hover:w-1/4 ${mode === "light" ? "light" : "dark"}`} type="submit">
                        {CONTACT_FORM_ACTUAL_FORM_SEND_BUTTON_TEXT}
                     </button>
                  </div>
               </form>
            </div>
            <div className={`contact-form__actual-form-${activeState.active === "second" ? "active" : "inactive"}`}>
               <h3 className={`pl-10 pt-10 text-2xl font-bold whitespace-pre-line ${colorScheme.text}`}>{CONTACT_FORM_ACTUAL_FORM_JOB_OFFER_TEXT}</h3>
               <form className="contact-form__actual-form-form" aria-label={CONTACT_FORM_ACTUAL_FORM_ARIA_LABEL}>
                  <div className="pt-20 pb-20 grid grid-cols-2 gap-y-10 contact-form__actual-form-input-fields">
                     <div className={`ml-10 mr-10 contact-form__actual-form-input-field`}>
                        <label htmlFor="name"></label>
                        <input className={`text-2xl w-full transition-all duration-500 pb-[0.188rem] font-bold ${mode === "light" ? "light" : "dark"}`} type="text" placeholder={CONTACT_FORM_ACTUAL_FORM_NAME_PLACEHOLDER} id="name" required />
                     </div>
                     <div className={`ml-10 mr-10 contact-form__actual-form-input-field`}>
                        <label htmlFor="phone"></label>
                        <input className={`text-2xl w-full transition-all duration-500 pb-[0.188rem] font-bold ${mode === "light" ? "light" : "dark"}`} type="tel" placeholder={CONTACT_FORM_ACTUAL_FORM_PHONE_PLACEHOLDER} id="phone" required />
                     </div>
                     <div className={`ml-10 mr-10 contact-form__actual-form-input-field`}>
                        <label htmlFor="email"></label>
                        <input className={`text-2xl w-full transition-all duration-500 pb-[0.188rem] font-bold ${mode === "light" ? "light" : "dark"}`} type="email" placeholder={CONTACT_FORM_ACTUAL_FORM_EMAIL_PLACEHOLDER} id="email" required />
                     </div>
                     <div className={`ml-10 mr-10 contact-form__actual-form-input-field`}>
                        <label htmlFor="message"></label>
                        <textarea className={`text-2xl w-full transition-all duration-500 resize-none max-h-9 font-bold ${mode === "light" ? "light" : "dark"}`} placeholder={CONTACT_FORM_ACTUAL_FORM_MESSAGE_PLACEHOLDER} id="message" />
                     </div>
                  </div>
                  <div className="flex justify-center pb-10 contact-form__actual-form-send-button">
                     <button className={`text-2xl font-bold w-1/5 p-2.5 border-0 cursor-pointer rounded-full hover:w-1/4 ${mode === "light" ? "light" : "dark"}`} type="submit">
                        {CONTACT_FORM_ACTUAL_FORM_SEND_BUTTON_TEXT}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ContactFormActualForm;
