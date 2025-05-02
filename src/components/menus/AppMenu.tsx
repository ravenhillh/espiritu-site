const AppMenu = () => {
  const items = [
    {
      name: "Guacamole",
      price: "$9.00",
      description: "Tomatoes, onion, cilantro, served with chips",
    },
    {
      name: "Creole Queso",
      price: "$12.00",
      description:
        "Crawfish, roasted poblano, pico, sour cream, served with chips",
    },
    {
      name: "Huitlacoche Quesadillas",
      price: "$16.00",
      description:
        "Mexican corn truffles, queso chihuahua, pico de gallo, set of 3",
    },
    {
      name: "Cheese Quesadilla",
      price: "$10.00",
      description:
        "Large tortilla filled with Chihuahua Cheese, served with pico, guac, and sour cream on the side. Add chicken pork, steak, or shrimp.",
    },
    {
      name: "Veraduras",
      price: "$7.00",
      description: "House pickled vegetables served escabeche style",
    },
    {
      name: "Cup Tortilla Soup",
      price: "$6.00",
      description:
        "Traditional vegetable soup topped with avocado, queso fresco, and crispy tortilla strips. Vegan without the cheese.",
    },
    {
      name: "Cup Pozole",
      price: "$8.00",
      description:
        "Traditional pork pozole rojo. Hominy soup with cabbage and radish.",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title">Botanas (Appetizers)</h2>
      <ul className="menu-list">
        {items.map((item, index) => (
          <li key={index} className="menu-item">
            <div className="item-main">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}</span>
            </div>
            <div className="item-description">{item.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppMenu;
