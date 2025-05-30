import image1 from "../assets/image4.jpeg";
import image2 from "../assets/image5.jpeg";
import image3 from "../assets/image6.jpeg";
import { useEffect, useState } from "react";
const Landing = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];
  const links = ["Reservations", "Menu", "About"];
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
        <div className="carousel-container">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="carousel-image"
          />
          <div className="carousel-content">
            <div className="carousel-message">{messages[currentImage]}</div>
            <a
              href={`/${links[currentImage].toLowerCase()}`}
              className="carousel-link"
            >
              {links[currentImage]}
            </a>
          </div>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                style={{
                  width: "3px",
                  height: "3px",
                  borderRadius: "5%",
                  border: "none",
                  background:
                    currentImage === index
                      ? "white"
                      : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  outline: "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
