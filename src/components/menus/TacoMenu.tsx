const TacoMenu = () => {
  const items = [
    {
      name: "Crispy Shrimp",
      price: "$18.00",
      description:
        "3 Crispy Shrimp Tacos with Mango habanero aioli, pickled onion",
    },
    {
      name: "Baja Fish",
      price: "$15.00",
      description:
        "3 Tempura Fried Fish tacos with Napa cabbage slaw, chipotle aioli",
    },
    {
      name: "Lengua",
      price: "$18.00",
      description: "3 Marinated beef tongue tacos with yellow mole, jicama",
    },
    {
      name: "Carne Asada",
      price: "$18.00",
      description:
        "3 Marinated flank steak tacos with macha salsa, cilantro, onions",
    },
    {
      name: "Cochinita Pibil",
      price: "$15.00",
      description:
        "3 Marinated pulled pork tacos with pickled onions, cilantro",
    },
    {
      name: "Chicken Tinga",
      price: "$13.00",
      description: "3 Marinated chicken tacos with diced onions, cilantro",
    },
    {
      name: "Sweet Potato",
      price: "$12.00",
      description:
        "3 Sweet potato tacos with black beans, soyrizo, cotija cheese, pico",
    },
    {
      name: "Cauliflower",
      price: "$15.00",
      description:
        "3 Cauliflower tacos with walnut habanero crema, pepitas, pickled beets, chimichurri, and cilantro (vegan)",
    },
    {
      name: "Mushroom Tinga",
      price: "$15.00",
      description:
        "3 tacos: locally harvested oyster mushrooms in house tinga sauce topped with onion and cilantro (vegan)",
    },
    {
      name: "Rajas",
      price: "$15.00",
      description:
        "3 tacos: poblano, soyrizo, pickled onion, corn in a spicy verde salsa (vegan)",
    },
    {
      name: "Birria",
      price: "$18.00",
      description:
        "3 tacos: lamb barbacoa and queso chihuahua grilled in the barbacoa consume, served with consume on the side for dipping, onion, and cilantro.",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title">Tacos</h2>
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

export default TacoMenu;
