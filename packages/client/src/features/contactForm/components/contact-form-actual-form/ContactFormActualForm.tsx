import { CONTACT_FORM_ACTUAL_FORM_ARIA_LABEL, CONTACT_FORM_ACTUAL_FORM_EMAIL_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_MESSAGE_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_NAME_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_PHONE_PLACEHOLDER, CONTACT_FORM_ACTUAL_FORM_SEND_BUTTON_TEXT } from "./data/contactFormActualFormData";

const ContactFormActualForm = () => {
   return (
      <form className="contact-form__actual-form" aria-label={CONTACT_FORM_ACTUAL_FORM_ARIA_LABEL}>
         <div className="contact-form__actual-form-input-field">
            <label htmlFor="name"></label>
            <input type="text" placeholder={CONTACT_FORM_ACTUAL_FORM_NAME_PLACEHOLDER} id="name" required />
         </div>
         <div className="contact-form__actual-form-input-field">
            <label htmlFor="phone"></label>
            <input type="tel" placeholder={CONTACT_FORM_ACTUAL_FORM_PHONE_PLACEHOLDER} id="phone" required />
         </div>
         <div className="contact-form__actual-form-input-field">
            <label htmlFor="email"></label>
            <input type="email" placeholder={CONTACT_FORM_ACTUAL_FORM_EMAIL_PLACEHOLDER} id="email" required />
         </div>
         <div className="contact-form__actual-form-input-field">
            <label htmlFor="message"></label>
            <textarea placeholder={CONTACT_FORM_ACTUAL_FORM_MESSAGE_PLACEHOLDER} id="message" />
         </div>
         <button type="submit">{CONTACT_FORM_ACTUAL_FORM_SEND_BUTTON_TEXT}</button>
      </form>
   );
};

export default ContactFormActualForm;
