function CatalogSidebar({ selectedCategory, onSelectCategory }) {
  const categories = [
    "Todos",
    "Telas",
    "Baterias",
    "Conectores",
    "Películas",
    "Capas",
    "Cabos",
    "Acessórios",
  ];

  return (
    <aside style={sidebarStyle}>
      <h3 style={titleStyle}>Categorias</h3>

      <div style={categoryListStyle}>
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              style={{
                ...categoryButtonStyle,
                backgroundColor: isActive ? "#dc2626" : "transparent",
                color: isActive ? "white" : "#ddd",
                borderColor: isActive ? "#dc2626" : "#333",
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div style={infoBoxStyle}>
        <p style={infoTitleStyle}>Consulta rápida</p>

        <p style={infoTextStyle}>
          Confira preço e disponibilidade dos produtos antes de chamar no
          WhatsApp.
        </p>
      </div>
    </aside>
  );
}

const sidebarStyle = {
  backgroundColor: "#111",
  border: "1px solid #333",
  borderRadius: "20px",
  padding: "20px",
  height: "fit-content",
};

const titleStyle = {
  color: "white",
  fontSize: "20px",
  margin: "0 0 18px",
};

const categoryListStyle = {
  display: "grid",
  gap: "10px",
};

const categoryButtonStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid #333",
  cursor: "pointer",
  textAlign: "left",
  fontWeight: "bold",
  fontSize: "14px",
};

const infoBoxStyle = {
  marginTop: "22px",
  padding: "16px",
  backgroundColor: "#050505",
  border: "1px solid #222",
  borderRadius: "14px",
};

const infoTitleStyle = {
  color: "#dc2626",
  fontWeight: "bold",
  margin: "0 0 8px",
};

const infoTextStyle = {
  color: "#aaa",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: 0,
};

export default CatalogSidebar;