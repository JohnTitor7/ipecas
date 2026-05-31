function ProductForm({
  formData,
  editingProductId,
  onChange,
  onSubmit,
  onCancelEdit,
}) {
  return (
   <form
  onSubmit={onSubmit}
  style={{
  backgroundColor: "#151515",
  border: "1px solid #333",
  borderRadius: "20px",
  padding: "30px",
  marginBottom: "30px",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
}}
>
  <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
  }}
>
      <input
        type="text"
        name="name"
        placeholder="Nome do produto"
        value={formData.name}
        onChange={onChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="category"
        placeholder="Categoria"
        value={formData.category}
        onChange={onChange}
        style={inputStyle}
      />

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
        <option>Disponível</option>
        <option>Últimas unidades</option>
        <option>Sob consulta</option>
        <option>Indisponível</option>
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

        <p
          style={{
            color: "#777",
            fontSize: "13px",
            marginTop: "8px",
          }}
        >
          Cole aqui o link de uma imagem do produto. No futuro, esse campo será
          substituído por upload direto de imagem.
        </p>
      </div>
     </div> 

      <button
        type="submit"
        style={{
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
}}
      >
        {editingProductId ? "Salvar alterações" : "Adicionar produto"}
      </button>

      {editingProductId && (
        <button
          type="button"
          onClick={onCancelEdit}
          style={{
          backgroundColor: "transparent",
          color: "#aaa",
          border: "1px solid #555",
          padding: "15px",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          width: "100%",
}}
        >
          Cancelar edição
        </button>
      )}
    </form>
  );
}

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

export default ProductForm;