import EspiIcon from "../assets/espi.jpg";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "white" }}>
      <div
        className="footer-content"
        style={{
          display: "flex",
          gap: "200px",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <div
          className="footer-hours"
          style={{
            display: "flex",
            // gap: "10px",
            justifyContent: "center",
            flexDirection: "column",
            fontSize: "14px",
            color: "black",
          }}
        >
          <h2>Hours</h2>
          <p>Monday - Friday: 11:00 AM - 9:00 PM</p>
          <p>Saturday: 12:00 PM - 9:00 PM</p>
          <p>Sunday: 12:00 PM - 8:00 PM</p>
        </div>{" "}
        <div
          className="footer-contact"
          style={{ fontSize: "14px", color: "black" }}
        >
          <h2>Address</h2>
          <p>520 Capdeville Street, New Orleans, LA 70130</p>
          <p>Phone: (504) 309-6888</p>
          <p>Email: info@espi.com</p>
        </div>
        <div className="footer-logo">
          <img src={EspiIcon} alt="Espi Icon" style={{ width: "250px" }} />
        </div>
      </div>
      <div className="footer-bottom" style={{ textAlign: "center" }}>
        <p>&copy; 2023 Espi. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
