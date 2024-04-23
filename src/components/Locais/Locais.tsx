import MapChart from "../Map/MapChart";

function Locais() {
  const mapMarkers: { coordinates: [number, number]; popupText: string }[] = [
    {
      coordinates: [-25.43063, -49.31693],
      popupText:
        "Parque Barigui: acesso pela BR-277 - Santo Inácio (no estacionamento em frente ao heliponto)",
    },
    {
      coordinates: [-25.39038, -49.22616],
      popupText:
        "Parque Bacacheri: Rua Dr. Eurico César de Almeida - Santa Cândida (acesso pela Rua Nicarágua)",
    },
    {
      coordinates: [-25.44146, -49.22049],
      popupText:
        "Rua da Cidadania Cajuru: Avenida Prefeito Maurício Fruet, 2150 - Cajuru",
    },
    {
      coordinates: [-25.38257, -49.26796],
      popupText:
        "Parque São Lourenço: Rua José Brusamolin, 125 - São Lourenço (acesso pela Rua Mateus Leme)",
    },
    {
      coordinates: [-25.40247, -49.30444],
      popupText: "Parque Tingui: Rua Professor Dario Garcia - Vista Alegre",
    },
    {
      coordinates: [-25.47597, -49.29165],
      popupText:
        "Praça Desembargador Carneiro: Rua Lourival Portella Natel - Portão (acesso pela Av. Presidente Kennedy)",
    },
    {
      coordinates: [-25.50528, -49.24769],
      popupText: "Praça dos Menonitas: Rua Antônio Kosovski, 3425 - Boqueirão",
    },
    {
      coordinates: [-25.46064, -49.24814],
      popupText:
        "Horto Municipal do Guabirotuba: Avenida Senador Salgado Filho, 947 - Guabirotuba",
    },
  ];

  return (
    <>
      <div>
        <MapChart markers={mapMarkers} />
      </div>
    </>
  );
}

export default Locais;
