// import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Landing from "./Landing";
import EspiIcon from "../assets/espi.jpg";
import tacoImage from "../assets/image8.jpeg";
import fadedImage from "../assets/image7.jpeg";

const Home = () => {
  return (
    <div>
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
          </div>{" "}
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
          >
            🥑
          </a>
          520 Capdeville Street, New Orleans, LA 70130{" "}
        </p>
      </div>{" "}
      <div
        className="about-us"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img
          src={tacoImage}
          style={{ width: "50vw", height: "50vh", objectFit: "cover" }}
        />
        <div style={{ position: "relative", width: "50vw", height: "50vh" }}>
          <img
            src={fadedImage}
            style={{
              width: "100%",
              height: "100%",
              filter: "brightness(0.2)",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
              color: "white",
            }}
          >
            <h1>About us</h1>
            <p style={{ fontWeight: "800" }}>
              Espiritu in New Orleans is a celebration of the food, drinks,
              history and culture of Mexico.
            </p>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2
                style={{
                  background: "blue",
                  borderRadius: "5%",
                  width: "160px",
                  textAlign: "center",
                }}
              >
                READ MORE
              </h2>{" "}
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Home;
