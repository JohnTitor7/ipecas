import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import logo from "./assets/logo-ipecas.png";
import { products as initialProducts } from "./data/products";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import AdminPanel from "./components/AdminPanel";
import CategoryPage from "./components/CategoryPage";
import Login from "./components/Login";

import { auth } from "./services/firebase";

import {
  addProduct,
  deleteProduct,
  listenToProducts,
  resetProducts,
  seedProductsIfEmpty,
  updateProduct,
} from "./services/productService";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const [products, setProducts] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function initializeProducts() {
      try {
        await seedProductsIfEmpty(initialProducts);

        const unsubscribe = listenToProducts((firebaseProducts) => {
          setProducts(firebaseProducts);
          setIsProductsLoading(false);
        });

        return unsubscribe;
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        setIsProductsLoading(false);
      }
    }

    let unsubscribeProducts;

    initializeProducts().then((unsubscribe) => {
      unsubscribeProducts = unsubscribe;
    });

    return () => {
      if (unsubscribeProducts) {
        unsubscribeProducts();
      }
    };
  }, []);

  async function handleAddProduct(newProduct) {
    const productToCreate = {
      id: Date.now(),
      ...newProduct,
      image: newProduct.image || "",
    };

    await addProduct(productToCreate);
  }

  async function handleDeleteProduct(productId) {
    const productToDelete = products.find((product) => product.id === productId);

    if (!productToDelete?.firestoreId) {
      alert("Não foi possível remover este produto.");
      return;
    }

    await deleteProduct(productToDelete.firestoreId);
  }

  async function handleUpdateProduct(updatedProduct) {
    const currentProduct = products.find(
      (product) => product.id === updatedProduct.id
    );

    if (!currentProduct?.firestoreId) {
      alert("Não foi possível atualizar este produto.");
      return;
    }

    await updateProduct({
      ...updatedProduct,
      firestoreId: currentProduct.firestoreId,
      image: updatedProduct.image || "",
    });
  }

  async function handleResetProducts() {
    const confirmReset = window.confirm(
      "Tem certeza que deseja restaurar os produtos iniciais?"
    );

    if (!confirmReset) {
      return;
    }

    await resetProducts(initialProducts);
  }

  async function handleLogout() {
    await signOut(auth);
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleClearCategory() {
    setSelectedCategory("Todos");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const searchedProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.brand.toLowerCase().includes(searchText) ||
      product.model.toLowerCase().includes(searchText)
    );
  });

  const isHomePage = selectedCategory === "Todos";

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Header
        logo={logo}
        search={search}
        onSearchChange={(event) => setSearch(event.target.value)}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        onClearCategory={handleClearCategory}
      />

      <Routes>
        <Route
          path="/"
          element={
            isProductsLoading ? (
              <LoadingMessage text="Carregando produtos..." />
            ) : isHomePage ? (
              <>
                <Hero onSelectCategory={handleSelectCategory} />

                <Catalog products={searchedProducts} />
              </>
            ) : (
              <CategoryPage
                category={selectedCategory}
                products={searchedProducts}
                onClearCategory={handleClearCategory}
              />
            )
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute
              isAuthLoading={isAuthLoading}
              isProductsLoading={isProductsLoading}
              currentUser={currentUser}
              onLogout={handleLogout}
              products={products}
              onAddProduct={handleAddProduct}
              onDeleteProduct={handleDeleteProduct}
              onUpdateProduct={handleUpdateProduct}
              onResetProducts={handleResetProducts}
            />
          }
        />
      </Routes>
    </div>
  );
}

function AdminRoute({
  isAuthLoading,
  isProductsLoading,
  currentUser,
  onLogout,
  products,
  onAddProduct,
  onDeleteProduct,
  onUpdateProduct,
  onResetProducts,
}) {
  if (isAuthLoading || isProductsLoading) {
    return <LoadingMessage text="Carregando painel..." />;
  }

  if (!currentUser) {
    return <Login onLoginSuccess={() => {}} />;
  }

  return (
    <>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "30px 40px 0",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          type="button"
          onClick={onLogout}
          style={{
            backgroundColor: "transparent",
            color: "#aaa",
            border: "1px solid #333",
            padding: "10px 14px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Sair do painel
        </button>
      </div>

      <AdminPanel
        products={products}
        onAddProduct={onAddProduct}
        onDeleteProduct={onDeleteProduct}
        onUpdateProduct={onUpdateProduct}
        onResetProducts={onResetProducts}
      />
    </>
  );
}

function LoadingMessage({ text }) {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#aaa",
      }}
    >
      {text}
    </section>
  );
}

export default App;