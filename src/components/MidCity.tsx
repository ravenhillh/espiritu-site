import { useState } from "react";
import { Link } from "react-router-dom";
import EspiIcon from "../assets/espi.jpg";
import MidCityPic from "../assets/espirituMidCity.jpg";
import FoodPic from "../assets/espirituMidCityFood.jpg";

const MidCity = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="midcity-page">
      <div className="midcity-nav">
        <div className="midcity-left">
          <Link to="/" className="midcity-home-link">
            <div className="nav-icon">
              <img src={EspiIcon} alt="Espi Icon" className="logo-img" />
            </div>
            <span className="midcity-home-text">Espiritu Main</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="midcity-nav-links">
          <a href="#midcity-about">About</a>
          <a href="#midcity-menu">Menu</a>
          <a href="#midcity-reservations">Reservations</a>
          <a href="#midcity-order">Order</a>
          <a href="#midcity-drinks">Drinks</a>
        </div>

        {/* Hamburger */}
        <div
          className={`midcity-hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <div className={`midcity-mobile-menu ${open ? "show" : ""}`}>
          <a href="#midcity-about" onClick={handleClick}>
            About
          </a>
          <a href="#midcity-menu" onClick={handleClick}>
            Menu
          </a>
          <a href="#midcity-reservations" onClick={handleClick}>
            Reservations
          </a>
          <a href="#midcity-order" onClick={handleClick}>
            Order
          </a>
          <a href="#midcity-drinks" onClick={handleClick}>
            Drinks
          </a>
        </div>
      </div>
      {/* HERO / TITLE */}
      <section className="midcity-hero">
        <h1 className="midcity-title">Espíritu – Mid City</h1>
        <p className="midcity-subtitle">
          A neighborhood expression of food, drinks, and culture.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section id="midcity-about" className="midcity-about">
        {/* Left Image */}
        <div className="midcity-about-image-container">
          <img
            src={FoodPic}
            alt="Mid City exterior"
            className="midcity-about-image"
          />
        </div>

        {/* Right Image with Overlay Text */}
        <div className="midcity-about-text-container">
          <img
            src={MidCityPic}
            alt="Mid City interior"
            className="midcity-about-background"
          />

          <div className="midcity-about-overlay">
            <h2>About Mid City</h2>
            <p>
              Espíritu Mid City is a neighborhood extension of our celebration
              of food, drinks, history, and culture of Mexico.
              <br />
              <br />
              Built to serve the Mid City community, this location focuses on
              approachable dishes, handcrafted cocktails, and a welcoming
              atmosphere rooted in authenticity.
            </p>

            <a href="#" className="midcity-about-link">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="midcity-menu" className="midcity-section dark">
        <h2>Menu</h2>
        <p>
          This is where the Mid City food menu will render. Plug in your Menu
          component here.
        </p>
      </section>

      {/* RESERVATIONS SECTION */}
      <section id="midcity-reservations" className="midcity-section light">
        <h2>Reservations</h2>
        <p>Reservation information for the Mid City location goes here.</p>
        <button className="resy-button">
          Book a Table <span className="resy-label">Resy</span>
        </button>
      </section>

      {/* ORDER ONLINE SECTION */}
      <section id="midcity-order" className="order-section">
        <h2 className="order-title">Order Online</h2>
        <p className="order-text">
          Order pickup or delivery from our Mid City location.
        </p>
        <a href="#" className="order-button">
          Start Order
        </a>
      </section>

      {/* DRINKS MENU SECTION */}
      <section id="midcity-drinks" className="midcity-section dark">
        <h2>Drinks Menu</h2>
        <p>
          Cocktails, beer, wine, and more. Replace with your DrinkMenu component
          later.
        </p>
      </section>
    </div>
  );
};

export default MidCity;
