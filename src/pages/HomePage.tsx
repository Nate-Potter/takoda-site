import { Link } from "react-router-dom";
import takodaOutside from "../assets/images/takoda4.jpeg";
import takodaBar from "../assets/images/takoda11.jpeg";
import takodaMusic from "../assets/images/takoda-music.png";
import { HeroSwiper } from "../components/HeroSwiper";
import { RowSwiper } from "../components/RowSwiper";
import "../styles/home-page.css";
import "../styles/menu-page.css";

import breakfast from "../assets/images/takoda13.jpeg";
import appetizers from "../assets/images/takoda14.jpeg";
import entrees from "../assets/images/takoda8.jpeg";
import drinks from "../assets/images/takoda10.jpeg";

export function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <HeroSwiper />
        <div className="hero-filter">
          <div className="hero-title">
            <div className="hero-brand">
              <h1>TAKODA</h1>
              <h2>TAVERN</h2>
            </div>
            <h3>Here, everyone is a friend.</h3>
            <div className="hero-buttons">
              <Link to="/menu" className="button1 highlight">
                Explore Our Menu
              </Link>
              <Link to="/events" className="button1">
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-row short">
        <div className="row-text">
          <h2>Weekday Happy Hour</h2>
          <h3>
            Monday - Friday
            <br />
            3:00 PM - 8:00 PM
          </h3>
          <h2>Hours</h2>
          <dl className="row-hours">
            <div className="operating-hours">
              <dt>MON-THUR:</dt>
              <dd>11 AM - 12 AM</dd>
            </div>
            <div className="operating-hours">
              <dt>FRI:</dt>
              <dd>11 AM - 2 AM</dd>
            </div>
            <div className="operating-hours">
              <dt>SAT:</dt>
              <dd>8 AM - 2 AM</dd>
            </div>
            <div className="operating-hours">
              <dt>SUN:</dt>
              <dd>8 AM - 12 AM</dd>
            </div>
          </dl>
        </div>
        <div className="row-media mobile-hide">
          <img src={takodaBar} alt="Inside Takoda Tavern" />
        </div>
      </div>

      <div className="home-row">
        <div className="row-media">
          <RowSwiper />
        </div>
        <div className="row-text">
          <h2>Food, Drinks & Good Times</h2>
          <p>
            Grab a bite, order a drink, and settle in. From tavern favorites to cold drafts and
            cocktails, Takoda has something for every kind of night.
          </p>

          <ul>
            <li>- Tavern Favorites</li>
            <li>- Cold Drinks and Drafts</li>
            <li>- Cocktails and Specialty Drinks</li>
            <li>- Something for Every Appetite</li>
          </ul>

          <Link to="/menu" className="row-button">
            Explore the Menu
          </Link>
        </div>
      </div>

      <div className="image-row">
        <img src={takodaMusic} alt="Live Music" />
        <div className="row-filter">
          <div className="image-text">
            <h2>Come by for Live Music</h2>

            <p>
              Good music makes a good night better. Check out the upcoming lineup and join us for
              live music, drinks, and a night with friends.
            </p>

            <Link to="/events" className="row-button highlight">
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>

      <div className="home-row">
        <div className="row-media">
          <img src={takodaOutside} alt="Takoda Tavern" />
        </div>
        <div className="row-text">
          <h2>Welcome to Takoda</h2>
          <p>
            Since opening in Parker in 2009, Takoda Tavern has been a place for good food, cold
            drinks, live music, and good company. The name Takoda means “friend to everyone” and
            that's the spirit we try to bring to every table, every night. Come in for a meal, meet
            up with friends, or stay awhile and enjoy the atmosphere.
          </p>

          <Link to="/contact" className="row-button">
            Learn More
          </Link>
        </div>
      </div>

      <div className="home-row grid">
        <div className="row-text">
          <h2>Come Hang Out</h2>

          <p>
            Looking for a place to grab a drink, share a meal, and spend some time with friends?
            Pull up a seat. We'll see you at Takoda.
          </p>

          <Link to="/contact" className="row-button">
            Find Takoda
          </Link>
        </div>
        <div className="row-media">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.0085516866025!2d-104.75719029999999!3d39.491721500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c91865e8c9181%3A0x4b6ef77cfb153c42!2sTakoda%20Tavern!5e0!3m2!1sen!2sus!4v1790713695171!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="home-row">
        <div className="menu-categories">
          <Link to="/menu#breakfast" className="menu-category">
            <img src={breakfast} />
            <p className="category-name">Breakfast</p>
          </Link>
          <Link to="/menu#appetizers" className="menu-category">
            <img src={appetizers} />
            <p className="category-name">Appetizers</p>
          </Link>
          <Link to="/menu#entrees" className="menu-category">
            <img src={entrees} />
            <p className="category-name">Entrees</p>
          </Link>
          <Link to="/menu#drinks" className="menu-category">
            <img src={drinks} />
            <p className="category-name">Drinks</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
