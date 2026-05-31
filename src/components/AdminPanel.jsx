import { useState } from "react";
import { Link } from "react-router-dom";

import ProductForm from "./ProductForm";
import AdminProductList from "./AdminProductList";

function AdminPanel({
  products,
  onAddProduct,
  onDeleteProduct,
  onUpdateProduct,
  onResetProducts,
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

  function resetForm() {
    setFormData({
      name: "",
      category: "",
      brand: "",
      model: "",
      price: "",
      stock: "Disponível",
      image: "",
    });

    setEditingProductId(null);
  }

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

    if (editingProductId) {
      onUpdateProduct({
        id: editingProductId,
        ...formData,
      });
    } else {
      onAddProduct(formData);
    }

    resetForm();
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

  return (
    <section
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "25px",
          color: "#aaa",
          textDecoration: "none",
          border: "1px solid #333",
          padding: "10px 14px",
          borderRadius: "10px",
        }}
      >
        ← Voltar para o site
      </Link>

      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Painel administrativo
      </h2>

      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Área para cadastrar, editar, visualizar e remover produtos da loja.
      </p>

      <ProductForm
        formData={formData}
        editingProductId={editingProductId}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancelEdit={resetForm}
      />

      <AdminProductList
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={onDeleteProduct}
        onResetProducts={onResetProducts}
      />
    </section>
  );
}

export default AdminPanel;