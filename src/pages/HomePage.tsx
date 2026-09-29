import { Link } from "react-router-dom";
import takodaOutside from "../assets/images/takoda4.jpeg";
import takodaBar from "../assets/images/takoda10.jpeg";
import takodaMusic from "../assets/images/takoda-music.png";
import { HeroSwiper } from "../components/HeroSwiper";
import { RowSwiper } from "../components/RowSwiper";
import "../styles/home-page.css";
// import "../styles/swiper.css";

export function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <HeroSwiper />
        <div className="hero-filter">
          <div className="hero-title">
            <h1>
              TAKODA
              <br />
              TAVERN
            </h1>
            <h2>Here, everyone is a friend.</h2>
            <div className="hero-buttons">
              <Link to="/menu" className="button1">
                Explore Our Menu
              </Link>
              <Link to="/upcoming" className="button1">
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-row">
        <div className="row-text">
          <h2>Welcome to Takoda</h2>
          <p>
            Takoda is a neighborhood tavern built around good food, good drinks, and good company.
            Whether you're grabbing a bite, meeting up with friends, or settling in for a few
            drinks, there's always a reason to stay awhile.
            <br />
            <br />
            Our menu brings together satisfying tavern favorites and dishes made to pair perfectly
            with a drink and good conversation.
          </p>

          <Link to="/menu" className="row-button">
            View Menu
          </Link>
        </div>
        <div className="row-media">
          <img src={takodaOutside} alt="Takoda Tavern" />
        </div>
      </div>

      <div className="home-row">
        <div className="row-media">
          <RowSwiper />
        </div>
        <div className="row-text">
          <h2>Food, Drinks & Good Times</h2>
          <p>
            From the kitchen to the bar, Takoda is about keeping things simple: great food,
            refreshing drinks, and an atmosphere where you can relax and enjoy yourself.
          </p>

          <ul>
            <li>Tavern Favorites</li>
            <li>Cold Drinks and Drafts</li>
            <li>Cocktails and Specialty Drinks</li>
            <li>Something for Every Appetite</li>
            <li>A Place to Hang Out and Unwind</li>
          </ul>

          <Link to="/menu" className="button1">
            Explore the Menu
          </Link>
        </div>
      </div>

      <div className="image-row">
        <img src={takodaMusic} alt="Live Music" />
        <div className="image-text">
          <h2>Come by for Live Music</h2>

          <p>
            Check out what's on the menu, see what's happening around the tavern, and get a feel for
            what makes Takoda a place worth coming back to.
          </p>

          <Link to="/upcoming" className="row-button">
            Upcoming Events
          </Link>
        </div>
      </div>

      <div className="home-row">
        <div className="row-media">
          <img src={takodaBar} alt="Inside Takoda Tavern" />
        </div>
        <div className="row-text">
          <h2>Your Neighborhood Tavern</h2>

          <p>
            Takoda is the kind of place you can drop into without much of a plan. Come by for
            dinner, meet friends at the bar, catch the game, or stay for another round.
          </p>

          <p>
            We're here for the casual nights, the celebrations, the after-work drinks, and
            everything in between.
          </p>
        </div>
      </div>

      <div className="home-row">
        <div className="row-text">
          <h2>Come Hang Out</h2>

          <p>
            Looking for a place to grab a drink, share a meal, and spend some time with friends?
            Pull up a seat. We'll see you at Takoda.
          </p>

          <Link to="/contact" className="button1">
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
    </div>
  );
}
