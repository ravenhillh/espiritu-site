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
    </div>
  );
};

export default TortaMenu;
