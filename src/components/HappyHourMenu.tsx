const HappyHourMenu = () => {
  const happyHourSections = [
    {
      section: "Margarita",
      items: [
        {
          name: "Classico Margarita",
          price: "$6.00",
          description:
            "Tequila Margarita made with Lunazul 100% agave tequila and fresh pressed lime with your choice of no rim, salt, or taijin",
        },
      ],
    },
    {
      section: "Beer",
      items: [
        {
          name: "Tecate",
          price: "$3.00/Canned",
          description: "Mexican Beer from the Baja Peninsula",
        },
        {
          name: "Mezcal and Beer Pairing",
          price: "$8.00",
          description:
            "1 oz of Buho Espadin Mezcal to sip along with a pint of Steigle Grapefruit Radler Beer",
        },
      ],
    },
    {
      section: "Wine",
      items: [
        {
          name: "Pinot Grigio",
          price: "$6.00",
          description: "Minimalista Vineyard from Argentina (white wine)",
        },
        {
          name: "Malbec",
          price: "$6.00",
          description: "Minimalista Vineyard from Argentina (red wine)",
        },
      ],
    },
  ];

  return (
    <div className="drink-menu-container">
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        Served weekdays 3pm to 6 pm
      </div>
      {happyHourSections.map((section, index) => (
        <div key={index} className="drink-menu-section">
          <h2 className="drink-menu-section-title">{section.section}</h2>
          {section.items.map((item, idx) => (
            <div key={idx} style={{ marginBottom: "20px" }}>
              <div className="drink-menu-item">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
              <p className="drink-menu-item-description">{item.description}</p>
              <hr style={{ borderColor: "#333", marginTop: "10px" }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HappyHourMenu;
