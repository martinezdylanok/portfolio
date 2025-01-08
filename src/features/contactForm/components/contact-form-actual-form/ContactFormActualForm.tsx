const ContactFormActualForm = () => {
   return (
      <form className="contact-form__actual-form" aria-label="Contact form">
         <div className="actual-form__input-field">
            <label htmlFor="name"></label>
            <input type="text" placeholder="NAME" id="name" required />
         </div>
         <div className="actual-form__input-field">
            <label htmlFor="phone"></label>
            <input type="tel" placeholder="PHONE NUMBER" id="phone" required />
         </div>
         <div className="actual-form__input-field">
            <label htmlFor="email"></label>
            <input type="email" placeholder="EMAIL" id="email" required />
         </div>
         <div className="actual-form__input-field">
            <label htmlFor="message"></label>
            <textarea placeholder="MESSAGE" id="message" />
         </div>
         <button type="submit">SEND</button>
      </form>
   );
};

export default ContactFormActualForm;
