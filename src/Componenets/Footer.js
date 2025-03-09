import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Footer.css';
import Logo1 from '../Images/logo1.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Left Section: Company Info */}
        <div className="footer-logo">
          <div className="logoContainer1">
            <img src={Logo1} alt="logo" />
            <h2>React Agency</h2>
          </div>
          <p>
            Your partner in advertising and marketing solutions. With our expertise, we empower businesses to thrive and
            reach new heights.
          </p>
          <div className="social-icons1">
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>

        {/* Middle Section: Services */}
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Website Development</a></li>
            <li><a href="#">Search Engine Optimization</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">E-commerce Solutions</a></li>
            <li><a href="#">Cybersecurity Services</a></li>
            <li><a href="#">AI & Automation Solutions</a></li>
            <li><a href="#">Brand Identity</a></li>
          </ul>
        </div>

        {/* Right Section: Company */}
        <div className="footer-company">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Solutions</a></li>
            <li><a href="#" className="highlight">Article & News</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright and Links */}
      <div className="footer-bottom">
        <p>Copyright © 2025 React Agency, All rights are reserved.</p>
        <div className="footer-links">
          <a href="#">Term of use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
