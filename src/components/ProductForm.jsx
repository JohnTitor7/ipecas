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
          onClick={onCancelEdit}
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

export default ProductForm;