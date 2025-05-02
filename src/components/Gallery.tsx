import { useState } from "react";
import foodpic1 from "../assets/foodpic1.jpeg";
import foodpic2 from "../assets/foodpic2.jpeg";
import foodpic3 from "../assets/foodpic3.jpeg";
import foodpic4 from "../assets/foodpic4.jpeg";
import foodpic5 from "../assets/foodpic5.jpeg";
import foodpic6 from "../assets/foodpic6.jpeg";
import foodpic7 from "../assets/foodpic7.jpeg";
import foodpic8 from "../assets/foodpic8.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="gallery">
      <div
        className="gallery-images"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <img
          src={foodpic1}
          alt="Food 1"
          style={{ width: "23%", cursor: "pointer" }}
          onClick={() => handleImageClick(foodpic1)}
        />
        <img
          src={foodpic2}
          alt="Food 2"
          style={{ width: "23%", cursor: "pointer" }}
          onClick={() => handleImageClick(foodpic2)}
        />
        <img
          src={foodpic3}
          alt="Food 3"
          style={{ width: "23%", cursor: "pointer" }}
          onClick={() => handleImageClick(foodpic3)}
        />
        <img
          src={foodpic4}
          alt="Food 4"
          style={{ width: "23%", cursor: "pointer" }}
          onClick={() => handleImageClick(foodpic4)}
        />
        <img
          src={foodpic5}
          alt="Food 5"
          style={{ width: "23%", cursor: "pointer" }}
          onClick={() => handleImageClick(foodpic5)}
        />
        <img
          src={foodpic6}
          alt="Food 6"
          style={{ width: "23%", cursor: "pointer" }}
          onClick={() => handleImageClick(foodpic6)}
        />
        <img
          src={foodpic7}
          alt="Food 7"
          style={{ width: "23%", cursor: "pointer" }}
          onClick={() => handleImageClick(foodpic7)}
        />
        <img
          src={foodpic8}
          alt="Food 8"
          style={{ width: "23%", cursor: "pointer" }}
          onClick={() => handleImageClick(foodpic8)}
        />
      </div>
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
          onClick={() => setSelectedImage("")}
        >
          <img
            src={selectedImage}
            alt="Selected food"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
};
export default Gallery;
