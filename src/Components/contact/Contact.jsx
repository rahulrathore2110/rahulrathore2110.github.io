import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
 const sendEmail = (e) => {
   e.preventDefault();

   emailjs
     .sendForm(
       "service_qc9qk8a",
       "template_kz58t09",
       form.current,
       "I8ylZOmVxdhVR0bnp"
     )
     .then(
       (result) => {
         console.log(result.text);
       },
       (error) => {
         console.log(error.text);
       }
   );
   alert("Thank you for showing intrest")
   e.target.reset()
 };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <div className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>rahulg27727@gmail.com</h5>
            <a href="mailto:rahulg27727@gmail.com" target="blank">
              Send a message
            </a>
          </div>

          <div className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Linkdein</h4>
            <h5>rahulg27727@gmail.com</h5>
            <a
              href="https://www.linkedin.com/in/rahul-rathore-075a831a0/"
              target="blank"
            >
              Send a message
            </a>
          </div>

          <div className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-7217853572</h5>
            <a
              href="https://api.whatsapp.com/send?phone=7217853572"
              target="blank"
            >
              Send a message
            </a>
          </div>
        </div>

        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
