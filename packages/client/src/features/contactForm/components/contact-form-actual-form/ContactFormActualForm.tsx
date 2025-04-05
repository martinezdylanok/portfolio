import "./styles/contact-form-actual-form-styles.css";
import { useThemeContext } from "../../../../utils/hooks/useTheme";
import type { ContactFormActualFormProps } from "./data/contactFormActualFormData";
import { CONTACT_FORM_ACTUAL_FORM_WRAPPER_ARIA_LABEL } from "./data/contactFormActualFormData";
import ContactFormDefault from "./components/contact-form-default/ContactFormDefault";
import ContactFormJob from "./components/contact-form-job/ContactFormJob";

const ContactFormActualForm = ({ activeForm }: ContactFormActualFormProps) => {
   const { mode } = useThemeContext();

   return (
      <div className={`m-5 mt-0 ${mode === "light" ? "light" : "dark"} contact-form__actual-form-wrapper`} aria-label={CONTACT_FORM_ACTUAL_FORM_WRAPPER_ARIA_LABEL}>
         <ContactFormDefault activeForm={activeForm} />
         <ContactFormJob activeForm={activeForm} />
      </div>
   );
};

export default ContactFormActualForm;
