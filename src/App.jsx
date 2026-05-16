import { useEffect, useState } from "react";

import logo from "./assets/logo-ipecas.png";
import { products as initialProducts } from "./data/products";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import AdminPanel from "./components/AdminPanel";

const STORAGE_KEY = "ipecas-products";

function App() {
  const [search, setSearch] = useState("");

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

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.brand.toLowerCase().includes(searchText)
    );
  });

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Header logo={logo} />

      <Hero />

      <Catalog
        search={search}
        setSearch={setSearch}
        products={filteredProducts}
      />

      <AdminPanel onAddProduct={handleAddProduct} />
    </div>
  );
}

export default App;