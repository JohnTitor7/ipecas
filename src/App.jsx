import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import logo from "./assets/logo-ipecas.png";
import { products as initialProducts } from "./data/products";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import CategoryPage from "./components/CategoryPage";
import Login from "./components/Login";
import AdminHeader from "./components/AdminHeader";

import { auth } from "./services/firebase";

import {
  addProduct,
  deleteProduct,
  listenToProducts,
  resetProducts,
  seedProductsIfEmpty,
  updateProduct,
} from "./services/productService";

import "./styles/circuit-details.css";

const ADMIN_EMAILS = ["ryanv5944@gmail.com"];

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
    let unsubscribeProducts;

    async function initializeProducts() {
      try {
        await seedProductsIfEmpty(initialProducts);

        unsubscribeProducts = listenToProducts((firebaseProducts) => {
          setProducts(firebaseProducts);
          setIsProductsLoading(false);
        });
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        setIsProductsLoading(false);
      }
    }

    initializeProducts();

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
      throw new Error("Não foi possível encontrar este produto no banco.");
    }

    await deleteProduct(productToDelete.firestoreId);
  }

  async function handleUpdateProduct(updatedProduct) {
    const currentProduct = products.find(
      (product) => product.id === updatedProduct.id
    );

    if (!currentProduct?.firestoreId) {
      throw new Error("Não foi possível encontrar este produto no banco.");
    }

    await updateProduct({
      ...updatedProduct,
      firestoreId: currentProduct.firestoreId,
      image: updatedProduct.image || "",
    });
  }

  async function handleResetProducts() {
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
    <div className="app-shell">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                logo={logo}
                search={search}
                onSearchChange={(event) => setSearch(event.target.value)}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
                onClearCategory={handleClearCategory}
              />

              {isProductsLoading ? (
                <LoadingMessage text="Carregando produtos..." />
              ) : isHomePage ? (
                <>
                  <Hero onSelectCategory={handleSelectCategory} />
                  <Catalog products={searchedProducts} />
                  <Footer />
                </>
              ) : (
                <>
                  <CategoryPage
                    category={selectedCategory}
                    products={searchedProducts}
                    onClearCategory={handleClearCategory}
                  />
                  <Footer />
                </>
              )}
            </>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute
              logo={logo}
              isAuthLoading={isAuthLoading}
              isProductsLoading={isProductsLoading}
              currentUser={currentUser}
              adminEmails={ADMIN_EMAILS}
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
  logo,
  isAuthLoading,
  isProductsLoading,
  currentUser,
  adminEmails,
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

  const isAuthorizedAdmin = adminEmails.includes(currentUser.email);

  if (!isAuthorizedAdmin) {
    return (
      <>
        <AdminHeader logo={logo} onLogout={onLogout} />

        <section style={unauthorizedPageStyle}>
          <div style={unauthorizedCardStyle}>
            <p style={unauthorizedLabelStyle}>Acesso negado</p>

            <h2 style={unauthorizedTitleStyle}>Usuário não autorizado</h2>

            <p style={unauthorizedTextStyle}>
              O e-mail logado não tem permissão para acessar o painel
              administrativo.
            </p>

            <p style={unauthorizedEmailStyle}>{currentUser.email}</p>

            <button type="button" onClick={onLogout} style={logoutButtonStyle}>
              Sair desta conta
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <AdminHeader logo={logo} onLogout={onLogout} />

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

const unauthorizedPageStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "60px 32px",
};

const unauthorizedCardStyle = {
  backgroundColor: "#111",
  border: "1px solid #2a2a2a",
  borderRadius: "18px",
  padding: "34px",
  textAlign: "center",
};

const unauthorizedLabelStyle = {
  color: "#dc2626",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  margin: "0 0 10px",
};

const unauthorizedTitleStyle = {
  color: "white",
  margin: "0 0 10px",
  fontSize: "28px",
};

const unauthorizedTextStyle = {
  color: "#aaa",
  margin: "0 0 14px",
};

const unauthorizedEmailStyle = {
  color: "#f87171",
  fontWeight: "bold",
  marginBottom: "24px",
};

const logoutButtonStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  padding: "12px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default App;