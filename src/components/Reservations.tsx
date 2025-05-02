const Reservations = () => {
  return (
    <section className="reservations-section">
      <h2 className="reservations-title">RESERVATIONS</h2>
      <p className="reservations-text">
        Call us at (504)-267-4975 or book a table through Resy reservations:
      </p>
      <a
        className="resy-button"
        href="https://resy.com/" // replace with your actual Resy link
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now <span className="resy-label">RESY</span>
      </a>
    </section>
  );
};

export default Reservations;
