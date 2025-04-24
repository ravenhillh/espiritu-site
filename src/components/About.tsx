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
        <div className="about-block" style={{ height: "100%", position: "relative" }}>
          <img
            src={AboutPic}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
              filter: "brightness(0.3)",
            }}
          />
          <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              margin: 0,
            }}>
          <p>
            <h1>About us</h1>
            blkjdl aldkjflkj aoiwen;oia valiwnelkn alwien al oia lknwn aoinglk
            lak slkj slinwe;oivn ;oinesl vniweo nwoenkltkn
          </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
