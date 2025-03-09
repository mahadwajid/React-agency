import React, { useEffect } from "react";
import '../CSS/Home.css';
import pcImage from '../Images/pc.png'; // Ensure the correct path for the image
import Logo1 from '../Images/logo1.png'; // Ensure the correct path for the image
import Logo2 from '../Images/4.png';
import Logo3 from '../Images/5.jpg';
import Logo4 from '../Images/6.png';
import Logo5 from '../Images/7.jpg';
import Logo6 from '../Images/8.jpg';
import ServicesSection from "./Services";
import StatisticsSection from "./Statistics";
import FourStepsSection from "./FourStepsCards";
import DigitalFutureSection from "./DigitalFuture";
import TestimonialsSection from "./Testimonials";
import ContactSection from "./Contact";
import Footer from "../Componenets/Footer";
import Navbar from "../Componenets/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      easing: "ease-in-out",
      once: true,       // Whether animation should happen only once
    });
  }, []);
  
  return (
    <div>
      <Navbar />
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-content">
        <div className="hero-text" data-aos="fade-up">
          <h2>
            <span className="highlight">Building sleek, scalable, and intelligent<br /> Digital solutions for forward-thinking <br /> brands. </span>
          </h2>
          <p>
            Claim your free consultation and take the first step toward digital success.
          </p>
          <button className="cta-button">
            <span>Book a free Consultation</span>
          </button>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src={pcImage} alt="Computer Mockup" />
        </div>
      </div>
    </section>


    <section className="trusted-brands" data-aos="fade-up">
      <div className="brands-container">
        <h2>Trusted by World-class Brands and Organizations</h2>
      </div>
      <div className="logoContainer" data-aos="fade-up">
        <div className="logoDiv">
          <img className="logo" src={Logo1} alt="Logo 1" />
          <img className="logo" src={Logo2} alt="Logo 2" />
          <img className="logo" src={Logo3} alt="Logo 3" />
        </div>
        <div className="logoDiv">
          <img className="logo" src={Logo4} alt="Logo 4" />
          <img className="logo" src={Logo5} alt="Logo 5" />
          <img className="logo" src={Logo6} alt="Logo 6" />
        </div>
      </div>
    </section>
    <section id="services-section">
  <ServicesSection />
</section>

    <StatisticsSection />
    <FourStepsSection />
    <DigitalFutureSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
</div>
  );
}

export default Home;
