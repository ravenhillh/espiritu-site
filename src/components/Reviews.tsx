import skulls from "../assets/skulls.jpg";

const Reviews = () => {
  return (
    <div>
      <div
        className="reviews"
        style={{
          backgroundImage: `url(${skulls})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backgroundBlendMode: "overlay",
          opacity: "0.9",
        }}
      >
        <h1 style={{ color: "black", textAlign: "center", paddingTop: "30px" }}>
          Reviews
        </h1>
        <div>
          <p
            style={{ color: "black", textAlign: "center", paddingTop: "30px" }}
          >
            "The tacos here are to die for! The flavors are amazing and the
            service is top-notch. I highly recommend this place to anyone who
            loves tacos!"
            <br />- John Doe
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Reviews;
