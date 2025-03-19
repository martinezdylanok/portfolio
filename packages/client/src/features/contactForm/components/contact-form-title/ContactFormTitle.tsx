import { CONTACT_FORM_TITLE } from "./data/contactFormTitleData";
import { useThemeContext } from "../../../../utils/hooks/useTheme";

const ContactFormTitle = () => {
   const { mode } = useThemeContext();

   return <h2 className={`text-[5.938rem] p-5 ${mode === "light" ? "text-[#ABC4FF]" : "text-[#EDF2FB]"} contact-form__title`}>{CONTACT_FORM_TITLE}</h2>;
};

export default ContactFormTitle;
