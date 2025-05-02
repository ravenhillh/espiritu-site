const EntreeMenu = () => {
  const items = [
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
      <h2 className="menu-title">Platos</h2>
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

export default EntreeMenu;
