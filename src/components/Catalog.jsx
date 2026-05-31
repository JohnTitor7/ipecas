import ProductCard from "./ProductCard";

function Catalog({ search, setSearch, products }) {
  const hasProducts = products.length > 0;

  return (
    <section id="catalogo" style={catalogSectionStyle}>
      <div style={catalogHeaderStyle}>
        <div>
          <div style={sectionLabelWrapperStyle}>
            <span style={sectionIconStyle}>▣</span>
            <p style={labelStyle}>Destaques</p>
          </div>

          <h2 style={titleStyle}>Produtos em destaque</h2>

          <p style={descriptionStyle}>
            Consulte peças, acessórios, preços e disponibilidade diretamente
            pelo WhatsApp.
          </p>
        </div>

        <a href="#catalogo" style={viewAllStyle}>
          Ver todos os produtos →
        </a>
      </div>

      <div style={searchBoxStyle}>
        <input
          type="text"
          placeholder="Buscar por peça, marca, modelo ou categoria..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          style={searchInputStyle}
        />
      </div>

      {hasProducts ? (
        <div style={productsGridStyle}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={emptyStateStyle}>
          <h3 style={emptyTitleStyle}>Nenhum produto encontrado</h3>

          <p style={emptyTextStyle}>
            Não encontramos nenhum produto com esse termo. Tente buscar por
            marca, modelo ou categoria.
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            style={clearButtonStyle}
          >
            Limpar busca
          </button>
        </div>
      )}
    </section>
  );
}

const catalogSectionStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "20px 32px 50px",
};

const catalogHeaderStyle = {
  marginBottom: "22px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "20px",
  flexWrap: "wrap",
};

const sectionLabelWrapperStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "6px",
};

const sectionIconStyle = {
  color: "#dc2626",
  fontSize: "15px",
};

const labelStyle = {
  color: "white",
  fontWeight: "bold",
  margin: 0,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  fontSize: "18px",
};

const titleStyle = {
  fontSize: "30px",
  margin: 0,
  color: "white",
};

const descriptionStyle = {
  color: "#aaa",
  marginTop: "8px",
  fontSize: "15px",
};

const viewAllStyle = {
  color: "#dc2626",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "15px",
};

const searchBoxStyle = {
  backgroundColor: "#111",
  border: "1px solid #2a2a2a",
  borderRadius: "16px",
  padding: "16px",
  marginBottom: "24px",
};

const searchInputStyle = {
  width: "100%",
  padding: "15px 16px",
  borderRadius: "12px",
  border: "1px solid #333",
  backgroundColor: "#050505",
  color: "white",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const productsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: "18px",
};

const emptyStateStyle = {
  backgroundColor: "#111",
  border: "1px solid #333",
  borderRadius: "18px",
  padding: "40px",
  textAlign: "center",
};

const emptyTitleStyle = {
  color: "white",
  marginTop: 0,
  fontSize: "24px",
};

const emptyTextStyle = {
  color: "#aaa",
  marginBottom: "24px",
};

const clearButtonStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Catalog;