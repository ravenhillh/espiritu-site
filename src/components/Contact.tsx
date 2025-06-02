const Contact = () => {
  return (
    <div className="contact-container" style={{ marginTop: "100px" }}>
      <div className="contact-content" style={{ maxWidth: "800px" }}>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have a question, a comment, or
          just want to say hello, we're here to listen.
        </p>
        <p>
          You can reach us by phone at (504) 267-4975 or by email at
          espiritunola@gmail.com.
        </p>
        <p>
          You can also find us on social media:
          <a
            href="https://www.facebook.com/espiritunola"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              marginLeft: "5px",
              marginRight: "5px",
              color: "white",
            }}
          >
            Facebook
          </a>
          and
          <a
            href="https://www.instagram.com/espiritunola"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              marginRight: "5px",
              color: "white",
              marginLeft: "5px",
            }}
          >
            Instagram
          </a>
          .
        </p>
        <p>We look forward to hearing from you!</p>
      </div>
    </div>
  );
};
export default Contact;
