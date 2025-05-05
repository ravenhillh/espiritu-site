const PartyMenu = () => {
  const items = [
    {
      name: "All the Meats",
      price: "$60.00/Per Person",
      description:
        "Salsa, guacamole, queso, carne asada taco, pulled pork taco, chicken taco, ceasar salad, beans, rice, elote, choice of dessert",
    },
    {
      name: "Seafood Lovers",
      price: "$60.00/Per Person",
      description:
        "Salsa, guacamole, queso, crispy shrimp taco, baja fish taco, sweet potato taco, ceasar salad, beans, rice, elote, choice of dessert",
    },
    {
      name: "Tacos Authenticos",
      price: "$60.00/Per Person",
      description:
        "Salsa, guacamole, queso, birria taco, lengua taco, cochinita pibil taco, ceasar salad, beans, rice, elote, choice of dessert",
    },
    {
      name: "Premium Taco Dinner",
      price: "$60.00/Per Person",
      description:
        "Salsa, guacamole, queso, carne asada taco, crispy shrimp taco, birria taco, ceasar salad, beans, rice, elote, choice of dessert",
    },
    {
      name: "Vegetarian Dinner",
      price: "$50.00/Per Person",
      description:
        "Salsa, guacamole, tortilla soup, sweet potato taco, mushroom tinga taco, rajas tacos, house pickled vegetable plate, beans, rice, elote, choice of dessert",
    },
    {
      name: "Vegan Dinner",
      price: "$50.00/Per Person",
      description:
        "Salsa, guacamole, tortilla soup, cauliflower taco, mushroom tinga taco, rajas tacos, house pickled vegetable plate, beans, rice, choice of dessert",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title">Prix Fixe Family Style</h2>
      <p className="menu-subtitle">Easy access menus for groups</p>
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

export default PartyMenu;
