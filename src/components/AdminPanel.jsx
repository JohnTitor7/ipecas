import { useState } from "react";

import ProductForm from "./ProductForm";
import AdminProductList from "./AdminProductList";

const initialFormData = {
  name: "",
  category: "",
  brand: "",
  model: "",
  price: "",
  quantity: "",
  stock: "Disponível",
  image: "",
};

function AdminPanel({
  products,
  onAddProduct,
  onDeleteProduct,
  onUpdateProduct,
  onResetProducts,
}) {
  const [formData, setFormData] = useState(initialFormData);
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

    if (!formData.name || !formData.category || !formData.price) {
      alert("Preencha pelo menos nome, categoria e preço do produto.");
      return;
    }

    const productData = {
      name: formData.name.trim(),
      category: formData.category,
      brand: formData.brand.trim(),
      model: formData.model.trim(),
      price: formData.price.trim(),
      quantity: normalizeQuantity(formData.quantity),
      stock: formData.stock,
      image: formData.image.trim(),
    };

    if (editingProductId) {
      onUpdateProduct({
        id: editingProductId,
        ...productData,
      });
    } else {
      onAddProduct(productData);
    }

    resetForm();
  }

  function handleEditProduct(product) {
    setEditingProductId(product.id);

    setFormData({
      name: product.name || "",
      category: product.category || "",
      brand: product.brand || "",
      model: product.model || "",
      price: product.price || "",
      quantity: String(product.quantity ?? ""),
      stock: product.stock || "Disponível",
      image: product.image || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleCancelEdit() {
    resetForm();
  }

  function resetForm() {
    setFormData(initialFormData);
    setEditingProductId(null);
  }

  return (
    <main style={pageStyle}>
      <section style={headerStyle}>
        <div>
          <p style={labelStyle}>Painel administrativo</p>

          <h2 style={titleStyle}>
            {editingProductId ? "Editar produto" : "Cadastrar produto"}
          </h2>

          <p style={descriptionStyle}>
            Área para cadastrar, editar, visualizar e remover produtos da loja.
          </p>
        </div>

        <button type="button" onClick={onResetProducts} style={resetButtonStyle}>
          Restaurar produtos iniciais
        </button>
      </section>

      <ProductForm
        formData={formData}
        editingProductId={editingProductId}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancelEdit={handleCancelEdit}
      />

      <AdminProductList
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={onDeleteProduct}
      />
    </main>
  );
}

function normalizeQuantity(quantity) {
  const numericQuantity = Number(quantity);

  if (Number.isNaN(numericQuantity) || numericQuantity < 0) {
    return 0;
  }

  return numericQuantity;
}

const pageStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 32px 60px",
};

const headerStyle = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: "24px",
  marginBottom: "30px",
  flexWrap: "wrap",
};

const labelStyle = {
  color: "#dc2626",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  margin: "0 0 8px",
  fontSize: "13px",
};

const titleStyle = {
  color: "white",
  fontSize: "34px",
  margin: 0,
};

const descriptionStyle = {
  color: "#aaa",
  marginTop: "10px",
  marginBottom: 0,
};

const resetButtonStyle = {
  backgroundColor: "transparent",
  color: "#f87171",
  border: "1px solid #7f1d1d",
  padding: "12px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default AdminPanel;