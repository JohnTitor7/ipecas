import { useMemo, useState } from "react";

import ProductCard from "./ProductCard";

import "./CategoryPage.css";

const BRAND_FILTER_ALL = "Todas";
const STOCK_FILTER_ALL = "Todos";
const PRICE_FILTER_ALL = "Todas";

const stockOptions = [
  STOCK_FILTER_ALL,
  "Disponível",
  "Últimas unidades",
  "Sob consulta",
  "Indisponível",
];

const priceOptions = [
  {
    label: PRICE_FILTER_ALL,
    min: 0,
    max: Infinity,
  },
  {
    label: "Até R$ 100",
    min: 0,
    max: 100,
  },
  {
    label: "R$ 100 a R$ 200",
    min: 100,
    max: 200,
  },
  {
    label: "R$ 200 a R$ 300",
    min: 200,
    max: 300,
  },
  {
    label: "R$ 300 a R$ 500",
    min: 300,
    max: 500,
  },
  {
    label: "Acima de R$ 500",
    min: 500,
    max: Infinity,
  },
];

function CategoryPage({ category, products, onClearCategory }) {
  const [selectedBrand, setSelectedBrand] = useState(BRAND_FILTER_ALL);
  const [selectedStock, setSelectedStock] = useState(STOCK_FILTER_ALL);
  const [selectedPrice, setSelectedPrice] = useState(PRICE_FILTER_ALL);

  const categoryProducts = useMemo(() => {
    return products.filter((product) => product.category === category);
  }, [products, category]);

  const brandOptions = useMemo(() => {
    const brands = categoryProducts
      .map((product) => product.brand)
      .filter(Boolean);

    return [BRAND_FILTER_ALL, ...new Set(brands)];
  }, [categoryProducts]);

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((product) => {
      const matchesBrand =
        selectedBrand === BRAND_FILTER_ALL || product.brand === selectedBrand;

      const matchesStock =
        selectedStock === STOCK_FILTER_ALL || product.stock === selectedStock;

      const selectedPriceRange = priceOptions.find(
        (option) => option.label === selectedPrice
      );

      const productPrice = convertPriceToNumber(product.price);

      const matchesPrice =
        !selectedPriceRange ||
        selectedPriceRange.label === PRICE_FILTER_ALL ||
        (productPrice >= selectedPriceRange.min &&
          productPrice <= selectedPriceRange.max);

      return matchesBrand && matchesStock && matchesPrice;
    });
  }, [categoryProducts, selectedBrand, selectedStock, selectedPrice]);

  function handleClearFilters() {
    setSelectedBrand(BRAND_FILTER_ALL);
    setSelectedStock(STOCK_FILTER_ALL);
    setSelectedPrice(PRICE_FILTER_ALL);
  }

  return (
    <main className="category-page">
      <button
        type="button"
        className="category-back-button"
        onClick={onClearCategory}
      >
        ← Voltar para o início
      </button>

      <section className="category-page-top">
        <div>
          <p className="category-page-label">Categoria</p>

          <h1 className="category-page-title">{category}</h1>

          <p className="category-page-description">
            Consulte os produtos disponíveis, filtre por marca, estoque e faixa
            de preço.
          </p>
        </div>

        <span className="category-page-count">
          {filteredProducts.length} produto
          {filteredProducts.length !== 1 ? "s" : ""} encontrado
          {filteredProducts.length !== 1 ? "s" : ""}
        </span>
      </section>

      <section className="category-page-layout">
        <aside className="category-filters">
          <FilterGroup
            title="Filtrar por marca"
            options={brandOptions}
            selectedOption={selectedBrand}
            onSelectOption={setSelectedBrand}
          />

          <FilterGroup
            title="Filtrar por estoque"
            options={stockOptions}
            selectedOption={selectedStock}
            onSelectOption={setSelectedStock}
          />

          <FilterGroup
            title="Faixa de preço"
            options={priceOptions.map((option) => option.label)}
            selectedOption={selectedPrice}
            onSelectOption={setSelectedPrice}
          />

          <button
            type="button"
            className="category-clear-filters-button"
            onClick={handleClearFilters}
          >
            Limpar filtros
          </button>
        </aside>

        <div className="category-products-area">
          {filteredProducts.length > 0 ? (
            <div className="category-products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="category-empty-state">
              <h2>Nenhum produto encontrado</h2>

              <p>
                Tente remover algum filtro ou escolher outra marca, estoque ou
                faixa de preço.
              </p>

              <button
                type="button"
                className="category-empty-button"
                onClick={handleClearFilters}
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function FilterGroup({ title, options, selectedOption, onSelectOption }) {
  return (
    <div className="filter-group">
      <h3 className="filter-title">{title}</h3>

      <div className="filter-options">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={
              selectedOption === option
                ? "filter-option active"
                : "filter-option"
            }
            onClick={() => onSelectOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function convertPriceToNumber(price) {
  if (!price) {
    return 0;
  }

  return Number(
    String(price)
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(",", ".")
      .trim()
  );
}

export default CategoryPage;