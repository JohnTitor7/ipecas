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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.category || !formData.price) {
      showFeedback("Preencha pelo menos nome, categoria e preço.", "error");
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

    try {
      setIsSubmitting(true);

      if (editingProductId) {
        await onUpdateProduct({
          id: editingProductId,
          ...productData,
        });

        showFeedback("Produto atualizado com sucesso.", "success");
      } else {
        await onAddProduct(productData);

        showFeedback("Produto cadastrado com sucesso.", "success");
      }

      resetForm();
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      showFeedback("Erro ao salvar produto. Tente novamente.", "error");
    } finally {
      setIsSubmitting(false);
    }
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

  async function handleDeleteProduct(productId) {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja remover este produto?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeletingProductId(productId);

      await onDeleteProduct(productId);

      showFeedback("Produto removido com sucesso.", "success");
    } catch (error) {
      console.error("Erro ao remover produto:", error);
      showFeedback("Erro ao remover produto. Tente novamente.", "error");
    } finally {
      setDeletingProductId(null);
    }
  }

  async function handleResetProducts() {
    const confirmReset = window.confirm(
      "Tem certeza que deseja restaurar os produtos iniciais? Isso apagará as alterações atuais."
    );

    if (!confirmReset) {
      return;
    }

    try {
      setIsResetting(true);

      await onResetProducts();

      resetForm();
      showFeedback("Produtos iniciais restaurados com sucesso.", "success");
    } catch (error) {
      console.error("Erro ao restaurar produtos:", error);
      showFeedback("Erro ao restaurar produtos. Tente novamente.", "error");
    } finally {
      setIsResetting(false);
    }
  }

  function handleCancelEdit() {
    resetForm();
  }

  function resetForm() {
    setFormData(initialFormData);
    setEditingProductId(null);
  }

  function showFeedback(message, type) {
    setFeedbackMessage({
      message,
      type,
    });

    window.setTimeout(() => {
      setFeedbackMessage(null);
    }, 3500);
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

        <button
          type="button"
          onClick={handleResetProducts}
          style={resetButtonStyle}
          disabled={isResetting}
        >
          {isResetting ? "Restaurando..." : "Restaurar produtos iniciais"}
        </button>
      </section>

      {feedbackMessage && (
        <div
          style={{
            ...feedbackStyle,
            borderColor:
              feedbackMessage.type === "success" ? "#14532d" : "#7f1d1d",
            color: feedbackMessage.type === "success" ? "#86efac" : "#fca5a5",
          }}
        >
          {feedbackMessage.message}
        </div>
      )}

      <ProductForm
        formData={formData}
        editingProductId={editingProductId}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancelEdit={handleCancelEdit}
      />

      <AdminProductList
        products={products}
        deletingProductId={deletingProductId}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
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

const feedbackStyle = {
  backgroundColor: "#111",
  border: "1px solid",
  borderRadius: "12px",
  padding: "14px 16px",
  marginBottom: "20px",
  fontWeight: "bold",
};

export default AdminPanel;