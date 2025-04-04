import { useThemeContext } from "../../../../../../utils/hooks/useTheme";
import { useForm, SubmitHandler } from "react-hook-form";
import { CONTACT_FORM_DEFAULT_FORM_ARIA_LABEL, CONTACT_FORM_DEFAULT_FORM_H3_TEXT, CONTACT_FORM_DEFAULT_FORM_NAME_PLACEHOLDER, CONTACT_FORM_DEFAULT_FORM_PHONE_PLACEHOLDER, CONTACT_FORM_DEFAULT_FORM_EMAIL_PLACEHOLDER, CONTACT_FORM_DEFAULT_FORM_MESSAGE_PLACEHOLDER, CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_TEXT } from "./data/contactFormDefaultData";
import type { ContactFormDefaultFormProps, formFields } from "./data/contactFormDefaultData";

const ContactFormDefault = ({ activeForm }: ContactFormDefaultFormProps) => {
   const { mode } = useThemeContext();

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
      <div className={`contact-form__actual-form-${activeForm === "firstForm" ? "active" : "inactive"}`} aria-disabled={activeForm === "firstForm" ? "false" : "true"} aria-label={CONTACT_FORM_DEFAULT_FORM_ARIA_LABEL}>
         <h3 className={`pl-10 pt-10 text-2xl font-bold whitespace-pre-line text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`}>{CONTACT_FORM_DEFAULT_FORM_H3_TEXT}</h3>
         <form className="contact-form__actual-form-form" data-testid="form" noValidate action="/form-sent" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-[11.5rem] pb-20 grid grid-cols-2 gap-y-15">
               <div className={`relative ml-10 mr-10 contact-form__actual-form-input-field`}>
                  <label htmlFor="name"></label>
                  <input
                     className={`text-2xl w-full transition-all duration-500 pb-[0.188rem] font-bold ${errors.name ? "hasErrors" : "isValid"} ${mode === "light" ? "light" : "dark"}`}
                     {...register("name", {
                        required: "Name is required",
                        validate: {
                           onlyValidNameChars: (value) => /^[a-zA-Z\s'-]+$/.test(value) || "Name must contain only letters, spaces, hyphens and apostrophes",
                           minLength: (value) => value.length >= 2 || "Name must be at least 2 characters long",
                           maxLength: (value) => value.length <= 50 || "Name has a maximum of 50 characters",
                        },
                     })}
                     type="text"
                     placeholder={CONTACT_FORM_DEFAULT_FORM_NAME_PLACEHOLDER}
                     aria-describedby="name-error-message"
                     aria-invalid={`${errors.name ? "true" : "false"}`}
                     id="name"
                  />
                  {errors.name && (
                     <>
                        <span id="name-error-message" className="absolute top-10 left-0 text-red-500">
                           {errors.name.message}
                        </span>
                        <img src="/error_icon.svg" alt="Name error icon" className="absolute top-0 left-full"></img>
                     </>
                  )}
                  {!errors.name && touchedFields.name && (
                     <>
                        <img src={mode === "light" ? "/success_icon_dark_mode.svg" : "/success_icon_light_mode.svg"} className="absolute top-0 left-full" alt="Name success icon" />
                     </>
                  )}
               </div>
               <div className={`relative ml-10 mr-10 contact-form__actual-form-input-field`}>
                  <label htmlFor="phone"></label>
                  <input
                     className={`text-2xl w-full transition-all duration-500 pb-[0.188rem] font-bold ${errors.phone ? "hasErrors" : "isValid"} ${mode === "light" ? "light" : "dark"}`}
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
                     placeholder={CONTACT_FORM_DEFAULT_FORM_PHONE_PLACEHOLDER}
                     aria-describedby="phone-error-message"
                     aria-invalid={`${errors.phone ? "true" : "false"}`}
                     id="phone"
                  />
                  {errors.phone && (
                     <>
                        <span id="phone-error-message" className="absolute top-10 left-0 text-red-500">
                           {errors.phone.message}
                        </span>
                        <img src="/error_icon.svg" alt="Phone error icon" className="absolute top-0 left-full"></img>
                     </>
                  )}
                  {!errors.phone && touchedFields.phone && (
                     <>
                        <img src={mode === "light" ? "/success_icon_dark_mode.svg" : "/success_icon_light_mode.svg"} className="absolute top-0 left-full" alt="Phone success icon" />
                     </>
                  )}
               </div>
               <div className={`relative ml-10 mr-10 contact-form__actual-form-input-field`}>
                  <label htmlFor="email"></label>
                  <input
                     className={`text-2xl w-full transition-all duration-500 pb-[0.188rem] font-bold ${errors.email ? "hasErrors" : "isValid"} ${mode === "light" ? "light" : "dark"}`}
                     {...register("email", {
                        required: "Email is required",
                        validate: {
                           format: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || `Enter a valid email address format. Example: user@example.es`,
                        },
                     })}
                     type="email"
                     placeholder={CONTACT_FORM_DEFAULT_FORM_EMAIL_PLACEHOLDER}
                     aria-describedby="email-error-message"
                     aria-invalid={`${errors.email ? "true" : "false"}`}
                     id="email"
                  />
                  {errors.email && (
                     <>
                        <span id="email-error-message" className="absolute top-10 left-0 text-red-500">
                           {errors.email.message}
                        </span>
                        <img src="/error_icon.svg" alt="Email error icon" className="absolute top-0 left-full"></img>
                     </>
                  )}
                  {!errors.email && touchedFields.email && (
                     <>
                        <img src={mode === "light" ? "/success_icon_dark_mode.svg" : "/success_icon_light_mode.svg"} className="absolute top-0 left-full" alt="Email success icon" />
                     </>
                  )}
               </div>
               <div className={`ml-10 mr-10 contact-form__actual-form-input-field`}>
                  <label htmlFor="message"></label>
                  <textarea className={`text-2xl w-full transition-all duration-500 resize-none max-h-9 font-bold ${mode === "light" ? "light" : "dark"}`} placeholder={CONTACT_FORM_DEFAULT_FORM_MESSAGE_PLACEHOLDER} id="message" name="user_message" />
               </div>
            </div>
            <div className="flex justify-center pb-10 contact-form__actual-form-send-button">
               <button className={`text-2xl font-bold w-1/5 p-2.5 border-0 cursor-pointer rounded-full hover:w-1/4 ${mode === "light" ? "light" : "dark"}`} type="submit">
                  {CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_TEXT}
               </button>
            </div>
         </form>
      </div>
   );
};

export default ContactFormDefault;
