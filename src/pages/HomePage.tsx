import { Link } from "react-router-dom";
import takodaInterior from "../assets/images/takoda3.jpeg";
import takodaOutside from "../assets/images/takoda4.jpeg";
import { HeroSwiper } from "../components/HeroSwiper";
import "../styles/home-page.css";
import { RowSwiper } from "../components/RowSwiper";

export function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <HeroSwiper />
        <div className="row-filter">
          <div className="home-title">
            <h1>
              Takoda
              <br />
              Tavern
            </h1>
            <h2>Good food. Cold drinks. Good company.</h2>
          </div>
        </div>
      </div>

      <div className="home-row">
        <div className="row-image left">
          <img src={takodaOutside} alt="Takoda Tavern" />
        </div>

        <div className="home-info right">
          <h2>Welcome to Takoda</h2>
          <p>
            Takoda is a neighborhood tavern built around good food, good drinks, and good company.
            Whether you're grabbing a bite, meeting up with friends, or settling in for a few
            drinks, there's always a reason to stay awhile.
          </p>

          <p>
            Our menu brings together satisfying tavern favorites and dishes made to pair perfectly
            with a drink and good conversation.
          </p>

          <Link to="/menu" className="button1">
            View Menu
          </Link>
        </div>
      </div>

      <div className="home-row row-b">
        <RowSwiper />
        <div className="home-info">
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

      <div className="home-row">
        <div className="home-info left">
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

        <div className="row-image right">
          <img src={takodaInterior} alt="Inside Takoda Tavern" />
        </div>
      </div>

      <div className="home-row row-c">
        <div className="blur">
          <div className="home-info">
            <h2>What's Happening at Takoda?</h2>

            <p>
              Check out what's on the menu, see what's happening around the tavern, and get a feel
              for what makes Takoda a place worth coming back to.
            </p>

            <Link to="/about" className="button1">
              About Takoda
            </Link>
          </div>
        </div>
      </div>

      <div className="home-row">
        <div className="home-info">
          <h2>Come Hang Out</h2>

          <p>
            Looking for a place to grab a drink, share a meal, and spend some time with friends?
            Pull up a seat. We'll see you at Takoda.
          </p>

          <Link to="/contact" className="button1">
            Find Takoda
          </Link>
        </div>
      </div>
    </div>
  );
}
