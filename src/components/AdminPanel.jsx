import { useState } from "react";

function AdminPanel({
  products,
  onAddProduct,
  onDeleteProduct,
  onUpdateProduct,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    model: "",
    price: "",
    stock: "Disponível",
    image: "",
  });

  const [editingProductId, setEditingProductId] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.price) {
      alert("Preencha pelo menos o nome e o preço do produto.");
      return;
    }

    if (editingProductId) {
      onUpdateProduct({
        id: editingProductId,
        ...formData,
      });

      setEditingProductId(null);
    } else {
      onAddProduct(formData);
    }

    setFormData({
      name: "",
      category: "",
      brand: "",
      model: "",
      price: "",
      stock: "Disponível",
      image: "",
    });
  }

  function handleEditProduct(product) {
    setEditingProductId(product.id);

    setFormData({
      name: product.name,
      category: product.category,
      brand: product.brand,
      model: product.model,
      price: product.price,
      stock: product.stock,
      image: product.image,
    });
  }

  function handleCancelEdit() {
    setEditingProductId(null);

    setFormData({
      name: "",
      category: "",
      brand: "",
      model: "",
      price: "",
      stock: "Disponível",
      image: "",
    });
  }

  return (
    <section
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Painel administrativo
      </h2>

      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Área para cadastrar, editar, visualizar e remover produtos da loja.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#151515",
          border: "1px solid #333",
          borderRadius: "16px",
          padding: "25px",
          display: "grid",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="category"
          placeholder="Categoria"
          value={formData.category}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="brand"
          placeholder="Marca"
          value={formData.brand}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="model"
          placeholder="Modelo"
          value={formData.model}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="price"
          placeholder="Preço"
          value={formData.price}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          style={inputStyle}
        >
          <option>Disponível</option>
          <option>Últimas unidades</option>
          <option>Sob consulta</option>
          <option>Indisponível</option>
        </select>

        <input
          type="text"
          name="image"
          placeholder="URL da imagem"
          value={formData.image}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {editingProductId ? "Salvar alterações" : "Adicionar produto"}
        </button>

        {editingProductId && (
          <button
            type="button"
            onClick={handleCancelEdit}
            style={{
              backgroundColor: "transparent",
              color: "#aaa",
              border: "1px solid #555",
              padding: "14px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Cancelar edição
          </button>
        )}
      </form>

      <div
        style={{
          backgroundColor: "#151515",
          border: "1px solid #333",
          borderRadius: "16px",
          padding: "25px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Produtos cadastrados</h3>

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
                    onClick={() => handleEditProduct(product)}
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
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #333",
  backgroundColor: "#0a0a0a",
  color: "white",
  fontSize: "15px",
};

export default AdminPanel;