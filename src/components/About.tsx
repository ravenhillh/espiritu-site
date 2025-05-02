import AboutPic from "../assets/aboutImg.jpeg";
import FoodPic from "../assets/foodPic.jpeg";
import RestPic from "../assets/restaurantPic.jpg";

const About = () => {
  return (
    <div className="about-page">
      <div
        className="about-quad"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "0.5fr 0.5fr",
          gap: "0",
          width: "100vw",
          margin: "0 auto",
        }}
      >
        <div
          className="about-title"
          style={{ height: "100%", position: "relative" }}
        >
          <img
            src={AboutPic}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
              filter: "brightness(0.3)",
            }}
          />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              margin: 0,
            }}
          >
            ESPÌRITU MEZCALERÌA
          </h1>
        </div>{" "}
        <div className="about-block" style={{ height: "100%" }}>
          <img
            src={FoodPic}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="about-block" style={{ height: "100%" }}>
          <img
            src={RestPic}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className="about-block"
          style={{ height: "100%", position: "relative" }}
        >
          <img
            src={AboutPic}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
              filter: "brightness(0.3)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              margin: 0,
            }}
          >
            <h1 style={{ marginBottom: "0px" }}>About us</h1>
            <p>
              Espíritu in New Orleans is a celebration of the food, drinks,
              history, and culture of Mexico.
              <br />
              Espíritu was created from a desire to share our passion for
              Mexican agave spirits and Mexican cuisine. We use the freshest
              local ingredients for our dishes and focus on environmental
              sustainability when sourcing our mezcal and tequila. We invite you
              to appreciate the history and culture of Mexico with us, through
              the enjoyment of food and drink.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
