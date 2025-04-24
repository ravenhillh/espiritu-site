import image1 from "../assets/image4.jpeg";
import image2 from "../assets/image5.jpeg";
import image3 from "../assets/image6.jpeg";
import { useEffect, useState } from "react";
const Landing = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];
  const links = ["Reservations", "Menu", "Contact"];
  const messages = [
    "MEZCAL FOCUSED COCKTAIL MENU",
    "LOCAL INGREDIENTS",
    "AUTHENTIC MEXICAN FOOD",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev: number) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div>
      <div className="carousel">
        <div
          className="carousel-container"
          style={{ position: "relative", width: "100vw", height: "100vh" }}
        >
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              filter: "brightness(0.7)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px"
            }}
          >
            <div
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                whiteSpace: "nowrap",
                fontFamily: "'Press Start 2P', 'Rubik Mono One', 'Black Ops One', monospace"
              }}
            >
              {messages[currentImage]}
            </div>
            <a
              href={`/${links[currentImage].toLowerCase()}`}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "24px",
                padding: "10px 20px",
                background: "rgba(43, 81, 9, 0.5)",
                borderRadius: "5px",
              }}
            >
              {links[currentImage]}
            </a>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 2
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              style={{
                width: "6px",
                borderRadius: "25%",
                border: "none",
                background: currentImage === index ? "white" : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                outline: "none"
              }}            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
