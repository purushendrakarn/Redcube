import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // to store success/error messages

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7smgipk",     // your EmailJS Service ID
        "template_l94agun",   // your EmailJS Template ID
        formRef.current,
        "EIE2rgcZhy74Y81xw"   // your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          formRef.current.reset(); // clear form after sending
        },
        (error) => {
          console.error(error);
          setStatus("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-20">
      <h2 className="text-3xl font-semibold text-center mb-12">Get in Touch</h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="user_name"   // must match template variable
          placeholder="Your Name"
          required
          className="p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none"
        />
        <input
          type="email"
          name="user_email"  // must match template variable
          placeholder="Your Email"
          required
          className="p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none"
        />
        <textarea
          name="message"     // must match template variable
          placeholder="Your Message"
          rows="5"
          required
          className="p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-400 text-black py-3 rounded-full font-semibold hover:bg-orange-300"
        >
          Send Message
        </button>
      </form>

      {/* Show status message */}
      {status && (
        <p className="text-center mt-6 text-lg font-medium text-green-400">
          {status}
        </p>
      )}
    </section>
  );
};

export default Contact;
