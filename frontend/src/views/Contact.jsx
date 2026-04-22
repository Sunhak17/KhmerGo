import React from "react";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaPlus,
} from "react-icons/fa";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import faqVisual from "../assets/images/slider/4.jpg";
import "../styles/pages/Contact.css";

const faqItems = [
  {
    id: 1,
    question: "How can I benefit from your startup?",
    answer:
      "We build travel plans around your pace, budget, and interests, then connect you with trusted local services.",
  },
  {
    id: 2,
    question: "How can I get in touch with customer support?",
    answer:
      "You can send a message through this page, email support@khmergo.com, or call our hotline during business hours.",
  },
  {
    id: 3,
    question: "How do you ensure data security and privacy?",
    answer:
      "We use secure storage, role-based access, and encrypted requests to protect your personal and booking information.",
  },
  {
    id: 4,
    question: "How do I get started with your offerings?",
    answer:
      "Start by sharing your travel plan in the form above. Our team will reply with package options and next steps.",
  },
];

export default function Contact() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <section className="contact-page">
        <div className="container contact-shell">
          <header className="contact-heading">
            <h1>Connect with Our Team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor.
            </p>
          </header>

          <div className="contact-grid">
            <article className="contact-form-card">
              <h2>Get in Touch with Us</h2>
              <form onSubmit={(event) => event.preventDefault()}>
                <div className="contact-inline-fields">
                  <input type="text" placeholder="Input your name" aria-label="Name" />
                  <input type="email" placeholder="Input your email" aria-label="Email" />
                </div>
                <input type="text" placeholder="Subject" aria-label="Subject" />
                <textarea rows="6" placeholder="Input your message request" aria-label="Message" />
                <button type="submit">Send message</button>
              </form>
            </article>

            <article className="contact-details-card">
              <h2>Contact Details</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit. Integer feugiat velit et turpis tristique, sit amet
                varius ipsum.
              </p>

              <div className="contact-detail-grid">
                <div className="contact-detail-item">
                  <span><FaMapMarkerAlt /></span>
                  <div>
                    <h3>Address</h3>
                    <p>Raja Koha No. 121</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span><FaMobileAlt /></span>
                  <div>
                    <h3>Mobile</h3>
                    <p>+1 (309) 785 945</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span><FaClock /></span>
                  <div>
                    <h3>Availability</h3>
                    <p>Daily 9 AM - 05 PM</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span><FaEnvelope /></span>
                  <div>
                    <h3>Email</h3>
                    <p>admin@support.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-social-inline">
                <h3>Social Media:</h3>
                <div>
                  <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
                  <a href="#" aria-label="YouTube"><FaYoutube /></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-faq-section">
        <div className="container contact-faq-shell">
          <header className="contact-heading contact-heading--faq">
            <h2>Your Common Queries Answered with Additional FAQs</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut purus sit amet luctus venenatis, lectus magna
              fringilla urna lorem.
            </p>
          </header>

          <div className="faq-grid">
            <div className="faq-list">
              {faqItems.map((faq) => (
                <details key={faq.id} open={faq.id === 2}>
                  <summary>
                    <span>{faq.question}</span>
                    <FaPlus />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="faq-image-card">
              <img src={faqVisual} alt="Support specialist helping customer" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}