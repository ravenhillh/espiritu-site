import skulls from "../assets/skulls.jpg";

const Reservations = () => {
  return (
    <section
      className="reservations-section"
      style={{
        backgroundImage: `url(${skulls})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backgroundBlendMode: "overlay",
        opacity: "0.9",
        maxHeight: "100vh",
      }}
    >
      <h2 className="reservations-title">RESERVATIONS</h2>
      <p className="reservations-text">
        Call us at (504)-267-4975 or book a table through Resy reservations:
      </p>
      <a
        className="resy-button"
        href="https://resy.com/cities/new-orleans-la/venues/espiritu?date=2025-05-30&seats=2" // replace with your actual Resy link
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now <span className="resy-label">RESY</span>
      </a>
    </section>
  );
};

export default Reservations;
