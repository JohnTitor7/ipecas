import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import logo from "./assets/logo-ipecas.png";
import { products as initialProducts } from "./data/products";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import AdminPanel from "./components/AdminPanel";
import CategoryPage from "./components/CategoryPage";

const STORAGE_KEY = "ipecas-products";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem(STORAGE_KEY);

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }

    return initialProducts;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  function handleAddProduct(newProduct) {
    setProducts((currentProducts) => [
      ...currentProducts,
      {
        id: Date.now(),
        ...newProduct,
      },
    ]);
  }

  function handleDeleteProduct(productId) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  }

  function handleUpdateProduct(updatedProduct) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  }

  function handleResetProducts() {
    const confirmReset = window.confirm(
      "Tem certeza que deseja restaurar os produtos iniciais?"
    );

    if (!confirmReset) {
      return;
    }

    setProducts(initialProducts);
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
            isHomePage ? (
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
            <AdminPanel
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

export default App;