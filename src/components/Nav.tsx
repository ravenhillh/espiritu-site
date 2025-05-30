import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import EspiIcon from "../assets/espi.jpg";

export default function Nav() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/parties" className="logo">
          <h2 className="nav-link">Parties</h2>
        </Link>
        <Link to="/parties" className="logo">
          <h2 className="nav-link">Contact</h2>
        </Link>
        <Link to="/menu" className="logo">
          <h2 className="nav-link">Menu</h2>
        </Link>
        <Link to="/" className="logo">
          <div className="nav-icon">
            <img src={EspiIcon} alt="Espi Icon" className="logo-img" />
          </div>
        </Link>{" "}
        <Link to="/reservations" className="logo">
          <h2 className="nav-link">Reservations</h2>
        </Link>
        <Link to="/drinks" className="logo">
          <h2 className="nav-link">Drinks</h2>
        </Link>{" "}
        <a
          href="https://www.toasttab.com/espiritu"
          target="_blank"
          rel="noopener noreferrer"
          className="order-link"
        >
          Order
        </a>
        <div className="social-icons">
          <div>
            <a href="https://www.facebook.com/espiritunola">
              <FaFacebook />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/espiritunola">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <nav
        className="hamburger-nav"
        style={{ position: "absolute", right: "0", marginRight: "30px" }}
      >
        <Link to="/" className="logo">
          <div
            style={{
              width: "125px",
              height: "100px",
              borderRadius: "100%",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              top: "15px",
              zIndex: "1",
              overflow: "hidden",
              marginRight: "200px",
            }}
          >
            <img src={EspiIcon} alt="Espi Icon" className="logo-img" />
          </div>
        </Link>{" "}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            right: "4rem",
            marginRight: "20px",
            fontSize: "2em",
            position: "absolute",
          }}
        >
          <div>
            <a href="https://www.facebook.com/espiritunola">
              <FaFacebook />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/espiritunola">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className="menu-links"
            style={{
              position: "absolute",
              zIndex: 1000,
              background: "white",
              borderRadius: "5px",
              right: "10px",
            }}
          >
            <li>
              <Link to="/parties" className="logo" onClick={toggleMenu}>
                <h2 className="nav-link">Parties</h2>
              </Link>
            </li>
            <li>
              <Link to="/menu" className="logo" onClick={toggleMenu}>
                <h2 className="nav-link">Menu</h2>
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="logo" onClick={toggleMenu}>
                <h2 className="nav-link">Reservations</h2>
              </Link>
            </li>
            <li>
              <Link to="/drinks" className="logo" onClick={toggleMenu}>
                <h2 className="nav-link">Drinks</h2>
              </Link>{" "}
            </li>
            <li>
              <a
                href="https://www.toasttab.com/espiritu"
                target="_blank"
                rel="noopener noreferrer"
                className="order-link"
                onClick={toggleMenu}
              >
                Order
              </a>
            </li>
          </div>{" "}
        </div>
      </nav>
    </div>
  );
}
