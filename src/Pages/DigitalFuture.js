import React, { useEffect } from "react";
import "../CSS/DigitalFuture.css";
import img1 from '../Images/DigitalFutureSection/2.png';
import img2 from '../Images/DigitalFutureSection/pc.png';
import img3 from '../Images/DigitalFutureSection/rocket.png';
import img4 from '../Images/DigitalFutureSection/download.png.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";

const DigitalFutureSection = () => {

        useEffect(() => {
          AOS.init({
            duration: 1000,  // Animation duration in milliseconds
            easing: "ease-in-out",
            once: true,       // Whether animation should happen only once
          });
        }, []);

  return (
    <section className="digital-future">
      <div className="container">
        <div className="digital-future-image" data-aos="fade-right">
          <img src={img1} alt="People discussing strategy" />
        </div>
        <div className="digital-future-text" data-aos="fade-left">
          <h2>What We Offer</h2>
          <h3>Your Digital Future, Our Expertise</h3>
          <p>
          We are your partners in digital transformation. Whether you're looking to
          launch a new brand, rejuvenate your online presence, or drive measurable
          results, we have the expertise, passion, and creativity to bring your vision
          to life. Join us on the journey to unlock your brand's full potential in the
          digital age.
          </p>
        </div>
      </div>
      <div className="digital-horizon-container">
        <h2 data-aos="fade-left">Navigating Digital Horizons</h2>
        <div className="dh-main">
          <div className="box box1" data-aos="fade-right">
            <div className="box-content">
              <p className="title">Timely and Transparent Communication</p>
              <p className="description">Ensuring clarity and efficiency every step of the way. Join us for a consultation today.</p>
              <button className="df-button"  onClick={() => window.location.href = '/'}>Get In Touch</button>
            </div>
            <div className="box-image">
              <img src={img2} alt="pc" />
            </div>
          </div>
          <div className="box box2" data-aos="fade-up">
            <div className="box-content">
              <p className="title">Boost Traffic & Sales</p>
              <p className="description">Maximize your website's traffic and skyrocket your sales with our tailored strategies.</p>
            </div>
            <div className="box-image">
              <img src={img3} alt="rocket" />
            </div>
          </div>
          <div className="box box3" data-aos="fade-right">
            <p className="rating">4.8+</p>
            <p className="title">Client Ratings</p>
            <div style={{display: 'flex'}}>
            <FontAwesomeIcon icon={faSolidStar} />
            <FontAwesomeIcon icon={faSolidStar} />
            <FontAwesomeIcon icon={faSolidStar} />
            <FontAwesomeIcon icon={faSolidStar} />
            <FontAwesomeIcon icon={faRegularStar} />
          </div>
            <p className="description">Discover why 70% of our clients choose to stay with us for
            the long term. Experience our unmatched retention-driven approach firsthand.</p>
          </div>
          <div className="box box4" data-aos="fade-left">
            <div className="box-content">
              <p className="title">Responsive and Scalable Solutions</p>
              <p className="description">Let us customize strategies to help your business thrive with responsive and scalable solutions tailored to your brand's unique needs.</p>
              <button className="df-button" onClick={() => window.location.href = '/'}>Get In Touch</button>
            </div>
            <div className="box-image">
              <img src={img4} alt="Responsive Solutions" />
            </div>
          </div>
          <div className="box right-column" data-aos="fade-right">
            <div className="icon">📞</div>
            <p>Let's Talk</p>
            <p className="phone-number">00000 00000</p>
            <p className="description">As a remote-first agency, we seamlessly serve clients
            across various time zones.</p>
            <button className="df-button" onClick={() => window.location.href = '/ContactPage'}>CALL NOW!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalFutureSection;
