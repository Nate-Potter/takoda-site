import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import takodaLogo from "../assets/images/takoda-logo.png";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { urls } from "../constants/urls";

import { copyEmail } from "../utils/copyEmail";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Contact Us", path: "/contact" },
    { label: "Upcoming Events", path: "/upcoming" },
    { label: "Photos", path: "/photos" },
  ];

  return (
    <header className="site-header">
      {/* Mobile Menu */}
      {/* Mobile Menu Button -- This button is hidden from desktop version with CSS*/}
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <p></p> : <Icon icon={faBars} className="menu-icon" />}
      </button>
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <button className="mobile-menu-close-button" onClick={toggleMobileMenu}>
            <Icon icon={faXmark} className="close-icon" />
          </button>
          <div className="mobile-navigation">
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

            <ul className="social-buttons">
              <li>
                <a href={urls.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon icon={faFacebook} className="social-icon facebook" />
                </a>
              </li>

              <li>
                <a onClick={copyEmail}>
                  <Icon icon={faEnvelope} className="social-icon envelope" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="header-bar">
        <Link className="site-logo" to="/">
          <img src={takodaLogo}></img>
        </Link>

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

          <ul className="social-buttons">
            <li>
              <a href={urls.facebook} target="_blank" rel="noopener noreferrer">
                <Icon icon={faFacebook} className="social-icon facebook" />
              </a>
            </li>

            <li>
              <a onClick={copyEmail}>
                <Icon icon={faEnvelope} className="social-icon envelope" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
