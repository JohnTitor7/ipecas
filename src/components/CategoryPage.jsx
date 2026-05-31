import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import "./CategoryPage.css";

function CategoryPage({ category, products, onClearCategory }) {
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const [selectedStock, setSelectedStock] = useState("Todos");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Todas");

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  const brands = useMemo(() => {
    const uniqueBrands = categoryProducts.map((product) => product.brand);
    return ["Todas", ...new Set(uniqueBrands)];
  }, [categoryProducts]);

  const filteredProducts = categoryProducts.filter((product) => {
    const matchesBrand =
      selectedBrand === "Todas" || product.brand === selectedBrand;

    const matchesStock =
      selectedStock === "Todos" || product.stock === selectedStock;

    const matchesPriceRange = checkPriceRange(product.price, selectedPriceRange);

    return matchesBrand && matchesStock && matchesPriceRange;
  });

  return (
    <section className="category-page">
      <div className="category-header">
        <div>
          <button
            type="button"
            className="category-back-button"
            onClick={onClearCategory}
          >
            ← Voltar para o início
          </button>

          <p className="category-label">Categoria</p>

          <h2 className="category-title">{category}</h2>

          <p className="category-description">
            Consulte os produtos disponíveis, filtre por marca, estoque e faixa
            de preço.
          </p>
        </div>

        <p className="category-counter">
          {filteredProducts.length} produto
          {filteredProducts.length !== 1 ? "s" : ""} encontrado
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="category-layout">
        <aside className="category-filters">
          <div className="filter-block">
            <h3>Filtrar por marca</h3>

            <div className="filter-options">
              {brands.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  className={
                    selectedBrand === brand
                      ? "filter-option active"
                      : "filter-option"
                  }
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <h3>Filtrar por estoque</h3>

            <div className="filter-options">
              {["Todos", "Disponível", "Últimas unidades", "Sob consulta"].map(
                (stock) => (
                  <button
                    key={stock}
                    type="button"
                    className={
                      selectedStock === stock
                        ? "filter-option active"
                        : "filter-option"
                    }
                    onClick={() => setSelectedStock(stock)}
                  >
                    {stock}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="filter-block">
            <h3>Faixa de preço</h3>

            <div className="filter-options">
              {[
                "Todas",
                "Até R$ 100",
                "R$ 100 a R$ 200",
                "R$ 200 a R$ 300",
                "Acima de R$ 300",
              ].map((range) => (
                <button
                  key={range}
                  type="button"
                  className={
                    selectedPriceRange === range
                      ? "filter-option active"
                      : "filter-option"
                  }
                  onClick={() => setSelectedPriceRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="category-products-area">
          {filteredProducts.length > 0 ? (
            <div className="category-products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="category-empty">
              <h3>Nenhum produto encontrado</h3>

              <p>
                Não encontramos produtos com os filtros selecionados. Tente
                remover algum filtro.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function checkPriceRange(priceText, selectedPriceRange) {
  if (selectedPriceRange === "Todas") {
    return true;
  }

  const price = parsePrice(priceText);

  if (selectedPriceRange === "Até R$ 100") {
    return price <= 100;
  }

  if (selectedPriceRange === "R$ 100 a R$ 200") {
    return price > 100 && price <= 200;
  }

  if (selectedPriceRange === "R$ 200 a R$ 300") {
    return price > 200 && price <= 300;
  }

  if (selectedPriceRange === "Acima de R$ 300") {
    return price > 300;
  }

  return true;
}

function parsePrice(priceText) {
  return Number(
    priceText
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(",", ".")
      .trim()
  );
}

export default CategoryPage;