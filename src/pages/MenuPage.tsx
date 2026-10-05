import { Link } from "react-router-dom";
import "../styles/menu-page.css";

import breakfast from "../assets/images/takoda13.jpeg";
import appetizers from "../assets/images/takoda14.jpeg";
import entrees from "../assets/images/takoda8.jpeg";
import drinks from "../assets/images/takoda10.jpeg";

export default function MenuPage() {
  return (
    <div className="menu-page">
      <h1>Menu</h1>
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
  );
}
