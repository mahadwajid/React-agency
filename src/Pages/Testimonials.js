import React, { useEffect } from "react";
import "../CSS/Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonialsData = [
  {
    text: "Straightforward, committed and reliable. These are the three words I can use to describe Shahana. Unfortunately, these are the three words missing in the industry today. A great person to work with. Highly recommended.",
    name: "Ali Ahmad",
    designation: "FOUNDER, NYX WOLVES",
  },
  {
    text: "She is extremely professional and always strives to have goal-oriented thoughts and beliefs. She has a keen eye for intricate details and her skills have acquired us amazing and constructive results.",
    name: "Hafsa Syed",
    designation: "FOUNDER, HAFSA",
  },
  {
    text: "Shahana is a brilliant person who combines marketing and consumer knowledge, insights, innovation and creativity with a passion for work and outcome focus. She is strong in technology understanding and practical solutions in the digital space.",
    name: "Abdul Khan",
    designation: "FOUNDER, 4 MTV",
  },
];

const TestimonialsSection = () => {
       useEffect(() => {
            AOS.init({
              duration: 1000,  // Animation duration in milliseconds
              easing: "ease-in-out",
              once: true,       // Whether animation should happen only once
            });
          }, []);

  return (
    <section className="testimonials" data-aos="fade-right">
      <h4>Testimonials</h4>
      <h2 className="section-title">Client Feedback & Reviews</h2>
      <div className="testimonial-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.designation}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
