import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Services.css";
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    img: require("../Images/Services/seo-search-symbol 1.png"),
    alt: "seo",
    title: "Search Engine Optimization",
    description:
      "With over 90% of online experiences beginning with a search engine query, turn to SEO to connect with your target audience effectively and drive organic traffic to your website.",
  },
  {
    img: require("../Images/Services/mobile-application 1.png"),
    alt: "development",
    title: "Application Design & Development",
    description:
      "Responsive and modern web apps that are blazing fast, optimized for SEO, and built to convert—turning visitors into loyal customers seamlessly.",
  },
  {
    img: require("../Images/Services/development 1.png"),
    alt: "development",
    title: "Website Design & Development",
    description:
      "Responsive and modern websites and landing pages that are blazing fast, optimised for SEO, and conversion-focused to turn visitors into loyal customers seamlessly.",
  },
  {
    img: require("../Images/Services/bullhorn 1.png"),
    alt: "bullhorn",
    title: "Digital Marketing",
    description:
      "Get Data-driven insights and strategies to boost your digital marketing efforts, increase brand awareness, and enhance user experience and drive conversions to maximise ROl.",
  },
  {
    img: require("../Images/Services/brand 1.png"),
    alt: "brand",
    title: "Brand Identity",
    description:
      "Making way for your business to stand out from your competitors by branding and strategy and by connecting with your potential customers.",
  },
  {
    img: require("../Images/Services/artificial-intelligence 1.png"),
    alt: "artificial intelligence",
    title: "AI & Automation Solutions",
    description:
      "Intelligent AI & automation solutions to streamline workflows, boost efficiency, and drive growth-saving you time while maximizing results.",
  },
  {
    img: require("../Images/Services/consulting 1.png"),
    alt: "consulting",
    title: "Cybersecurity Services",
    description:
      "Robust cybersecurity services that safeguard your data, protect against threats, and ensure your business stays secure—24/7.",
  },
  {
    img: require("../Images/Services/online-services 1.png"),
    alt: "online services",
    title: "E-commerce Solutions",
    description:
      "Powerful e-commerce solutions designed for seamless shopping experiences, secure transactions, and maximum conversions.",
  },
  {
    img: require("../Images/Services/ux-design 1.png"),
    alt: "ui/ux",
    title: "UI - UX DESIGN",
    description:
      "Stunning UI/UX designs that blend aesthetics with functionality—creating intuitive, engaging, and user-friendly experiences.",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = (title) => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/LearnMore/${encodedTitle}`);
  };
    useEffect(() => {
      AOS.init({
        duration: 1000,  // Animation duration in milliseconds
        easing: "ease-in-out",
        once: true,       // Whether animation should happen only once
      });
    }, []);
  return (
    <section id="ServicesUS" className="services">
      <div className="container">
        <span className="services-heading" data-aos="fade-right">
          <h2>What We Offer</h2>
        </span>
        <div className="service-grid" data-aos="fade-left">
          {services.map((service, index) => (
            <div className="service-card-outline" key={index}>
              <div className="service-card">
                <div className="service-icon">
                  <img src={service.img} alt={service.alt} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/LearnMore/${service.title}`}>
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
