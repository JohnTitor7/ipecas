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
      </div>

      <div style={contentStyle}>
        <h3 style={productNameStyle}>{product.name}</h3>

        <p style={modelStyle}>{product.model}</p>

        <p style={priceStyle}>{product.price}</p>

        <p style={{ ...stockStyle, color: stockColor }}>{product.stock}</p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          style={buttonStyle}
        >
          <span style={buttonContentStyle}>
            <WhatsAppIcon />
            <span>Consultar no WhatsApp</span>
          </span>
        </a>
      </div>
    </article>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.11 17.21c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.44-.85-.76-1.42-1.7-1.58-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.17-.24-.58-.49-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.02.15.2 2.06 3.15 5 4.41.7.31 1.24.49 1.67.63.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.39-.07-.12-.27-.19-.56-.34Z" />
      <path d="M16.01 3.2c-6.99 0-12.67 5.67-12.67 12.65 0 2.23.58 4.41 1.68 6.32L3.2 28.8l6.81-1.79a12.67 12.67 0 0 0 6 1.52h.01c6.98 0 12.66-5.67 12.66-12.65 0-3.38-1.32-6.56-3.71-8.95A12.56 12.56 0 0 0 16.01 3.2Zm0 23.18h-.01a10.5 10.5 0 0 1-5.35-1.46l-.38-.22-4.04 1.06 1.08-3.94-.25-.4a10.42 10.42 0 0 1-1.62-5.58c0-5.78 4.71-10.49 10.51-10.49 2.81 0 5.45 1.09 7.43 3.07a10.42 10.42 0 0 1 3.08 7.42c0 5.79-4.71 10.5-10.45 10.5Z" />
    </svg>
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
  border: "1px solid #252525",
  borderRadius: "10px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  minHeight: "300px",
  boxShadow: "0 14px 30px rgba(0, 0, 0, 0.35)",
};

const imageWrapperStyle = {
  height: "145px",
  background:
    "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%), #111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const emptyImageStyle = {
  color: "#777",
  fontSize: "13px",
};

const contentStyle = {
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

const productNameStyle = {
  color: "white",
  fontSize: "14px",
  lineHeight: "1.25",
  margin: "0 0 4px",
};

const modelStyle = {
  color: "#aaa",
  fontSize: "12px",
  margin: "0 0 8px",
};

const priceStyle = {
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 4px",
};

const stockStyle = {
  fontSize: "12px",
  fontWeight: "bold",
  margin: "0 0 10px",
};

const buttonStyle = {
  marginTop: "auto",
  display: "block",
  width: "100%",
  backgroundColor: "transparent",
  color: "white",
  border: "1px solid #dc2626",
  textAlign: "center",
  textDecoration: "none",
  padding: "9px 10px",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "12px",
  boxSizing: "border-box",
};

const buttonContentStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

export default ProductCard;