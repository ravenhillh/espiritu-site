const BeerMenu = () => {
  const beerSections = [
    {
      section: "Draft",
      items: [
        {
          name: "Modelo Especial",
          price: "$7.00",
          description: "Lager, Mexico",
        },
        {
          name: "Mardi Gras Pilsner",
          price: "$8.00",
          description: "Local, Urban South, Pilsner, New Orleans",
        },
        {
          name: "Southern Pecan",
          price: "$8.00",
          description: "Lazy Magnolia, Brown Ale, MS",
        },
        {
          name: "Paradise Park",
          price: "$7.00",
          description: "Local, Urban South, Lager, New Orleans",
        },
        {
          name: "Desert Mirage Hazy IPA",
          price: "$8.00",
          description: "Shiner, Tex Hex, IPA, TX",
        },
        {
          name: "Steigle Grapefruit",
          price: "$7.00",
          description: "Radler, Austria",
        },
      ],
    },
    {
      section: "Packaged",
      items: [
        {
          name: "Bohemia",
          price: "$7.00",
          description: "Pilsner, Mexico, BTL",
        },
        {
          name: "Pacifico",
          price: "$7.00",
          description: "Pilsner, Mazatlan, MX, BTL",
        },
        {
          name: "Modelo Negra",
          price: "$7.00",
          description: "Dark Lager, Mexico, BTL",
        },
        {
          name: "Tecate",
          price: "$5.00",
          description: "Pale Lager, Baja Peninsula, MX, Can",
        },
        {
          name: "Minerva",
          price: "$7.00",
          description: "Light Lager, Guadalajara, MX, Can",
        },
        {
          name: "Lagunitas NA IPA",
          price: "$6.00",
          description: "Non-Alcohol IPA, CA",
        },
        {
          name: "Corona NA",
          price: "$5.00",
          description: "Non-Alcohol Lager, MX, BTL",
        },
      ],
    },
  ];

  return (
    <div className="drink-menu-container">
      {beerSections.map((section, index) => (
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

export default BeerMenu;
