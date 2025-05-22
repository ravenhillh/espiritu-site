const SalsaMenu = () => {
  const salsas = [
    { name: "Roasted Tomatillo", price: "$3.00", heat: "Mild" },
    { name: "Molcajete Roasted Tomato", price: "$3.00", heat: "Medium" },
    { name: "Pineapple Arbol", price: "$3.00", heat: "Spicy" },
    { name: "Flight of Three Salsas", price: "$9.00" },
  ];
  const cevicheItems = [
    {
      name: "Fish Ceviche",
      price: "$13.00",
      description:
        "Fresh Gulf catch in leche de tigre (coconut milk, lime, serrano pepper) served with cucumber, cilantro, onion, and tortilla chips",
    },
    {
      name: "Shrimp Agua Chile",
      price: "$14.00",
      description:
        "Gulf shrimp in a cucumber, lime, and jalapeno marinade served with jicama, pineapple, onion, cilantro, and tortilla chips.",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title">Salsas de la Casa</h2>
      <ul className="menu-list">
        {salsas.map((salsa, index) => (
          <li key={index} className="menu-item">
            <div className="item-main">
              <span className="item-name">{salsa.name}</span>
              <span className="item-price">{salsa.price}</span>
            </div>
            {salsa.heat && <div className="item-heat">{salsa.heat}</div>}
          </li>
        ))}
      </ul>
      <h2 className="menu-title">Ceviches</h2>
      <ul className="menu-list">
        {cevicheItems.map((item, index) => (
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

export default SalsaMenu;
