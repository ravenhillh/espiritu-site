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
          <a href="#midcity-location">Location and Hours</a>
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
          <a href="#midcity-location" onClick={handleClick}>
            Location and Hours
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
            <h2>Espíritu Mid City</h2>
            <p>
              Espíritu Mid City is a neighborhood extension of our celebration
              of food, drinks, history, and culture of Mexico.
              <br />
              <br />
              Built to serve the Mid City community, this location focuses on
              approachable dishes, handcrafted cocktails, and a welcoming
              atmosphere rooted in authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="midcity-menu" className="midcity-menu-section">
        <h2 className="midcity-menu-title">Mid-City Dinner Menu</h2>

        <div className="midcity-menu-grid">
          {/* APPETIZERS */}
          <div className="midcity-menu-category">
            <h3>Appetizers</h3>

            <div className="midcity-menu-item">
              <div>
                <h4>Guacamole Tradicional</h4>
                <p>Hass avocado, lime, cilantro, serrano, house-made totopos</p>
              </div>
              <span>$14</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Tuna Tostada</h4>
                <p>
                  Ahi tuna, avocado mousse, chipotle aioli, crispy corn tortilla
                </p>
              </div>
              <span>$18</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Queso Fundido</h4>
                <p>Oaxaca cheese, chorizo verde, roasted poblanos</p>
              </div>
              <span>$16</span>
            </div>
          </div>

          {/* ENTREES */}
          <div className="midcity-menu-category">
            <h3>Entrées</h3>

            <div className="midcity-menu-item">
              <div>
                <h4>Short Rib Birria</h4>
                <p>
                  Braised short rib, consommé, pickled onion, handmade tortillas
                </p>
              </div>
              <span>$32</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Grilled Gulf Snapper</h4>
                <p>Mojo verde, charred corn, heirloom tomato salsa</p>
              </div>
              <span>$34</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Duck Carnitas</h4>
                <p>Confit duck, mole negro, crispy plantains</p>
              </div>
              <span>$36</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Vegetable Enchiladas</h4>
                <p>Seasonal vegetables, salsa roja, queso fresco</p>
              </div>
              <span>$26</span>
            </div>
          </div>

          {/* DESSERTS */}
          <div className="midcity-menu-category">
            <h3>Desserts</h3>

            <div className="midcity-menu-item">
              <div>
                <h4>Churros con Chocolate</h4>
                <p>Cinnamon sugar churros, dark chocolate sauce</p>
              </div>
              <span>$12</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Flan de Cajeta</h4>
                <p>Goat milk caramel custard, toasted pecans</p>
              </div>
              <span>$11</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Chocolate Abuelita Tart</h4>
                <p>Mexican chocolate ganache, cinnamon crema</p>
              </div>
              <span>$13</span>
            </div>
          </div>
        </div>
      </section>

      {/* DRINKS MENU SECTION */}

      <section id="midcity-drinks" className="midcity-menu-section">
        <h2 className="midcity-menu-title">Mid-City Drink Menu</h2>

        <div className="midcity-menu-grid">
          {/* MEZCAL COCKTAILS */}
          <div className="midcity-menu-category">
            <h3>Mezcal Cocktails</h3>

            <div className="midcity-menu-item">
              <div>
                <h4>Oaxaca Old Fashioned</h4>
                <p>
                  Espadín mezcal, reposado tequila, agave, chocolate bitters
                </p>
              </div>
              <span>$16</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Paloma Negra</h4>
                <p>Mezcal joven, grapefruit, lime, smoked salt</p>
              </div>
              <span>$15</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>La Vida Verde</h4>
                <p>Mezcal, cucumber, basil, lime, chili tincture</p>
              </div>
              <span>$17</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Smoked Pineapple Margarita</h4>
                <p>Mezcal, grilled pineapple, lime, ancho chili</p>
              </div>
              <span>$16</span>
            </div>
          </div>

          {/* STRAIGHT MEZCAL */}
          <div className="midcity-menu-category">
            <h3>Straight Mezcal</h3>

            <div className="midcity-menu-item">
              <div>
                <h4>Del Maguey Vida (Espadín)</h4>
                <p>San Luis del Río, Oaxaca</p>
              </div>
              <span>$14</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Rey Campero (Madrecuixe)</h4>
                <p>Candelaria Yegolé, Oaxaca</p>
              </div>
              <span>$18</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Bozal (Tepeztate)</h4>
                <p>Wild agave, bright herbal finish</p>
              </div>
              <span>$22</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Clase Azul Guerrero</h4>
                <p>Rare papalote agave expression</p>
              </div>
              <span>$38</span>
            </div>
          </div>

          {/* BEER & WINE */}
          <div className="midcity-menu-category">
            <h3>Beer & Wine</h3>

            <div className="midcity-menu-item">
              <div>
                <h4>Modelo Especial</h4>
                <p>Mexican lager</p>
              </div>
              <span>$7</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Negra Modelo</h4>
                <p>Munich-style dunkel lager</p>
              </div>
              <span>$7</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>House Red / White</h4>
                <p>Rotating selection</p>
              </div>
              <span>$10</span>
            </div>

            <div className="midcity-menu-item">
              <div>
                <h4>Premium Mexican Red Blend</h4>
                <p>Full-bodied, oak-aged</p>
              </div>
              <span>$14</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATIONS SECTION */}
      <section id="midcity-reservations" className="midcity-section light">
        <h2>Reservations</h2>
        <p>Reservation information for the Mid City location goes here.</p>
        <button className="resy-button">
          Book a Table <span className="resy-label">Resy</span>
        </button>
        <p>
          To book a reservation for a party of 8 or larger{" "}
          <Link to="/parties">Go here</Link>
        </p>
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
      <section id="midcity-location" className="midcity-location-section">
        {/* MAP */}
        <div className="midcity-map-container">
          <iframe
            title="Mid City Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2661252691223!2d-90.10103792474092!3d29.971780974960243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a540866aa92b%3A0x1748d6ea233fc3e2!2sEspiritu%20Mid-City!5e0!3m2!1sen!2sus!4v1771603764698!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ADDRESS */}
        <div className="midcity-location-info">
          <h2>Visit Us</h2>

          <p className="midcity-address">
            139 S Cortez St.
            <br />
            New Orleans, LA 70119
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="midcity-directions-link"
          >
            Get Directions
          </a>
          <h2>Contact Us</h2>

          <p className="midcity-address">
            (504) 666-6666
            <br />
            espiritunola@gmail.com
          </p>
        </div>

        {/* HOURS */}
        <div className="midcity-hours">
          <h2>Hours</h2>

          <ul>
            <li>
              <span>Monday</span> <span>Closed</span>
            </li>
            <li>
              <span>Tuesday</span> <span>3pm – 10pm</span>
            </li>
            <li>
              <span>Wednesday</span> <span>3pm – 10pm</span>
            </li>
            <li>
              <span>Thursday</span> <span>3pm – 10pm</span>
            </li>
            <li>
              <span>Friday</span> <span>3pm – 10pm</span>
            </li>
            <li>
              <span>Saturday</span> <span>10am – 3pm</span>
            </li>
            <li>
              <span>Sunday</span> <span>10am – 3pm</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MidCity;
