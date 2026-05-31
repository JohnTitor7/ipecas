import ProductCard from "./ProductCard";
import CatalogSidebar from "./CatalogSidebar";

function Catalog({ search, setSearch, products, selectedCategory, onSelectCategory }) {
  const hasProducts = products.length > 0;

  return (
    <section id="catalogo" style={catalogSectionStyle}>
      <div style={catalogHeaderStyle}>
        <div>
          <p style={labelStyle}>Catálogo</p>

          <h2 style={titleStyle}>Peças disponíveis</h2>

          <p style={descriptionStyle}>
            Consulte telas, baterias, conectores e acessórios disponíveis.
          </p>
        </div>

        <p style={counterStyle}>
          {products.length} produto{products.length !== 1 ? "s" : ""} encontrado
          {products.length !== 1 ? "s" : ""}
        </p>
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

      <div style={catalogLayoutStyle}>
        <CatalogSidebar
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />

        <div>
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
        </div>
      </div>
    </section>
  );
}

const catalogSectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px",
};

const catalogHeaderStyle = {
  marginBottom: "28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "20px",
  flexWrap: "wrap",
};

const labelStyle = {
  color: "#dc2626",
  fontWeight: "bold",
  margin: "0 0 8px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "14px",
};

const titleStyle = {
  fontSize: "34px",
  margin: 0,
  color: "white",
};

const descriptionStyle = {
  color: "#aaa",
  marginTop: "8px",
  fontSize: "15px",
};

const counterStyle = {
  color: "#aaa",
  margin: 0,
  fontSize: "14px",
};

const searchBoxStyle = {
  backgroundColor: "#111",
  border: "1px solid #333",
  borderRadius: "18px",
  padding: "18px",
  marginBottom: "28px",
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

const catalogLayoutStyle = {
  display: "grid",
  gridTemplateColumns: "260px 1fr",
  gap: "24px",
  alignItems: "start",
};

const productsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "22px",
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