import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import takodaLogo from "../assets/images/takoda-logo.png";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { urls } from "../constants/urls";

import { copyEmail, copyPhone } from "../utils/copyOnClick";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Events", path: "/events" },
    { label: "Photos", path: "/photos" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="site-header">
      <nav className="header-bar">
        <Link to="/">
          <img src={takodaLogo} className="header-logo" />
        </Link>

        {/* Mobile Menu */}
        {/* Mobile Menu Button -- This button is hidden from desktop version with CSS*/}
        <button className="open-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <p></p> : <Icon icon={faChevronDown} className="open-icon" />}
        </button>
        {isMobileMenuOpen && (
          <nav className="mobile-navigation">
            <button className="close-button" onClick={toggleMobileMenu}>
              <Icon icon={faXmark} className="close-icon" />
            </button>
            <div className="navigation-container">
              {/* Map the navLinks array we created for navigation routing*/}
              <ul className="navbar-links">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="link" onClick={toggleMobileMenu}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="navbar-contact">
                <li>
                  <a href={urls.facebook} target="_blank" rel="noopener noreferrer">
                    <Icon icon={faFacebook} className="navbar-icon facebook" />
                  </a>
                </li>

                <li>
                  <a onClick={copyEmail}>
                    <Icon icon={faEnvelope} className="navbar-icon envelope" />
                  </a>
                </li>

                <li>
                  <a onClick={copyPhone}>
                    <Icon icon={faPhone} className="navbar-icon phone" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )}

        {/* Desktop Navigation */}
        <div className="navigation">
          <ul className="navbar-links">
            {/* Map the navLinks array we created for navigation routing*/}
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-contact">
            <li>
              <a href={urls.facebook} target="_blank" rel="noopener noreferrer">
                <Icon icon={faFacebook} className="navbar-icon facebook" />
              </a>
            </li>

            <li>
              <a onClick={copyEmail}>
                <Icon icon={faEnvelope} className="navbar-icon envelope" />{" "}
              </a>
            </li>
            <li>
              <a onClick={copyPhone}>
                <Icon icon={faPhone} className="navbar-icon phone" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
