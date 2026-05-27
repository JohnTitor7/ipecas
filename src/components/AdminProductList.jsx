function AdminProductList({
  products,
  onEditProduct,
  onDeleteProduct,
  onResetProducts,
}) {
  return (
    <div
      style={{
        backgroundColor: "#151515",
        border: "1px solid #333",
        borderRadius: "16px",
        padding: "25px",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Produtos cadastrados</h3>

      <button
        type="button"
        onClick={onResetProducts}
        style={{
          backgroundColor: "transparent",
          color: "#aaa",
          border: "1px solid #555",
          padding: "10px 14px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Restaurar produtos iniciais
      </button>

      {products.length === 0 ? (
        <p style={{ color: "#aaa" }}>Nenhum produto cadastrado.</p>
      ) : (
        <div style={{ display: "grid", gap: "12px" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                backgroundColor: "#0a0a0a",
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "15px",
              }}
            >
              <div>
                <strong>{product.name}</strong>

                <p style={{ color: "#aaa", margin: "5px 0 0" }}>
                  {product.brand} • {product.category} • {product.price}
                </p>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => onEditProduct(product)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #555",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Editar
                </button>

                <button
                  type="button"
                  onClick={() => onDeleteProduct(product.id)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#dc2626",
                    border: "1px solid #dc2626",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminProductList;