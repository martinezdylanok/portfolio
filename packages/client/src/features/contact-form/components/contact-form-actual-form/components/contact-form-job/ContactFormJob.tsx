import { SubmitHandler, useForm } from "react-hook-form";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import type { ContactFormJobFormProps, formFields } from "./data/contactFormJobData";
import { CONTACT_FORM_JOB_FORM_ARIA_LABEL, CONTACT_FORM_JOB_FORM_EMAIL_PLACEHOLDER, CONTACT_FORM_JOB_FORM_H3_TEXT, CONTACT_FORM_JOB_FORM_MESSAGE_PLACEHOLDER, CONTACT_FORM_JOB_FORM_NAME_PLACEHOLDER, CONTACT_FORM_JOB_FORM_PHONE_PLACEHOLDER, CONTACT_FORM_JOB_FORM_SEND_BUTTON_TEXT } from "./data/contactFormJobData";

const ContactFormJob = ({ activeForm }: ContactFormJobFormProps) => {
   const { theme } = useThemeContext();

   const {
      register,
      handleSubmit,
      formState: { errors, touchedFields },
   } = useForm<formFields>({
      mode: "onTouched",
   });

   const onSubmit: SubmitHandler<formFields> = (data) => console.log(data);

   // TODO: change elements classes for this component
   return (
      <div className={`contact-form__actual-form-job contact-form__actual-form-job--${activeForm === "secondForm" ? "active" : "inactive"}`} aria-disabled={activeForm === "secondForm" ? "false" : "true"} aria-label={CONTACT_FORM_JOB_FORM_ARIA_LABEL}>
         <h3 className="contact-form__actual-form-job-title pt-12 text-2xl font-hanken-grotesk font-bold whitespace-pre-line text-muted">{CONTACT_FORM_JOB_FORM_H3_TEXT}</h3>
         <form className="contact-form__actual-form-job-form" data-testid="form" noValidate action="/form-sent" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form__actual-form-job-fields my-24 grid grid-cols-2 gap-12">
               <div className="contact-form__actual-form-job-input-field relative">
                  <label htmlFor="name" className="contact-form__actual-form-job-label"></label>
                  <input
                     className={`contact-form__actual-form-job-input text-2xl w-full font-hanken-grotesk transition-all duration-500 font-bold ${errors.name ? "contact-form__actual-form-job-input--error" : "contact-form__actual-form-job-input--valid"}`}
                     {...register("name", {
                        required: "Name is required",
                        validate: {
                           onlyValidNameChars: (value) => /^[a-zA-Z\s'-]+$/.test(value) || "Name must contain only letters, spaces, hyphens and apostrophes",
                           minLength: (value) => value.length >= 2 || "Name must be at least 2 characters long",
                           maxLength: (value) => value.length <= 50 || "Name has a maximum of 50 characters",
                        },
                     })}
                     type="text"
                     placeholder={CONTACT_FORM_JOB_FORM_NAME_PLACEHOLDER}
                     aria-describedby="name-error-message"
                     aria-invalid={`${errors.name ? "true" : "false"}`}
                     id="name"
                  />
                  {errors.name && (
                     <>
                        <span id="name-error-message" className="contact-form__actual-form-job-error-message absolute top-10 left-0 text-red-500">
                           {errors.name.message}
                        </span>
                        <img src="/public/error_icon.svg" alt="Name error icon" className="contact-form__actual-form-job-error-icon absolute top-0 left-full"></img>
                     </>
                  )}
                  {!errors.name && touchedFields.name && (
                     <>
                        <img src={theme === "light" ? "/success_icon_dark_mode.svg" : "/success_icon_light_mode.svg"} className="contact-form__actual-form-job-success-icon absolute top-0 left-full" alt="Name success icon" />
                     </>
                  )}
               </div>
               <div className="contact-form__actual-form-job-input-field relative">
                  <label htmlFor="phone" className="contact-form__actual-form-job-label"></label>
                  <input
                     className={`contact-form__actual-form-job-input text-2xl font-hanken-grotesk w-full transition-all duration-500 font-bold ${errors.phone ? "contact-form__actual-form-job-input--error" : "contact-form__actual-form-job-input--valid"}`}
                     {...register("phone", {
                        required: "Phone number is required",
                        validate: {
                           format: (value) => /^[+\d\s]*$/.test(value) || `Phone number must contain only numbers, spaces, and "+" characters. Example: +23 3846 3823`,
                           /*TODO: ADD INTERNATIONAL VALID PHONE VALIDATION */
                           minLength: (value) => value.length >= 6 || "Phone number must be at least 6 characters long",
                           maxLength: (value) => value.length <= 25 || "Phone number has a maximum of 25 characters",
                        },
                     })}
                     type="tel"
                     placeholder={CONTACT_FORM_JOB_FORM_PHONE_PLACEHOLDER}
                     aria-describedby="phone-error-message"
                     aria-invalid={`${errors.phone ? "true" : "false"}`}
                     id="phone"
                  />
                  {errors.phone && (
                     <>
                        <span id="phone-error-message" className="contact-form__actual-form-job-error-message absolute top-10 left-0 text-red-500">
                           {errors.phone.message}
                        </span>
                        <img src="/public/error_icon.svg" alt="Phone error icon" className="contact-form__actual-form-job-error-icon absolute top-0 left-full"></img>
                     </>
                  )}
                  {!errors.phone && touchedFields.phone && (
                     <>
                        <img src={theme === "light" ? "/success_icon_dark_mode.svg" : "/success_icon_light_mode.svg"} className="contact-form__actual-form-job-success-icon absolute top-0 left-full" alt="Phone success icon" />
                     </>
                  )}
               </div>
               <div className="contact-form__actual-form-job-input-field relative">
                  <label htmlFor="email" className="contact-form__actual-form-job-label"></label>
                  <input
                     className={`contact-form__actual-form-job-input text-2xl font-hanken-grotesk w-full transition-all duration-500 font-bold ${errors.email ? "contact-form__actual-form-job-input--error" : "contact-form__actual-form-job-input--valid"}`}
                     {...register("email", {
                        required: "Email is required",
                        validate: {
                           format: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || `Enter a valid email address format. Example: user@example.es`,
                        },
                     })}
                     type="email"
                     placeholder={CONTACT_FORM_JOB_FORM_EMAIL_PLACEHOLDER}
                     aria-describedby="email-error-message"
                     aria-invalid={`${errors.email ? "true" : "false"}`}
                     id="email"
                  />
                  {errors.email && (
                     <>
                        <span id="email-error-message" className="contact-form__actual-form-job-error-message absolute top-10 left-0 text-red-500">
                           {errors.email.message}
                        </span>
                        <img src="/public/error_icon.svg" alt="Email error icon" className="contact-form__actual-form-job-error-icon absolute top-0 left-full"></img>
                     </>
                  )}
                  {!errors.email && touchedFields.email && (
                     <>
                        <img src={theme === "light" ? "/success_icon_dark_mode.svg" : "/success_icon_light_mode.svg"} className="contact-form__actual-form-job-success-icon absolute top-0 left-full" alt="Email success icon" />
                     </>
                  )}
               </div>
               <div className="contact-form__actual-form-job-input-field">
                  <label htmlFor="message" className="contact-form__actual-form-job-label"></label>
                  <textarea className="contact-form__actual-form-job-textarea text-2xl font-hanken-grotesk w-full transition-all duration-500 resize-none max-h-9 font-bold" placeholder={CONTACT_FORM_JOB_FORM_MESSAGE_PLACEHOLDER} id="message" name="user_message" />
               </div>
            </div>
            <div className="contact-form__actual-form-job-send-button flex justify-center pb-12">
               <button className="contact-form__actual-form-job-submit-button text-2xl font-bold w-1/5 p-2.5 border-0 cursor-pointer rounded-full hover:w-1/4" type="submit">
                  {CONTACT_FORM_JOB_FORM_SEND_BUTTON_TEXT}
               </button>
            </div>
         </form>
      </div>
   );
};

export default ContactFormJob;
