// import EspiIcon from "../assets/espi.jpg";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer">
        <div className="footer-content">
          <h2>LOCATION</h2>
          <p>520 Capdeville Street, New Orleans, LA 70130</p>
          <p>Phone: (504) 309-6888</p>
          <p>Email: info@espi.com</p>
        </div>
        <div className="footer-content">
          <h2>HOURS</h2>
          <p>Monday - Friday: 11:00 AM - 9:00 PM</p>
          <p>Saturday: 12:00 PM - 9:00 PM</p>
          <p>Sunday: 12:00 PM - 8:00 PM</p>
        </div>{" "}
      </div>
      <div className="footer-content">
        <div className="socials-container">
          <h2 style={{ whiteSpace: "nowrap" }}>FIND US ON...</h2>
          <div className="footer-socials">
            <a href="https://www.facebook.com/espiritunola">
              <FaFacebook />
            </a>

            <a href="https://www.instagram.com/espiritunola">
              <FaInstagram />
            </a>

            <a href="https://www.yelp.com/biz/esp%C3%ADritu-mezcaleria-new-orleans">
              <FaYelp />
            </a>
          </div>
        </div>
        <div className="contact-us">
          <h2>CONTACT US</h2>
          <p>espiritunola@gmail.com</p>
          <p>(504) 267-4975</p>
        </div>
      </div>
      <div className="footer-bottom" style={{ textAlign: "center" }}>
        <p>&copy; 2023 Espi. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
