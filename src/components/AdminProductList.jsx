function AdminProductList({ products, onEditProduct, onDeleteProduct }) {
  const groupedProducts = groupProductsByCategoryAndBrand(products);

  if (products.length === 0) {
    return (
      <section style={emptyStateStyle}>
        <h3 style={emptyTitleStyle}>Nenhum produto cadastrado</h3>

        <p style={emptyTextStyle}>
          Cadastre um produto usando o formulário acima.
        </p>
      </section>
    );
  }

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <div>
          <p style={labelStyle}>Produtos cadastrados</p>

          <h3 style={titleStyle}>Gerenciar catálogo</h3>
        </div>

        <span style={counterStyle}>
          {products.length} produto{products.length !== 1 ? "s" : ""}
        </span>
      </div>

      {groupedProducts.map(([category, brands]) => {
        const categoryTotal = countProductsByCategory(brands);

        return (
          <div key={category} style={categorySectionStyle}>
            <div style={categoryHeaderStyle}>
              <h4 style={categoryTitleStyle}>{category}</h4>

              <span style={categoryCounterStyle}>
                {categoryTotal} item{categoryTotal !== 1 ? "s" : ""}
              </span>
            </div>

            {brands.map(([brand, brandProducts]) => (
              <div key={`${category}-${brand}`} style={brandSectionStyle}>
                <div style={brandHeaderStyle}>
                  <h5 style={brandTitleStyle}>{brand}</h5>

                  <span style={brandCounterStyle}>
                    {brandProducts.length} produto
                    {brandProducts.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <div style={productsGridStyle}>
                  {brandProducts.map((product) => (
                    <article key={product.id} style={productCardStyle}>
                      <div style={productInfoStyle}>
                        <strong style={productNameStyle}>
                          {product.name}
                        </strong>

                        <span style={productDetailStyle}>
                          {product.model || "Modelo não informado"}
                        </span>

                        <span style={productPriceStyle}>{product.price}</span>

                        <span
                          style={{
                            ...stockStyle,
                            color: getStockColor(product.stock),
                          }}
                        >
                          {product.stock}
                        </span>
                      </div>

                      <div style={actionsStyle}>
                        <button
                          type="button"
                          onClick={() => onEditProduct(product)}
                          style={editButtonStyle}
                        >
                          Editar
                        </button>

                        <button
                          type="button"
                          onClick={() => onDeleteProduct(product.id)}
                          style={deleteButtonStyle}
                        >
                          Remover
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
}

function groupProductsByCategoryAndBrand(products) {
  const categoryOrder = [
    "Telas",
    "Baterias",
    "Conectores",
    "Películas",
    "Acessórios",
    "Componentes",
    "Ferramentas",
    "Cabos",
    "Câmeras",
    "Carcaças",
    "Outros",
  ];

  const brandOrder = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Motorola",
    "Realme",
    "Infinix",
    "LG",
    "Universal",
    "Outras",
  ];

  const grouped = products.reduce((accumulator, product) => {
    const category = product.category || "Outros";
    const brand = product.brand || "Outras";

    if (!accumulator[category]) {
      accumulator[category] = {};
    }

    if (!accumulator[category][brand]) {
      accumulator[category][brand] = [];
    }

    accumulator[category][brand].push(product);

    return accumulator;
  }, {});

  return Object.entries(grouped)
    .sort(([categoryA], [categoryB]) =>
      sortByCustomOrder(categoryA, categoryB, categoryOrder)
    )
    .map(([category, brands]) => {
      const sortedBrands = Object.entries(brands).sort(([brandA], [brandB]) =>
        sortByCustomOrder(brandA, brandB, brandOrder)
      );

      return [category, sortedBrands];
    });
}

function sortByCustomOrder(itemA, itemB, customOrder) {
  const indexA = customOrder.indexOf(itemA);
  const indexB = customOrder.indexOf(itemB);

  if (indexA === -1 && indexB === -1) {
    return itemA.localeCompare(itemB);
  }

  if (indexA === -1) {
    return 1;
  }

  if (indexB === -1) {
    return -1;
  }

  return indexA - indexB;
}

function countProductsByCategory(brands) {
  return brands.reduce(
    (total, [, brandProducts]) => total + brandProducts.length,
    0
  );
}

function getStockColor(stock) {
  if (stock === "Disponível") {
    return "#22c55e";
  }

  if (stock === "Últimas unidades") {
    return "#facc15";
  }

  if (stock === "Sob consulta") {
    return "#60a5fa";
  }

  if (stock === "Indisponível") {
    return "#ef4444";
  }

  return "#aaa";
}

const sectionStyle = {
  marginTop: "36px",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "16px",
  marginBottom: "24px",
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
  margin: 0,
  fontSize: "28px",
};

const counterStyle = {
  color: "#aaa",
  border: "1px solid #333",
  borderRadius: "10px",
  padding: "10px 14px",
  fontSize: "14px",
};

const categorySectionStyle = {
  marginBottom: "38px",
};

const categoryHeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  marginBottom: "18px",
  paddingBottom: "10px",
  borderBottom: "1px solid #2a2a2a",
};

const categoryTitleStyle = {
  color: "white",
  margin: 0,
  fontSize: "22px",
};

const categoryCounterStyle = {
  color: "#dc2626",
  fontWeight: "bold",
  fontSize: "13px",
};

const brandSectionStyle = {
  marginBottom: "26px",
  padding: "18px",
  backgroundColor: "#0d0d0d",
  border: "1px solid #202020",
  borderRadius: "16px",
};

const brandHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  marginBottom: "14px",
  flexWrap: "wrap",
};

const brandTitleStyle = {
  color: "#f87171",
  margin: 0,
  fontSize: "17px",
};

const brandCounterStyle = {
  color: "#888",
  fontSize: "13px",
};

const productsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "14px",
};

const productCardStyle = {
  backgroundColor: "#111",
  border: "1px solid #2a2a2a",
  borderRadius: "14px",
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  alignItems: "center",
};

const productInfoStyle = {
  display: "grid",
  gap: "5px",
};

const productNameStyle = {
  color: "white",
  fontSize: "15px",
};

const productDetailStyle = {
  color: "#aaa",
  fontSize: "13px",
};

const productPriceStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "17px",
};

const stockStyle = {
  fontSize: "13px",
  fontWeight: "bold",
};

const actionsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flexShrink: 0,
};

const editButtonStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  padding: "9px 12px",
  borderRadius: "9px",
  cursor: "pointer",
  fontWeight: "bold",
};

const deleteButtonStyle = {
  backgroundColor: "transparent",
  color: "#f87171",
  border: "1px solid #7f1d1d",
  padding: "9px 12px",
  borderRadius: "9px",
  cursor: "pointer",
  fontWeight: "bold",
};

const emptyStateStyle = {
  marginTop: "36px",
  backgroundColor: "#111",
  border: "1px solid #2a2a2a",
  borderRadius: "16px",
  padding: "34px",
  textAlign: "center",
};

const emptyTitleStyle = {
  color: "white",
  margin: "0 0 8px",
};

const emptyTextStyle = {
  color: "#aaa",
  margin: 0,
};

export default AdminProductList;