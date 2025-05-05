const CoffeeTeaMenu = () => {
  const coffeeTeaSections = [
    {
      section: "Coffee",
      items: [
        {
          name: "Drip Coffee",
          price: "$4.00",
          description: "Cafe Bustello drip coffee.",
        },
      ],
    },
    {
      section: "Tea",
      items: [
        {
          name: "Hot Tea",
          price: "$4.00",
          description:
            "Variety of flavors of herbal (caffeine free), as well as green and black",
        },
        {
          name: "Iced Tea",
          price: "$3.00",
          description: "Unsweetened Louisiana tea",
        },
        {
          name: "Sweet Tea",
          price: "$3.00",
          description: "Sweetened Louisiana tea",
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
      {coffeeTeaSections.map((section, index) => (
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
              <p
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
              </p>
              <hr style={{ borderColor: "#333", marginTop: "10px" }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CoffeeTeaMenu;
