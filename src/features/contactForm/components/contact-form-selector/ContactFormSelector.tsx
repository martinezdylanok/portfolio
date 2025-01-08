// TODO: Add :before for each h2 element to add a radio button

const ContactFormSelector = () => {
   return (
      <div className="contact-form__selector" aria-label="Contact form selector">
         <div className="contact-form__selector-first" aria-label="Contact form first selector">
            <h2>CONTACT</h2>
         </div>
         <div className="contact-form__selector-second" aria-label="Contact form second selector">
            <h2>JOB OFFER</h2>
         </div>
      </div>
   );
};

export default ContactFormSelector;
