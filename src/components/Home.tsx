import { Link } from "react-router-dom";
import Landing from "./Landing";
import tacoImage from "../assets/image8.jpeg";
import fadedImage from "../assets/image7.jpeg";
import Menus from "./Menus";
import Reservations from "./Reservations";
import OrderOnline from "./Order";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import NewsAndMap from "./NewsAndMap";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <div
        className="address"
        style={{
          background: "black",
          color: "wheat",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <p>
          <a
            href="https://maps.app.goo.gl/cTC95A3RLPFxApzF9"
            style={{ textDecoration: "none", marginRight: "10px" }}
            className="address-link"
          >
            520 Capdeville Street, New Orleans, LA 70130{" "}
          </a>
        </p>
      </div>{" "}
      <div className="about-us">
        <img src={tacoImage} className="about-us-image" />
        <div className="about-us-box-container">
          <img src={fadedImage} className="about-us-background-image" />
          <div className="about-us-text">
            <h1>About us</h1>
            <p className="about-us-bio">
              Espiritu in New Orleans is a celebration of the food, drinks,
              history and culture of Mexico.
            </p>
            <Link to="/about" className="about-us-link">
              <h2 className="about-us-link">READ MORE</h2>{" "}
            </Link>
          </div>
        </div>{" "}
      </div>
      <Menus />
      <Reservations />
      <OrderOnline />
      <Gallery />
      <Reviews />
      <NewsAndMap />
      <Footer />
    </div>
  );
};

export default Home;
