import { Link } from "react-router-dom";
import "../styles/footer.css";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { urls } from "../constants/urls";
import { copyEmail } from "../utils/copyEmail";

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="site-footer">
        <h1>Takoda Tavern</h1>
        <div className="footer-top">
          <div className="footer-column col1">
            <p>12365 Pine Bluffs Way</p>
            <p>Parker, CO 80134</p>
            <p>(720) 851-5302</p>
          </div>
          <div className="footer-column col2">
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
          </div>
          <div className="footer-column col3">
            <ul className="social-buttons">
              <li>
                <a href={urls.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon icon={faFacebook} className="social-icons yelp" />
                </a>
              </li>
              <li>
                <a onClick={copyEmail}>
                  <Icon icon={faEnvelope} className="social-icon envelope" />
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
      </div>
    </footer>
  );
}
