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
    <div className="drink-menu-container">
      {coffeeTeaSections.map((section, index) => (
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

export default CoffeeTeaMenu;
