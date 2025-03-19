import React, { useEffect } from "react";
import "../CSS/Contactus.css";
import Navbar from "../Componenets/Navbar";
import ContactSection from "./Contact";
import Footer from "../Componenets/Footer";

function ContactUsPage() {
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Navbar />
    <div className="mainBodyContact">
      <h1 className="contact-title">Contact us</h1>
      <p className="contact-text">
        We're excited to work with you soon! Please drop an email with your details & requirements to
        <br />
        <span className="contact-email">shahana@react.com</span>
      </p>
      {/* <div className="curved-line"></div> */}
    </div>
    <ContactSection />
    <Footer />
    </div>
  );
}

export default ContactUsPage;
