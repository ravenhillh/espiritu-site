// import mapImage from "../assets/map.png";

const MapAndNews = () => {
  return (
    <div className="about-us">
      <div className="newsletter">
        <h1 style={{ marginBottom: "5px" }}>Newsletter</h1>
        <h2>MEZCAL SOCIETY</h2>
        <p>
          Enter your email to get info about upcoming mezcal tasting events!
        </p>
        <form action="submit" style={{ display: "flex", gap: "10px" }}>
          <input type="text" placeholder="Email" />
          <button style={{ color: "white", backgroundColor: "crimson" }}>
            Submit
          </button>
        </form>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.120766610416!2d-90.07178008930009!3d29.947204723067816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a7228db4dce7%3A0x30aaf2b5e165ccfd!2zRXNww61yaXR1!5e0!3m2!1sen!2sus!4v1748629142551!5m2!1sen!2sus"
          width="375"
          height="415"
          loading="lazy"
          style={{
            objectFit: "cover",
            padding: "0",
          }}
        ></iframe>
      </div>
    </div>
  );
};
export default MapAndNews;
