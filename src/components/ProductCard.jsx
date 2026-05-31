function ProductCard({ product }) {
  const whatsappNumber = "5521995519228";

  const whatsappMessage = `Olá, tenho interesse na peça: ${product.name} - ${product.model}. Ainda está disponível?`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const stockColor = getStockColor(product.stock);

  return (
    <article
      style={{
        backgroundColor: "#111",
        border: "1px solid #2a2a2a",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "0.2s ease",
      }}
    >
      <div
        style={{
          height: "210px",
          backgroundColor: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "18px",
          borderBottom: "1px solid #222",
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <span
            style={{
              color: "#777",
              fontSize: "14px",
            }}
          >
            Sem imagem
          </span>
        )}
      </div>

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(220, 38, 38, 0.12)",
              color: "#f87171",
              border: "1px solid rgba(220, 38, 38, 0.35)",
              padding: "5px 10px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {product.category}
          </span>
        </div>

        <h3
          style={{
            color: "white",
            fontSize: "19px",
            margin: "0 0 8px",
            lineHeight: "1.3",
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            color: "#888",
            fontSize: "14px",
            margin: "0 0 4px",
          }}
        >
          Marca: {product.brand}
        </p>

        <p
          style={{
            color: "#888",
            fontSize: "14px",
            margin: "0 0 16px",
          }}
        >
          Modelo: {product.model}
        </p>

        <div
          style={{
            marginTop: "auto",
          }}
        >
          <p
            style={{
              color: "#dc2626",
              fontSize: "26px",
              fontWeight: "bold",
              margin: "0 0 10px",
            }}
          >
            {product.price}
          </p>

          <p
            style={{
              color: stockColor,
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0 0 18px",
            }}
          >
            {product.stock}
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              width: "100%",
              backgroundColor: "#dc2626",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              padding: "13px",
              borderRadius: "12px",
              fontWeight: "bold",
              boxSizing: "border-box",
            }}
          >
            Consultar no WhatsApp
          </a>
        </div>
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

export default ProductCard;