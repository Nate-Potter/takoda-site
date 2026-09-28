import { Link } from "react-router-dom";
import "../styles/footer.css";
import takodaLogo from "../assets/images/takoda-logo.png";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { urls } from "../constants/urls";
import { copyEmail } from "../utils/copyEmail";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="column">
          <div className="footer-logo">
            <img src={takodaLogo} />
          </div>
          <div className="footer-address">
            <p>12365 Pine Bluffs Way</p>
            <p>Parker, CO 80134</p>
            <p>(720) 851-5302</p>
          </div>
        </div>
        <dl className="column">
          <h2>Hours</h2>
          <div className="footer-hours">
            <dt>MON:</dt>
            <dd>11 AM - 12 AM</dd>
          </div>
          <div className="footer-hours">
            <dt>TUES:</dt>
            <dd>11 AM - 12 AM</dd>
          </div>
          <div className="footer-hours">
            <dt>WED:</dt>
            <dd>11 AM - 12 AM</dd>
          </div>
          <div className="footer-hours">
            <dt>THUR:</dt>
            <dd>11 AM - 12 AM</dd>
          </div>
          <div className="footer-hours">
            <dt>FRI:</dt>
            <dd>11 AM - 2 AM</dd>
          </div>
          <div className="footer-hours">
            <dt>SAT:</dt>
            <dd>8 AM - 2 AM</dd>
          </div>
          <div className="footer-hours">
            <dt>SUN:</dt>
            <dd>8 AM - 12 AM</dd>
          </div>
        </dl>
        <nav className="column">
          <h2>Site</h2>
          <ul className="footer-navigation">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            {/* Add other menu items here */}
            <li>
              <Link to="/menu" className="link">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="link">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link to="/photos" className="link">
                Photos
              </Link>
            </li>
          </ul>
        </nav>
        <div className="column">
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li>
              <a href={urls.facebook} target="_blank" rel="noopener noreferrer">
                <Icon icon={faFacebook} className="footer-icon facebook" />
              </a>
            </li>
            <li>
              <a onClick={copyEmail}>
                <Icon icon={faEnvelope} className="footer-icon envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © 2026 Takoda Tavern, Parker, CO. Website developed by{" "}
        <a href="https://npotter.com/" target="_blank" rel="noopener noreferrer">
          npotter.com
        </a>
        .
      </p>
    </footer>
  );
}
