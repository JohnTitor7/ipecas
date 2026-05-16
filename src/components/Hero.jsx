function Hero() {
  return (
    <section
      style={{
        padding: "80px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          maxWidth: "800px",
          lineHeight: "1.2",
          margin: "0 auto",
        }}
      >
        Consulte preços e disponibilidade de peças.
      </h2>

      <p
        style={{
          color: "#aaa",
          fontSize: "20px",
          marginTop: "20px",
          maxWidth: "750px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Loja especializada em telas, baterias, conectores e acessórios para
        smartphones.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#catalogo"
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            textDecoration: "none",
            border: "none",
            padding: "15px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Ver catálogo
        </a>

        <a
          href="https://wa.me/5521995519228"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundColor: "transparent",
            color: "white",
            textDecoration: "none",
            border: "1px solid #555",
            padding: "15px 25px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Consultar estoque
        </a>
      </div>
    </section>
  );
}

export default Hero;