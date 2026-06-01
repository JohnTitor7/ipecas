import { ChevronLeft, ChevronRight } from "lucide-react";

import ProductCard from "./ProductCard";

function Catalog({ products }) {
  const hasProducts = products.length > 0;

  function scrollProducts(direction) {
    const carousel = document.getElementById("products-carousel");

    if (!carousel) {
      return;
    }

    const scrollAmount = 320;

    carousel.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

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

        <div style={headerActionsStyle}>
          <button
            type="button"
            onClick={() => scrollProducts("prev")}
            style={arrowButtonStyle}
            aria-label="Voltar produtos"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={() => scrollProducts("next")}
            style={arrowButtonStyle}
            aria-label="Avançar produtos"
          >
            <ChevronRight size={22} />
          </button>

          <a href="#catalogo" style={viewAllStyle}>
            Ver todos →
          </a>
        </div>
      </div>

      {hasProducts ? (
        <div id="products-carousel" style={productsCarouselStyle}>
          {products.map((product) => (
            <div key={product.id} style={carouselItemStyle}>
              <ProductCard product={product} />
            </div>
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
  padding: "22px 32px 56px",
};

const catalogHeaderStyle = {
  marginBottom: "18px",
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
  color: "white",
  margin: "10px 0 6px",
  fontSize: "30px",
};

const descriptionStyle = {
  color: "#aaa",
  margin: 0,
  fontSize: "15px",
};

const headerActionsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const arrowButtonStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "1px solid #333",
  backgroundColor: "#111",
  color: "white",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const viewAllStyle = {
  color: "#dc2626",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "14px",
  whiteSpace: "nowrap",
};

const productsCarouselStyle = {
  display: "flex",
  gap: "16px",
  overflowX: "auto",
  scrollBehavior: "smooth",
  paddingBottom: "14px",
  scrollbarWidth: "thin",
};

const carouselItemStyle = {
  minWidth: "220px",
  maxWidth: "220px",
  flex: "0 0 auto",
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