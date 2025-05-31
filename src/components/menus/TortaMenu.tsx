const TortaMenu = () => {
  const items = [
    {
      name: "Carne Asada",
      price: "$16.00",
      description: "Flank steak, avocado, chimichurri, pickled onion",
    },
    {
      name: "Chicken Adobo",
      price: "$14.00",
      description:
        "Adobo marinated chicken, black beans, napa cabbage slaw, avocado",
    },
    {
      name: "Cochinita Pibil Torta",
      price: "$14.00",
      description:
        "Yucatan marinated pulled pork, chipotle mayo, onions, cilantro",
    },
    {
      name: "Birria",
      price: "$19.00",
      description:
        "Lamb barbocoa, lamb consume, pickled onion, arugala, cilantro, tomato, served with consume for dipping.",
    },
  ];
  const platos = [
    {
      name: "Lamb Mole",
      price: "$22.00",
      description:
        "Slow cooked lamb in homemade mole negro over Mexican rice. Topped with pepitas and cilantro. Served with side of tortillas.",
    },
    {
      name: "Tijuana Caesar Salad",
      price: "$12.00",
      description: "Little gems lettuce, housemade caesar dressing, cotija",
    },
    {
      name: "Cheese Chile Relleno",
      price: "$16.00",
      description:
        "Lightly fried poblano pepper stuffed with cheese and topped with relleno salsa, served with side salad, rice, and tortillas",
    },
    {
      name: "Chile Relleno with Beef Picadillo",
      price: "$22.00",
      description:
        "Lightly fried poblano pepper stuffed with house ground beef, vegetables, herbs and spices topped in relleno salsa. Served with side salad, Mexican rice, and tortillas.",
    },
    {
      name: "Tortilla Soup",
      price: "$11.00",
      description:
        "Bowl of our famous vegetable soup topped with avocado, queso fresco, and crispy tortilla strips. Vegan without the cheese.",
    },
    {
      name: "Pozole",
      price: "$16.00",
      description: "Pork pozole rojo. Hominy soup with cabbage and radish",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title">Tortas (Sandwiches)</h2>
      <p className="menu-note">
        Mexico City style sandwiches, all served with fries
      </p>
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
      <h2 className="menu-title">Platos</h2>
      <ul className="menu-list">
        {platos.map((item, index) => (
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

export default TortaMenu;
