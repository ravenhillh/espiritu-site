const BeerMenu = () => {
  const beerSections = [
    {
      section: "Draft",
      items: [
        {
          name: "Modelo Especial",
          price: "$7.00",
          description: "Lager, Mexico",
        },
        {
          name: "Mardi Gras Pilsner",
          price: "$8.00",
          description: "Local, Urban South, Pilsner, New Orleans",
        },
        {
          name: "Southern Pecan",
          price: "$8.00",
          description: "Lazy Magnolia, Brown Ale, MS",
        },
        {
          name: "Paradise Park",
          price: "$7.00",
          description: "Local, Urban South, Lager, New Orleans",
        },
        {
          name: "Desert Mirage Hazy IPA",
          price: "$8.00",
          description: "Shiner, Tex Hex, IPA, TX",
        },
        {
          name: "Steigle Grapefruit",
          price: "$7.00",
          description: "Radler, Austria",
        },
      ],
    },
    {
      section: "Packaged",
      items: [
        {
          name: "Bohemia",
          price: "$7.00",
          description: "Pilsner, Mexico, BTL",
        },
        {
          name: "Pacifico",
          price: "$7.00",
          description: "Pilsner, Mazatlan, MX, BTL",
        },
        {
          name: "Modelo Negra",
          price: "$7.00",
          description: "Dark Lager, Mexico, BTL",
        },
        {
          name: "Tecate",
          price: "$5.00",
          description: "Pale Lager, Baja Peninsula, MX, Can",
        },
        {
          name: "Minerva",
          price: "$7.00",
          description: "Light Lager, Guadalajara, MX, Can",
        },
        {
          name: "Lagunitas NA IPA",
          price: "$6.00",
          description: "Non-Alcohol IPA, CA",
        },
        {
          name: "Corona NA",
          price: "$5.00",
          description: "Non-Alcohol Lager, MX, BTL",
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
      {beerSections.map((section, index) => (
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

export default BeerMenu;
