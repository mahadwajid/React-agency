import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/FourStepsCards.css";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Understand",
    description:
      "Jump on a quick call with us for a free consultation! We brainstorm with our clients & shape our strategies together.",
    image: require("../Images/FourStepsCards/understanding 1.png"),
    alt: "understanding",
  },
  {
    title: "Analyse",
    description:
      "Our team consists of experts, who analyze the current situation & give a data-driven approach.",
    image: require("../Images/FourStepsCards/innovation 1.png"),
    alt: "innovation",
  },
  {
    title: "Customize",
    description:
      "We’re all about getting stronger. That’s how we’re about keeping our clients happy with the Retainer Model.",
    image: require("../Images/FourStepsCards/web-design 1.png"),
    alt: "web",
  },
  {
    title: "Deliver",
    description:
      "Our main excel is delivering top-notch outcomes through innovative thinkers and skilled creators.",
    image: require("../Images/FourStepsCards/delivered 1.png"),
    alt: "delivered",
  },
];

const FourStepsSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


  // 🌟 Define the navigation function
  const handleNavigate = () => {
    navigate("/ContactPage");
  };

  return (
    <section className="four-steps">
      <div className="fs-container">
        <h2 data-aos="fade-right">What We Offer</h2>
        <h3 data-aos="fade-left">
          Unlock Astonishing Results with Just 4 Simple Steps!!
        </h3>
        <div className="steps-container" data-aos="fade-up">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="step-card">
                <div className="card-logo-container">
                  <img src={step.image} alt={step.alt} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {/* 🌟 Use the function here */}
                <button onClick={handleNavigate} className="learn-more-button">
                  Learn More
                </button>
              </div>
              {index < steps.length - 1 && (
                <span className="step-card-divider"></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourStepsSection;
