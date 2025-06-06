import skulls from "../assets/skulls.jpg";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Marcus DD",
      rating: 5,
      review:
        "So happy I stumbled into this restaurant during my first visit to NO, when you walk in you're greeted by an amazing atmosphere and decor. Plants and art make this place really stand out. The staff all were super nice, easy and willing to talk to. Then you get to the food, we tried the Creole Queso, which was amazing I could've sat and ordered it 5 more times, then we tried 3 of their tacos and I was so satisfied with the taste. This is probably one of the best restaurants in the area for locals and tourists alike. Will definitely return when I'm back in NO.",
    },
    {
      name: "Meaghan Kavanagh",
      rating: 4,
      review:
        "We enjoyed their salsas and veg tacos. The staff were super helpful with choosing between dishes. and the cocktails were very good! Would recommend if you're in the area.",
    },
    {
      name: "Kurtis J. Samchee",
      rating: 5,
      review:
        "Came for drinks and tacos. Note the certified mezcal staff! Good vibes. Got the beef tongue, fish, and birria tacos. All good.",
    },
    {
      name: "Doris Wong",
      rating: 5,
      review:
        "I'm glad I came! The cocktail was great, the food is awesome with the right portion, and the vibe is also great, well decorated. Absolutely glad that I came here and have a change of taste from Creole and seafood. The Baja fish is awesome, my friend has steak and chicken Tinga. Elote tastes great! I didn't like mezcal before but I absolutely like my drink here with Mezcal.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev: number) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div>
      <div
        className="reviews"
        style={{
          backgroundImage: `url(${skulls})`,
        }}
      >
        <h1 className="reviews-header">Reviews</h1>
        <div className="reviews-container">
          <div className="review-card">
            <h3 style={{ marginBottom: "10px", fontSize: "1.2em" }}>
              {reviews[currentReview].name}
            </h3>
            <div style={{ marginBottom: "15px" }}>
              {"★".repeat(reviews[currentReview].rating)}
            </div>
            <p className="review-text">{reviews[currentReview].review}</p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "none",
                  background:
                    currentReview === index ? "black" : "rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  outline: "none",
                }}
              />
            ))}
          </div>
          <a
            style={{
              color: "black",
              textDecoration: "underline",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            href="https://www.google.com/search?q=espiritu+new+orleans+reviews&rlz=1C5CHFA_enUS1128US1128&oq=espiritu+new+orleans+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMggIAhAAGBYYHjINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTINCAUQABiGAxiABBiKBTINCAYQABiGAxiABBiKBTINCAcQABiGAxiABBiKBdIBCDYxMzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x8620a7228db4dce7:0x30aaf2b5e165ccfd,1,,,,"
          >
            See more reviews...
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

export default Reviews;
