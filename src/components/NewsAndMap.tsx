import mapImage from "../assets/map.png";

const MapAndNews = () => {
  return (
    <div
      className="about-us"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "50vw",
          height: "50vh",
          objectFit: "cover",
          alignContent: "center",
          padding: "20px",
        }}
      >
        <h1>Newsletter</h1>
        <h4>Mezcal Society</h4>
        <p>
          Enter your email to get info about upcoming mezcal tasting events!
        </p>
        <input type="text" placeholder="Email" />
        <button style={{ color: "white" }}>Submit</button>
      </div>
      <div style={{ position: "relative", width: "50vw", height: "50vh" }}>
        <img
          src={mapImage}
          style={{
            width: "100%",
            height: "100%",
            filter: "brightness(0.9)",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};
export default MapAndNews;
