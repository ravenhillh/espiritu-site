const SmallBites = () => {
  const items = [
    {
      name: "Salsa Flight",
      price: "$6.00",
      description:
        "Buy 2 salsas get 1 free on our house salsa flight of roasted tomato, tomatillo, and pineapple-arbol salsa",
    },
    {
      name: "Botanas Flight",
      price: "$12.00",
      description:
        "Sampler of our 3 most popular appetizers: guac, tomato salsa, and creole queso",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title">Small Bites</h2>
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

export default SmallBites;
