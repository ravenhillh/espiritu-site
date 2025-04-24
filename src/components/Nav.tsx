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
        <Link to="/bio" className="logo">
          <h2 className="nav-link">Parties</h2>
        </Link>
        <Link to="/photos" className="logo">
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
        <Link to="/stories" className="logo">
          <h2 className="nav-link">Reservations</h2>
        </Link>
        <Link to="/contact" className="logo">
          <h2 className="nav-link">Drinks</h2>
        </Link>{" "}
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
            <FaFacebook />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>
    </nav>
  );
}
