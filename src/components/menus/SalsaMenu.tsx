const SalsaMenu = () => {
  const salsas = [
    { name: "Roasted Tomatillo", price: "$3.00", heat: "Mild" },
    { name: "Molcajete Roasted Tomato", price: "$3.00", heat: "Medium" },
    { name: "Pineapple Arbol", price: "$3.00", heat: "Spicy" },
    { name: "Flight of Three Salsas", price: "$9.00" },
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
    </div>
  );
};

export default SalsaMenu;
