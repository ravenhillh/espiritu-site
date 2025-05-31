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
    <div className="drink-menu-container">
      {softDrinkSection.map((section, index) => (
        <div key={index} className="drink-menu-section">
          <h2 className="drink-menu-section-title">{section.section}</h2>
          {section.items.map((item, idx) => (
            <div key={idx} style={{ marginBottom: "20px" }}>
              <div className="drink-menu-item">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
              <hr style={{ borderColor: "#333", marginTop: "10px" }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SoftDrinksMenu;
