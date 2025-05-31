const WineMenu = () => {
  const wineSections = [
    {
      section: "Sparkling",
      items: [
        {
          name: "Cava",
          price: "$9.00/Glass  $36.00/Bottle",
          description: "Campo Viejo, Spain",
        },
      ],
    },
    {
      section: "White",
      items: [
        {
          name: "Chenin Blanc",
          price: "$15.00/Glass  $60.00/Bottle",
          description: "LA Cetto, MX",
        },
        {
          name: "Chardonnay (Unoaked)",
          price: "$12.00/Glass  $50.00/Bottle",
          description: "Villa Monte, MX",
        },
        {
          name: "Criolla Blanca",
          price: "$10.00/Glass  $45.00/Bottle",
          description: "La Cayetana, Argentina",
        },
        {
          name: "Pinot Grigio",
          price: "$9.00/Glass  $40.00/Bottle",
          description: "Minimalista, Argentina",
        },
      ],
    },
    {
      section: "Red",
      items: [
        {
          name: "Cabernet Sauvignon",
          price: "$15.00/Glass  $60.00/Bottle",
          description: "LA Cetto, MX",
        },
        {
          name: "Gloria Syrah",
          price: "$15.00/Glass  $60.00/Bottle",
          description: "Ver Sacrum, Argentina",
        },
        {
          name: "Syrah",
          price: "$15.00/Glass  $60.00/Bottle",
          description: "Ver Sacrum, Argentina",
        },
        {
          name: "Malbec",
          price: "$9.00/Glass  $40.00/Bottle",
          description: "Minimalista, Argentina",
        },
      ],
    },
  ];

  return (
    <div className="drink-menu-container">
      {wineSections.map((section, index) => (
        <div key={index} className="drink-menu-section">
          <h2 className="drink-menu-section-title">{section.section}</h2>
          {section.items.map((item, idx) => (
            <div key={idx} style={{ marginBottom: "20px" }}>
              <div className="drink-menu-item">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
              <p className="drink-menu-item-description">{item.description}</p>
              <hr style={{ borderColor: "#333", marginTop: "10px" }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WineMenu;
