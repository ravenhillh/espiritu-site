import { Outlet, NavLink } from "react-router-dom";

const Drinks = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw", // ensures full viewport width
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "40px 20px",
        paddingTop: "100px", // adds padding to the top to push the content down
        textAlign: "center",
        backgroundColor: "black", // or your preferred color
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ marginBottom: "30px", color: "white" }}>Our Drinks</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {[
          "beer",
          "spirits",
          "cocktails",
          "wine",
          "coffee and tea",
          "soft drinks",
          "happy hour",
        ].map((type) => (
          <NavLink
            key={type}
            to={type}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#2563eb" : "white",
              color: isActive ? "white" : "black",
              padding: "10px 20px",
              border: "2px solid white",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            })}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </NavLink>
        ))}
      </div>

      <hr style={{ width: "80%", marginBottom: "30px", borderColor: "gray" }} />
      <Outlet />
    </div>
  );
};

export default Drinks;
