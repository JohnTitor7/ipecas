function ProductCard({ product }) {
  return (
    <div
      style={{
        backgroundColor: "#151515",
        border: "1px solid #333",
        borderRadius: "16px",
        padding: "20px",
      }}
    >
      <div
  style={{
    height: "180px",
    backgroundColor: "#000",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: "20px",
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
        padding: "10px",
      }}
    />
  ) : (
    <span style={{ color: "#777" }}>Imagem da peça</span>
  )}
</div>

      <h3>{product.name}</h3>

      <p style={{ color: "#999", fontSize: "14px" }}>
        {product.category}
      </p>

      <p style={{ color: "#777", fontSize: "13px" }}>
        Marca: {product.brand}
      </p>
      
      <p style={{ color: "#777", fontSize: "13px" }}>
  Modelo: {product.model}
      </p>

      <p
        style={{
          color: "red",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {product.price}
      </p>

      <p style={{ color: "#22c55e" }}>{product.stock}</p>

      <a
        href={`https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20na%20peça:%20${encodeURIComponent(
          product.name
        )}`}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "15px",
          width: "100%",
          backgroundColor: "red",
          color: "white",
          textDecoration: "none",
          border: "none",
          padding: "12px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Consultar no WhatsApp
      </a>
    </div>
  );
}

export default ProductCard;