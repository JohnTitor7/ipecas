import ProductCard from "./ProductCard";

function Catalog({ search, setSearch, products }) {
  return (
    <section
      id="catalogo"
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Catálogo de peças
      </h2>

      <input
        type="text"
        placeholder="Buscar peça, marca ou categoria..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "30px",
          borderRadius: "10px",
          border: "1px solid #333",
          backgroundColor: "#151515",
          color: "white",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Catalog;