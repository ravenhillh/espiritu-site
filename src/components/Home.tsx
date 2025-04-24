import { Link } from "react-router-dom";
import Landing from "./Landing";
import tacoImage from "../assets/image8.jpeg";
import fadedImage from "../assets/image7.jpeg";
import Menus from "./Menus";

const Home = () => {
  return (
    <div>
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
      <Menus />
    </div>
  );
};

export default Home;
