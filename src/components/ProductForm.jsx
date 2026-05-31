function ProductForm({
  formData,
  editingProductId,
  onChange,
  onSubmit,
  onCancelEdit,
}) {
  const categories = [
    "Telas",
    "Baterias",
    "Conectores",
    "Películas",
    "Capas",
    "Cabos",
    "Áudio",
    "Acessórios",
  ];

  const stockOptions = [
    "Disponível",
    "Últimas unidades",
    "Sob consulta",
    "Indisponível",
  ];

  return (
    <form onSubmit={onSubmit} style={formStyle}>
      <div style={fieldsGridStyle}>
        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          value={formData.name}
          onChange={onChange}
          style={inputStyle}
        />

        <select
          name="category"
          value={formData.category}
          onChange={onChange}
          style={inputStyle}
        >
          <option value="">Selecione uma categoria</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="brand"
          placeholder="Marca"
          value={formData.brand}
          onChange={onChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="model"
          placeholder="Modelo"
          value={formData.model}
          onChange={onChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="price"
          placeholder="Preço"
          value={formData.price}
          onChange={onChange}
          style={inputStyle}
        />

        <select
          name="stock"
          value={formData.stock}
          onChange={onChange}
          style={inputStyle}
        >
          {stockOptions.map((stock) => (
            <option key={stock} value={stock}>
              {stock}
            </option>
          ))}
        </select>

        <div>
          <input
            type="text"
            name="image"
            placeholder="Link da imagem do produto"
            value={formData.image}
            onChange={onChange}
            style={inputStyle}
          />

          <p style={helperTextStyle}>
            Cole aqui o link de uma imagem do produto. No futuro, esse campo
            será substituído por upload direto de imagem.
          </p>
        </div>
      </div>

      <button type="submit" style={submitButtonStyle}>
        {editingProductId ? "Salvar alterações" : "Adicionar produto"}
      </button>

      {editingProductId && (
        <button type="button" onClick={onCancelEdit} style={cancelButtonStyle}>
          Cancelar edição
        </button>
      )}
    </form>
  );
}

const formStyle = {
  backgroundColor: "#151515",
  border: "1px solid #333",
  borderRadius: "20px",
  padding: "30px",
  marginBottom: "30px",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
};

const fieldsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "12px",
  border: "1px solid #333",
  backgroundColor: "#090909",
  color: "white",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const helperTextStyle = {
  color: "#777",
  fontSize: "13px",
  marginTop: "8px",
};

const submitButtonStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  padding: "15px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
  marginTop: "18px",
  width: "100%",
  fontSize: "15px",
};

const cancelButtonStyle = {
  backgroundColor: "transparent",
  color: "#aaa",
  border: "1px solid #555",
  padding: "15px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
  width: "100%",
  marginTop: "12px",
};

export default ProductForm;