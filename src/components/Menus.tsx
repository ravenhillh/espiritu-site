import SalsaMenu from "./SalsaMenu";
import AppMenu from "./AppMenu";

export default function Menus() {
  return (
    <div style={{ textAlign: "center" }} className="menus">
      <h1>Our Menus</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          color: "black",
        }}
      >
        <button
          style={{
            backgroundColor: "white",
            padding: "10px 20px",
            border: "2px solid white",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Lunch and Dinner
        </button>
        <button
          style={{
            backgroundColor: "white",
            padding: "10px 20px",
            border: "2px solid white",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Happy Hour
        </button>
        <button
          style={{
            backgroundColor: "white",
            padding: "10px 20px",
            border: "2px solid white",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Special Events and Private Parties
        </button>
      </div>{" "}
      <p
        style={{
          color: "#0066cc",
          fontSize: "24px",
          marginTop: "20px",
          maxWidth: "800px",
          margin: "20px auto",
          lineHeight: "1.5",
        }}
      >
        All items are gluten free except the tortas, tres leches, and choco
        flan. We have a dedicated fryer that only uses corn and rice flour.
        Staff is trained on cross contamination.
      </p>
      <div className="menu-grid">
        <SalsaMenu />
        <AppMenu />
      </div>{" "}
    </div>
  );
}
