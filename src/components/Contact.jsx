import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // to store success/error messages

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7smgipk",     // ✅ your EmailJS Service ID
        "template_l94agun",   // ✅ your EmailJS Template ID
        formRef.current,
        "EIE2rgcZhy74Y81xw"   // ✅ your EmailJS Public Key
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
    <section
      id="contact"
      className="py-20 px-6 lg:px-20"
      aria-labelledby="contact-heading"
    >
      {/* SEO-friendly heading with Red gradient */}
      <h1
        id="contact-heading"
        className="text-4xl font-bold text-center mb-6"
      >
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
          Redcube Agency
        </span>
      </h1>

      {/* Supporting SEO text */}
      <p className="text-center max-w-2xl mx-auto text-lg text-gray-300 mb-12">
        Get in touch with the{" "}
        <strong>Redcube Agency</strong> team for{" "}
        <em>software services, IT consulting, website development, and app solutions</em>.  
        Fill out the form below, and we’ll get back to you within 24 hours.
      </p>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <input
          id="name"
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none"
        />

        <input
          id="email"
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none"
        />

        <textarea
          id="message"
          name="message"
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

      {/* Status Message */}
      {status && (
        <p
          className={`text-center mt-6 text-lg font-medium ${
            status.includes("✅") ? "text-green-400" : "text-red-400"
          }`}
        >
          {status}
        </p>
      )}

      {/* Extra SEO Content */}
      <div className="max-w-3xl mx-auto mt-16 text-center text-gray-400">
        <h2 className="text-2xl font-semibold mb-4">
          Why Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            Redcube Agency
          </span>
          ?
        </h2>
        <p>
          We specialize in{" "}
          <strong>custom software development, website design, app solutions,</strong>{" "}
          and <strong>IT services</strong>. Whether you need a{" "}
          <em>business website, mobile application, or enterprise software</em>,  
          our expert team led by <strong>Purushendra Karn</strong> is here to help.
        </p>
      </div>
    </section>
  );
};

export default Contact;
