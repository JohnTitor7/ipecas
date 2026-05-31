import ProductCard from "./ProductCard";

function Catalog({ products }) {
  const hasProducts = products.length > 0;

  return (
    <section id="catalogo" style={catalogSectionStyle}>
      <div style={catalogHeaderStyle}>
        <div>
          <div style={sectionLabelWrapperStyle}>
            <span style={sectionIconStyle}>▣</span>
            <p style={labelStyle}>Destaques</p>
          </div>
        </div>

        <a href="#catalogo" style={viewAllStyle}>
          Ver todos →
        </a>
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
        </div>
      )}
    </section>
  );
}

const catalogSectionStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "10px 32px 50px",
};

const catalogHeaderStyle = {
  marginBottom: "14px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
};

const sectionLabelWrapperStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
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
  fontSize: "20px",
};

const viewAllStyle = {
  color: "#dc2626",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "14px",
  whiteSpace: "nowrap",
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
  marginBottom: 0,
};

export default Catalog;