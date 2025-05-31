const SingleTacos = () => {
  const items = [
    {
      name: "Chicken Tinga Taco",
      price: "$3.00",
      description: "Chicken in tinga sauce with onion and cilantro",
    },
    {
      name: "Cochinita Pibil Taco",
      price: "$3.00",
      description:
        "Yucatan style pulled pork taco with pineapple-arbol salsa and pickled onion",
    },
    {
      name: "Sweet Potato Taco",
      price: "$3.00",
      description:
        "Sweet potato and soyrizo taco with black beans, pico de gallo and cotija cheese",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title">A la Carte Tacos</h2>
      <p className="menu-subtitle">
        Tacos served individually so you can mix and match or just grab one
      </p>
      <ul className="menu-list">
        {items.map((item, index) => (
          <li key={index} className="menu-item">
            <div className="item-main" style={{ marginLeft: "0" }}>
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

export default SingleTacos;
