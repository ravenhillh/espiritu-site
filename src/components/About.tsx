import AboutPic from "../assets/aboutImg.jpeg";
import FoodPic from "../assets/foodpic2.jpeg";
import RestPic from "../assets/restaurantPic.jpg";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-quad">
        <div className="about-title">
          <img src={AboutPic} className="about-title-image" />
          <h1 className="about-title-text">ESPÌRITU MEZCALERÌA</h1>
        </div>{" "}
        <div className="about-block">
          <img src={FoodPic} className="about-food-image" />
        </div>
        <div className="about-block">
          <img src={RestPic} className="about-food-image" />
        </div>
        <div
          className="about-block"
          style={{ height: "100%", position: "relative" }}
        >
          <img src={AboutPic} className="about-title-image" />
          <div className="about-text-container">
            <h1 style={{ marginBottom: "0px" }}>About us</h1>
            <p className="about-text">
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
