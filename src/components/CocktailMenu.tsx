const CocktailMenu = () => {
  const menuData = [
    {
      section: "Seasonal Cocktails",
      items: [
        {
          name: "Fresa Margarita",
          price: "$14.00",
          description: "Fresh local strawberries, lime, mezcal, basil salt",
        },
        {
          name: "Spritz Tropical",
          price: "$14.00",
          description:
            "Passionfruit, mango, pineapple, lemon, Mexican gin, sparkling wine",
        },
        {
          name: "Energizer Bunny",
          price: "$14.00",
          description: "Carrot, orange, ginger, tumeric, sotol",
        },
        {
          name: "Banana Rama",
          price: "$14.00",
          description:
            "Plantain oleo, Pineapple, Fresh plantain, Creme de banane, dark rum, mezcal",
        },
        {
          name: "Selena",
          price: "$15.00",
          description: "Mezcal, vermouth, Suze, creme de violette",
        },
        {
          name: "La Infante",
          price: "$15.00",
          description: "Nut-free orgeat, lime, rose water, mezcal",
        },
      ],
    },
    {
      section: "Signature Cocktails",
      items: [
        {
          name: "Carta de Amor",
          price: "$13.00",
          description: "Sweet plantain, cherry, lemon, hazelnut, mezcal",
        },
        {
          name: "Baja Bruja",
          price: "$14.00",
          description: "Basil, mint, lemon, damiana, mezcal",
        },
        {
          name: "Mezcal con Pepino",
          price: "$14.00",
          description: "Cucumber, serrano pepper, lime, mezcal",
        },
        {
          name: "Midnight Mariachi",
          price: "$12.00",
          description: "Jamaica, ginger, lime, mezcal",
        },
        {
          name: "Ososito",
          price: "$13.00",
          description: "Coconut milk, coffee liqueur, sweet plantain, mezcal",
        },
      ],
    },
    {
      section: "Margaritas",
      items: [
        {
          name: "Espíritu",
          price: "$13.00",
          description: "Lime, orange liqueur, mezcal",
        },
        {
          name: "Clasico",
          price: "$11.00",
          description: "Traditional with tequila",
        },
        {
          name: "Cadillac",
          price: "$25.00",
          description: "Lime, citronge, casamigos añejo",
        },
      ],
    },
    {
      section: "Classic Cocktails",
      items: [
        {
          name: "Mezcal Mule",
          price: "$13.00",
          description: "Ginger, soda, lime, mezcal",
        },
        {
          name: "Mezcal Old Fashioned",
          price: "$14.00",
          description: "Mole bitters, mezcal, orange peel",
        },
        {
          name: "Oaxacan Sazerac",
          price: "$12.00",
          description: "Peychaud bitters, absinthe, mezcal",
        },
        {
          name: "Mexican 75",
          price: "$12.00",
          description: "Sparkling wine, tequila, lime",
        },
        {
          name: "Jaliscan Daiquiri",
          price: "$12.00",
          description: "Lime, sugar, Pelecanas Rum",
        },
        {
          name: "Paloma",
          price: "$12.00",
          description: "Grapefruit, lime, tequila, soda",
        },
        {
          name: "El Diablo",
          price: "$15.00",
          description: "Cassis, lime, Angostura, reposado mezcal, gingerbeer",
        },
      ],
    },
    {
      section: "Zero Proof",
      items: [
        {
          name: "Strawberry Soda",
          price: "$6.00",
          description: "Fresh Ponchatoula strawberries, lemon, soda water",
        },
        {
          name: "Paper Tiger",
          price: "$6.00",
          description:
            "House fermented tepache infused with cilantro and serrano peppers. Tangy, herbal, and a bit spicy.",
        },
        {
          name: "Witches in the Garden",
          price: "$6.00",
          description: "Basil, lemon, saline, sparkling water",
        },
        {
          name: "Flor de Luz",
          price: "$7.00",
          description: "Pomegranate cordial, Cranberry, Mint, Tonic",
        },
        {
          name: "Agua Fresca",
          price: "$6.00",
          description:
            "Your choice of flavors: hibiscus, cucumber, strawberry, pandan, or lime",
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
      {menuData.map((section, index) => (
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

export default CocktailMenu;
