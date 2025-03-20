import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../CSS/Contact.css"; // Keep your existing CSS
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
              AOS.init({
                duration: 1000,  // Animation duration in milliseconds
                easing: "ease-in-out",
                once: true,       // Whether animation should happen only once
              });
            }, []);

  const serviceOptions = [
    { value: "seo", label: "SEO" },
    { value: "app-dev", label: "Application Design & Development" },
    { value: "web-dev", label: "Web Design & Development" },
    { value: "branding", label: "Branding" },
    { value: "ai", label: "AI & Automation Solutions" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "cybersecurity", label: "Cybersecurity Services" },
    { value: "ecommerce", label: "E-commerce Solutions" },
    { value: "ui-ux", label: "UI/UX Design" }
  ];

  return (
    <section id="ContactUs" className="contact-section">
      {/* Left Side: Contact Info */}
      <section className="contact-left" data-aos="fade-right">
      <h2 className="section-title">Got a Project?</h2>
      <p className="section-description">
        Let’s collaborate and create something extraordinary together. Schedule your free consultation call now.
      </p>
      
      <div className="divider"></div>

      <div className="info-grid">
        <div className="info-item">
        <FaMapMarkerAlt className="icon"  />
          <div>
            <strong>INDIA OFFICE</strong>
            <p>7/2/3A Green Park, Pune Maharashtra - India</p>
          </div>
        </div>

        <div className="info-item">
        <FaMapMarkerAlt className="icon" />
          <div>
            <strong>USA OFFICE</strong>
            <p>1308 Austin Street, Fremont California - USA</p>
          </div>
        </div>

        <div className="info-item">
        <FaPhone className="icon" />
          <div>
            <strong>LET’S TALK</strong>
            <p>Phone: +91 7498194011 <br /> WhatsApp: +91 7498194011</p>
          </div>
        </div>

        <div className="info-item">
        <FaEnvelope className="icon" />
          <div>
            <strong>EMAIL SUPPORT</strong>
            <p>shahana@react.agency <br /> hello@react.agency</p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <h4 className="social-title">Follow our social medias</h4>
      <div className="social-icons">
      <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
    </section>

      {/* Right Side: Contact Form */}
      <div className="contact-form" data-aos="fade-left">
    
        <h3>Send us a message</h3>
        <p>You can also fill this form & we’ll get back in 2 business days.</p>
        <form className="main-form"
         action= "https://formspree.io/f/xnnpjkwr"
         method="POST">
          <div className="form-group">
            <div className="input-fields">
              <label>Your Name</label>
              <input type="text" name="Name" required />
            </div>
            <div className="input-fields">
              <label>Your Organization Name</label>
              <input type="text" name="Organization_name" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-fields">
              <label>Your Number</label>
              <input type="text" name="Number"required />
            </div>
            <div className="input-fields">
              <label>Your Email</label>
              <input type="email" name="Email"required />
            </div>
          </div>
          <div className="single-div">
            <label>Website/Social Media Link</label>
            <input type="text" name="Web_Link"/>
          </div>
          <div className="single-div">
            <label>Which services are you interested in?</label>
            <Select
              options={serviceOptions}
              isMulti
              value={selectedOptions}
              onChange={setSelectedOptions}
              placeholder="Select services..."
              className="react-select-container"
              classNamePrefix="custom-select"
              name="Services"

            />

          </div>
          <div className="single-div">
            <label>What's on your Mind?</label>
            <textarea rows="4" name="Message"></textarea>
          </div>
          <button type="submit" value="send" className="contact-form-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
