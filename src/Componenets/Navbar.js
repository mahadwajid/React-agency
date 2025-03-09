import React, { useState, useEffect } from "react";
import "../CSS/Navbar.css";
import img from '../Images/logo2.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Language switcher function
  const changeLanguage = (lang) => {
    const googleTranslateDropdown = document.querySelector('.goog-te-combo');
    if (googleTranslateDropdown) {
      googleTranslateDropdown.value = lang;
      googleTranslateDropdown.dispatchEvent(new Event('change'));
    }
  };

  // Load Google Translate script and initialize it
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
    };

    // Define the global callback for Google Translate
    window.googleTranslateElementInit = initializeGoogleTranslate;

    // Load the Google Translate script if not already loaded
    if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
      addGoogleTranslateScript();
    } else {
      initializeGoogleTranslate(); // Initialize if already loaded
    }
  }, []); // Run only once when the component mounts

  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <img src={img} alt="Logo" className="navbar-logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`navbar-ul ${isOpen ? "open" : ""}`}>
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/" className="navbar-link">About us</Link></li>
          <li>
            <ScrollLink
              to="services-section"
              smooth={true}
              duration={500}
              className="navbar-link"
              onClick={toggleMenu}  // Close menu if on mobile
            >
              Services
            </ScrollLink>
          </li>
          <li><Link to="/ContactPage" className="navbar-link">Contact Us</Link></li>
          <li><Link to="#" className="navbar-link navbar-get-started">Get Started</Link></li>

          {/* Language Switcher */}
          <li className="language-switcher">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              className="language-flag"
              onClick={() => changeLanguage('en')}
            />
            <img
              src="https://flagcdn.com/w40/sa.png"
              alt="Arabic"
              className="language-flag"
              onClick={() => changeLanguage('ar')}
            />
          </li>
        </ul>
      </nav>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </header>
  );
}

export default Navbar;
