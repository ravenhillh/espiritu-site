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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {wineSections.map((section, index) => (
        <div
          key={index}
          style={{
            width: "400px",
            borderLeft: "2px solid white",
            paddingLeft: "20px",
          }}
        >
          <h2
            style={{
              fontFamily: "monospace",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            {section.section}
          </h2>
          {section.items.map((item, idx) => (
            <div key={idx} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
              <p
                style={{
                  color: "#d1d5db",
                  margin: "4px 0 0",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontFamily: "monospace",
                  textAlign: "left",
                }}
              >
                {item.description}
              </p>
              <hr style={{ borderColor: "#333", marginTop: "10px" }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WineMenu;
