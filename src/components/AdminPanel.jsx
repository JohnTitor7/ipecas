import { useState } from "react";
function AdminPanel({ onAddProduct }) {
const [formData, setFormData] = useState({
  name: "",
  category: "",
  brand: "",
  model: "",
  price: "",
  stock: "Disponível",
  image: "",
});

function handleChange(event) {
  const { name, value } = event.target;

  setFormData((currentData) => ({
    ...currentData,
    [name]: value,
  }));
}

function handleSubmit(event) {
  event.preventDefault();

  onAddProduct(formData);

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
        Área para cadastrar e atualizar produtos da loja.
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
          Adicionar produto
        </button>
      </form>
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