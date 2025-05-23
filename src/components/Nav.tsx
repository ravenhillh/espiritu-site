import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import EspiIcon from "../assets/espi.jpg";

export default function Nav() {
  return (
    <nav className="navbar">
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
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
          <div
            className="nav-icon"
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
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <img
              src={EspiIcon}
              alt="Espi Icon"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
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
          className="nav-link"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            // padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "1.5em",
          }}
        >
          Order
        </a>
        <div
          style={{
            position: "absolute",
            right: "2rem",
            display: "flex",
            gap: "1rem",
            marginRight: "20px",
            fontSize: "2em",
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
      </div>
    </nav>
  );
}
