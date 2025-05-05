const SoftDrinksMenu = () => {
  const softDrinkSection = [
    {
      section: "Soft Drinks",
      items: [
        {
          name: "Coke",
          price: "$3.00",
          description: "Non-alcoholic",
        },
        {
          name: "Diet Coke",
          price: "$3.00",
          description: "Non-alcoholic",
        },
        {
          name: "Sprite",
          price: "$3.00",
          description: "Non-alcoholic",
        },
        {
          name: "Lemonaid",
          price: "$3.00",
          description: "Non-alcoholic",
        },
        {
          name: "Ginger Beer",
          price: "$3.00",
          description: "Non-alcoholic",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {softDrinkSection.map((section, index) => (
        <div
          key={index}
          style={{
            width: "400px",
            borderLeft: "2px solid white",
            paddingLeft: "20px",
          }}
        >
          <h2
            style={{
              fontFamily: "monospace",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            {section.section}
          </h2>
          {section.items.map((item, idx) => (
            <div key={idx} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
              {/* <p
                style={{
                  color: "#d1d5db",
                  margin: "4px 0 0",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontFamily: "monospace",
                  textAlign: "left",
                }}
              >
                {item.description}
              </p> */}
              <hr style={{ borderColor: "#333", marginTop: "10px" }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SoftDrinksMenu;
