const SpiritsMenu = () => {
  const spiritsData = [
    {
      title: "Agave Angustifolia",
      subtypes: "Espadín, Castilla, Lineño, Cimarron, Pacifica, Espadincillo",
      items: [
        {
          name: "El Buho Espadín",
          price: "$6.00/1oz",
          description: "Santiago Matatlan, Oaxaca",
        },
        {
          name: "El Buho Espadín Capón",
          price: "$11.00/1oz",
          description: "Santiago Matatlan, Oaxaca",
        },
        {
          name: "Mal Bien Espadín",
          price: "$6.00/1oz",
          description: "San Dionisio Ocotepec, Oaxaca",
        },
        {
          name: "Mal Bien Zacate Limón",
          price: "$12.00/1oz",
          description:
            "San Dionisio Ocotepec, Oaxaca, Distilled with Lemongrass",
        },
        {
          name: "Xicaru Reposado",
          price: "$7.00/1oz",
          description: "Valles Central, Oaxaca, Barrel aged",
        },
        {
          name: "Vago Espadín de Joel Barriga",
          price: "$8.00/1oz",
          description: "Tapanala, Oaxaca",
        },
        {
          name: "Vago Elote",
          price: "$8.00/1oz",
          description: "Candelaria Yegolé, Oaxaca, Distilled with Corn",
        },
        {
          name: "El Jolgorio Espadín",
          price: "$15.00/1oz",
          description: "Miahuatlán, Oaxaca",
        },
        {
          name: "El Jolgorio Pechuga",
          price: "$21.00/1oz",
          description: "Santiago Matatlan, Oaxaca, Distilled with Turkey",
        },
        {
          name: "La Luna Espadincillo Iguana",
          price: "$12.00/1oz",
          description: "Zacapendo, Michoacan, Distilled with Iguana",
        },
        {
          name: "Pizcadores Bacanora",
          price: "$8.00/1oz",
          description: "Sonora",
        },
        {
          name: "Santo Cuviso Bacanora",
          price: "$12.00/1oz",
          description: "Sonora",
        },
        {
          name: "La Venenosa Etnica Tepe",
          price: "$28.00/1oz",
          description: "Las Cuevitas, Zacatecas",
        },
        {
          name: "La Venenosa Sierra de Amula Lineño/Cimarron",
          price: "$20.00/1oz",
          description: "Las Canoas, Jalisco",
        },
        {
          name: "Pal'alma Espadilla Capon Puebla",
          price: "$20.00/1oz",
          description: "Tepeojuma, Puebla",
        },
      ],
    },
    {
      title: "Agave Karwinskii",
      subtypes: "Cuishe, Madrecuishe, Tobasiche, Barril, Cirial",
      items: [
        {
          name: "Vago Madrecuishe de Emigdio Jarquin",
          price: "$16.00/1oz",
          description: "Miahuatlán, Oaxaca",
        },
        {
          name: "Akul Cirial",
          price: "$12.00/1oz",
          description: "Tlacolula, Oaxaca",
        },
        {
          name: "Rey Campero Madrecuishe",
          price: "$12.00/1oz",
          description: "Candelaria Yegolé, Oaxaca",
        },
        {
          name: "El Jolgorio Madrecuishe",
          price: "$16.00/1oz",
          description: "Santiago Matatlán, Oaxaca",
        },
        {
          name: "El Jolgorio Cuishe",
          price: "$16.00/1oz",
          description: "Santa María Zoquitlán, Oaxaca",
        },
        {
          name: "El Jolgorio Barril",
          price: "$15.00/1oz",
          description: "Ejutla, Oaxaca",
        },
      ],
    },
    {
      title: "Agave Durangensis",
      subtypes: "Cenizo",
      items: [
        {
          name: "Burrito Fiestero Cenizo",
          price: "$7.00/1oz",
          description: "San Nicolás, Durango",
        },
        {
          name: "Origen Raiz Pecho de Venado",
          price: "$25.00/1oz",
          description: "Malpaís, Durango, distilled with venison",
        },
        {
          name: "Lechuguilla Parejo Cenizo",
          price: "$14.00/1oz",
          description: "Las Escobas, Chihuahua",
        },
      ],
    },
    {
      title: "Agave Rhodocantha",
      subtypes: "Mexicano, Verde, Dobadan",
      items: [
        {
          name: "El Jolgorio Mexicano",
          price: "$16.00/1oz",
          description: "Ejutla, Oaxaca",
        },
        {
          name: "Mal Bien Verde",
          price: "$14.00/1oz",
          description: "Miahuatlán, Oaxaca",
        },
        {
          name: "Marca Negra Dobadan",
          price: "$13.00/1oz",
          description: "Santa María la Pila, Oaxaca",
        },
      ],
    },
    {
      title: "Agave Americana",
      subtypes: "Arroqueño, Coyote, Blanco",
      items: [
        {
          name: "El Buho Arroqueño",
          price: "$16.00/1oz",
          description: "Santiago Matatlán, Oaxaca",
        },
        {
          name: "Macurichos Maguey Blanco",
          price: "$20.00/1oz",
          description: "Santiago Matatlán, Oaxaca",
        },
      ],
    },
    {
      title: "Agave Marmorata",
      subtypes: "Tepeztate",
      items: [
        {
          name: "Hembra Tepeztate",
          price: "$16.00/1oz",
          description: "San Dionisio Ocotepec, Oaxaca",
        },
        {
          name: "Koch El Tepeztate",
          price: "$12.00/1oz",
          description: "San Baltazar Guelavila, Oaxaca",
        },
      ],
    },
    {
      title: "Agave Potatorum",
      subtypes: "Tobalá",
      items: [
        {
          name: "Carta de Amor desde Oaxaca",
          price: "$19.00/1oz",
          description: "Tlacolula, Oaxaca",
        },
        {
          name: "Hembra Tobalá",
          price: "$16.00/1oz",
          description: "San Dionisio Ocotepec, Oaxaca",
        },
      ],
    },
    {
      title: "Agave Convallis",
      subtypes: "Jabalí",
      items: [
        {
          name: "Rey Campero Jabalí",
          price: "$18.00/1oz",
          description: "Candelaria Yegolé, Oaxaca",
        },
      ],
    },
    {
      title: "Agave Inaequidens",
      subtypes: "Bruto, Alto",
      items: [
        {
          name: "La Luna Bruto",
          price: "$18.00/1oz",
          description: "Zacapendo, Michoacan",
        },
        {
          name: "La Venenosa Sierra del Tigre",
          price: "$22.00/1oz",
          description: "La Manzanilla, Jalisco",
        },
      ],
    },
    {
      title: "Agave Maximiliana",
      subtypes: "Masparillo",
      items: [
        {
          name: "La Venenosa Puntas",
          price: "$26.00/1oz",
          description: "Sierra Occidental, Jalisco",
        },
      ],
    },
    {
      title: "Agave Salmiana",
      subtypes: "Pulquero, Verde",
      items: [
        {
          name: "Cabalgadura",
          price: "$22.00/1oz",
          description: "Ahualulco, San Luis Potosí",
        },
      ],
    },
    {
      title: "Agave Tequilana",
      subtypes: "Blue Weber (Mezcal)",
      items: [
        {
          name: "Neta Tequilana Capón",
          price: "$26.00/1oz",
          description: "Logoche, Oaxaca",
        },
        {
          name: "Derrumbes Zacatecas",
          price: "$9.00/1oz",
          description: "Hacienda de Guadalupe, Zacatecas",
        },
      ],
    },
    {
      title: "Agave Sp.",
      subtypes: "Unclassified Agave",
      items: [
        {
          name: "La Luna Mansa Sahuayo",
          price: "$14.00/1oz",
          description: "Zacapendo, Michoacan",
        },
      ],
    },
    {
      title: "Ensamble",
      subtypes: "Blended Agaves",
      items: [
        {
          name: "Marca Negra Espadín/Sanmartín/Mexicano",
          price: "$12.00/1oz",
          description: "Ejutla, Oaxaca",
        },
        {
          name: "Gusto Histórico Espadín/Bicuixe",
          price: "$14.00/1oz",
          description: "Miahuatlán, Oaxaca",
        },
        {
          name: "Vago Espadín/Arroqueño/Mexicano",
          price: "$15.00/1oz",
          description: "Miahuatlán, Oaxaca",
        },
        {
          name: "Lalocura Pechuga Tobasiche/Espadín",
          price: "$18.00/1oz", // Price missing in original, estimated
          description: "Santa Catarina Minas, Oaxaca, Distilled with Chicken",
        },
        {
          name: "5 Sentidos Pechuga de Mole Poblano Pizorra/Papalome",
          price: "$21.00/1oz",
          description:
            "San Pablo Ameyaltepec, Puebla, Distilled with Chicken and Mole",
        },
        {
          name: "Derrumbes Michoacán Cupreata/Inaequidens",
          price: "$12.00/1oz",
          description: "Tzitzio, Michoacán",
        },
        {
          name: "Burrito Fiestero Verde/Cenizo",
          price: "$7.00/1oz",
          description: "San Nicolás, Durango",
        },
        {
          name: "Lechuguilla Parejo Juan Fernandez Wheeleri/Cenizo",
          price: "$14.00/1oz",
          description: "Las Escobas, Chihuahua",
        },
        {
          name: "Akul Madrecuishe/Tobalá/Arroqueño",
          price: "$12.00/1oz",
          description: "Tlacolula, Oaxaca",
        },
      ],
    },
    {
      title: "Dasylirion Wheeleri",
      subtypes: "Sotol, Cucharillo",
      items: [
        {
          name: "Riablo Blanco",
          price: "$5.00/1oz",
          description: "Aldama, Chihuahua",
        },
        {
          name: "Sotol Por Siempre",
          price: "$7.00/1oz",
          description: "Janos, Chihuahua",
        },
        {
          name: "Sotol Parejo Juan Fernandez Wheeleri",
          price: "$14.00/1oz",
          description: "Las Escobas, Chihuahua",
        },
        {
          name: "Erstwhile Cucharillo",
          price: "$14.00/1oz",
          description: "San Isidro Guishe, Oaxaca",
        },
      ],
    },
    {
      title: "Dasylirion Leiophyllum",
      subtypes: "Sotol, Cucharillo",
      items: [
        {
          name: "Sotol Parejo Familia Arrieta Leiophyllum",
          price: "$14.00/1oz",
          description: "Coyame, Chihuahua",
        },
        {
          name: "Colección Parejo Aroma",
          price: "$30.00/1oz",
          description: "Aldama, Chihuahua",
        },
        {
          name: "Colección Parejo Carney",
          price: "$30.00/1oz",
          description: "Aldama, Chihuahua, distilled with goat",
        },
        {
          name: "Flor del Desierto Cascabel",
          price: "$25.00/1oz", // Price missing in original, estimated
          description: "Coyame, Chihuahua, Distilled with Rattlesnake",
        },
      ],
    },
    {
      title: "Dasylirion Texanum",
      subtypes: "Sotol, Cucharillo",
      items: [
        {
          name: "La Higuera Texanum",
          price: "$14.00/1oz",
          description: "Aldama, Chihuahua",
        },
      ],
    },
    {
      title: "Dasylirion Serratifolium",
      subtypes: "Sotol, Cucharillo",
      items: [
        {
          name: "Gusto Histórico Cucharillo",
          price: "$18.00/1oz",
          description: "Miahuatlán, Oaxaca",
        },
      ],
    },
    {
      title: "Tequila Blanco",
      items: [
        {
          name: "Lunazul Blanco",
          price: "$5.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Lunazul El Humoso",
          price: "$6.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Lalo",
          price: "$10.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Alma de Jaguar Nocturna",
          price: "$12.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "El Tequileño Platinum",
          price: "$8.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "PM Spirits Still Strength",
          price: "$11.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Lágrimas del Valle Plata 2023",
          price: "$10.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Lágrimas del Valle Plata 2024",
          price: "$9.00/1oz",
          description: "Villamar, Michoacán",
        },
        {
          name: "Tequila Ocho Plata 2009",
          price: "$11.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Tequila Ocho Plata 2023",
          price: "$8.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Don Fulano Blanco",
          price: "$8.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Don Fulano Blanco Fuerte",
          price: "$9.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "4 Copas Blanco 110 Proof",
          price: "$10.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Divertido Blanco",
          price: "$6.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "ArteNOM Selección de 1579 Blanco",
          price: "$9.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Siembra Valles Blanco",
          price: "$9.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Chinaco Blanco",
          price: "$10.00/1oz",
          description: "Gonzalez, Tamaulipas",
        },
        {
          name: "Cabal Blanco",
          price: "$14.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Mi Casa Blanco",
          price: "$12.00/1oz", // Price missing in original, estimated
          description: "Altos, Michoacán",
        },
        {
          name: "Cierto Blanco",
          price: "$12.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Cierto Reserve Collection Blanco",
          price: "$12.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Fortaleza Blanco",
          price: "$9.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Fortaleza Still Strength",
          price: "$14.00/1oz",
          description: "Los Valles, Jalisco",
        },
      ],
    },
    {
      title: "Tequila Reposado",
      items: [
        {
          name: "Lunazul Reposado",
          price: "$6.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Lágrimas del Valle Reposado 2024",
          price: "$12.00/1oz",
          description: "Villamar, Michoacán",
        },
        {
          name: "Don Fulano Reposado",
          price: "$9.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "4 Copas Reposado",
          price: "$10.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "4 Copas Reposado 110 Proof",
          price: "$14.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Divertido Reposado",
          price: "$8.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Fortaleza Single Barrel Reposado",
          price: "$14.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "La Gritona Reposado",
          price: "$8.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Cierto Reposado",
          price: "$16.00/1oz",
          description: "Los Altos, Jalisco",
        },
      ],
    },
    {
      title: "Tequila Añejo",
      items: [
        {
          name: "Lunazul Añejo",
          price: "$8.00/1oz",
          description: "Los Valles, Jalisco",
        },
        {
          name: "Pasote Añejo",
          price: "$9.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "El Tequileño Añejo Gran Reserva",
          price: "$12.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Cierto Añejo",
          price: "$24.00/1oz",
          description: "Los Altos, Jalisco",
        },
        {
          name: "Fortaleza Añejo",
          price: "$17.00/1oz",
          description: "Los Valles, Jalisco",
        },
      ],
    },
    {
      title: "Tequila Extra Añejo",
      items: [
        {
          name: "Mi Casa Extra Añejo Single Barrel",
          price: "$63.00/1oz",
          description: "Altos, Michoacán",
        },
        {
          name: "Cierto Reserve Collection Extra Añejo",
          price: "$44.00/1oz",
          description: "Los Altos, Jalisco",
        },
      ],
    },
    {
      title: "Sugarcane",
      subtypes: "Rum, Pox, Cachaça",
      items: [
        {
          name: "Gustoso",
          price: "$5.00/1.5oz",
          description: "Michoacán",
        },
        {
          name: "Pelacañas",
          price: "$8.00/1.5oz",
          description: "Jalisco",
        },
        {
          name: "Alambique Serrano #6 Otoño",
          price: "$16.00/1.5oz",
          description: "Oaxaca",
        },
        {
          name: "Paranubes Añejo",
          price: "$15.00/1.5oz",
          description: "Oaxaca",
        },
        {
          name: "Siglo Cero Pox",
          price: "$11.00/1.5oz",
          description: "Chiapas",
        },
        {
          name: "Cachaça Canaviais",
          price: "$10.00/1.5oz", // Price missing in original, estimated
          description: "Brazil",
        },
      ],
    },
    {
      title: "Whiskey",
      items: [
        {
          name: "Sierra Norte White Corn",
          price: "$8.00/1.5oz",
          description: "Oaxaca",
        },
        {
          name: "Maíz Nation Whiskey Añejo",
          price: "$26.00/1.5oz",
          description: "Oaxaca",
        },
        {
          name: "Maíz Nation Whiskey Blanco",
          price: "$13.00/1.5oz",
          description: "Oaxaca",
        },
        {
          name: "Maíz Nation Selección Barbieri",
          price: "$30.00/1.5oz",
          description: "Oaxaca",
        },
        {
          name: "Jack Daniel's",
          price: "$9.00/1.5oz",
          description: "Tennessee",
        },
        {
          name: "Benchmark",
          price: "$5.00/1.5oz",
          description: "Kentucky",
        },
        {
          name: "Maker's Mark",
          price: "$8.00/1.5oz",
          description: "Kentucky",
        },
        {
          name: "Jameson",
          price: "$10.00/1.5oz",
          description: "Ireland",
        },
        {
          name: "Monkey Shoulder",
          price: "$9.00/1.5oz",
          description: "Scotland",
        },
        {
          name: "Laphroaig 10",
          price: "$13.00/1.5oz",
          description: "Scotland",
        },
      ],
    },
    {
      title: "Gin",
      items: [
        {
          name: "Tanqueray",
          price: "$7.00/1.5oz",
          description: "England",
        },
        {
          name: "Bombay Sapphire",
          price: "$9.00/1.5oz",
          description: "England",
        },
        {
          name: "Prima Rosa",
          price: "$13.00/1.5oz",
          description: "Baja",
        },
      ],
    },
    {
      title: "Vodka",
      items: [
        {
          name: "Weber Ranch Agave Vodka",
          price: "$7.00/1.5oz",
          description: "Texas",
        },
        {
          name: "Tito's",
          price: "$10.00/1.5oz",
          description: "Texas",
        },
        {
          name: "Ketel One",
          price: "$14.00/1.5oz",
          description: "Netherlands",
        },
        {
          name: "J.T. Meleck",
          price: "$6.00/1.5oz",
          description: "Louisiana",
        },
        {
          name: "Wódka",
          price: "$8.00/1.5oz", // Price missing in original, estimated
          description: "Poland",
        },
      ],
    },
    {
      title: "Brandy",
      items: [
        {
          name: "Camus VSOP",
          price: "$12.00/1.5oz",
          description: "France",
        },
        {
          name: "Hennessy VS",
          price: "$10.00/1.5",
          description: "France",
        },
        {
          name: "Singani 63",
          price: "$8.00/1.5oz",
          description: "Bolivia",
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
      {spiritsData.map((section, index) => (
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
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            {section.title}
            {section.subtypes && (
              <span
                style={{
                  fontSize: "14px",
                  color: "#d1d5db",
                  marginLeft: "8px",
                }}
              >
                {section.subtypes}
              </span>
            )}
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
              {item.description && (
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
              )}
              <hr style={{ borderColor: "#333", marginTop: "10px" }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SpiritsMenu;
