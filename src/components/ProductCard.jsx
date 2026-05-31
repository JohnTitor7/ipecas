function ProductCard({ product }) {
  const whatsappNumber = "5521995519228";

  const whatsappMessage = `Olá, tenho interesse na peça: ${product.name} - ${product.model}. Ainda está disponível?`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const stockColor = getStockColor(product.stock);

  return (
    <article style={cardStyle}>
      <div style={imageWrapperStyle}>
        {product.image ? (
          <img src={product.image} alt={product.name} style={imageStyle} />
        ) : (
          <span style={emptyImageStyle}>Sem imagem</span>
        )}

        <span style={categoryBadgeStyle}>{product.category}</span>
      </div>

      <div style={contentStyle}>
        <h3 style={productNameStyle}>{product.name}</h3>

        <p style={modelStyle}>{product.model}</p>

        <p style={brandStyle}>{product.brand}</p>

        <p style={priceStyle}>{product.price}</p>

        <p style={{ ...stockStyle, color: stockColor }}>{product.stock}</p>

        <a href={whatsappLink} target="_blank" rel="noreferrer" style={buttonStyle}>
          Consultar no WhatsApp
        </a>
      </div>
    </article>
  );
}

function getStockColor(stock) {
  if (stock === "Disponível") {
    return "#22c55e";
  }

  if (stock === "Últimas unidades") {
    return "#facc15";
  }

  if (stock === "Sob consulta") {
    return "#60a5fa";
  }

  if (stock === "Indisponível") {
    return "#ef4444";
  }

  return "#aaa";
}

const cardStyle = {
  background: "linear-gradient(180deg, #151515 0%, #0d0d0d 100%)",
  border: "1px solid #2a2a2a",
  borderRadius: "14px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  minHeight: "390px",
  boxShadow: "0 16px 35px rgba(0, 0, 0, 0.28)",
};

const imageWrapperStyle = {
  position: "relative",
  height: "190px",
  backgroundColor: "#f8f8f8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const emptyImageStyle = {
  color: "#777",
  fontSize: "14px",
};

const categoryBadgeStyle = {
  position: "absolute",
  top: "14px",
  right: "14px",
  backgroundColor: "#fee2e2",
  color: "#dc2626",
  padding: "6px 10px",
  borderRadius: "8px",
  fontSize: "11px",
  fontWeight: "bold",
  textTransform: "uppercase",
};

const contentStyle = {
  padding: "18px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

const productNameStyle = {
  color: "white",
  fontSize: "17px",
  lineHeight: "1.3",
  margin: "0 0 6px",
};

const modelStyle = {
  color: "#aaa",
  fontSize: "14px",
  margin: "0 0 8px",
};

const brandStyle = {
  color: "#777",
  fontSize: "13px",
  margin: "0 0 14px",
};

const priceStyle = {
  color: "white",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 8px",
};

const stockStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 16px",
};

const buttonStyle = {
  marginTop: "auto",
  display: "block",
  width: "100%",
  backgroundColor: "#dc2626",
  color: "white",
  textAlign: "center",
  textDecoration: "none",
  padding: "12px",
  borderRadius: "10px",
  fontWeight: "bold",
  boxSizing: "border-box",
};

export default ProductCard;