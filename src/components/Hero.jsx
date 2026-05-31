function Hero() {
  const categories = [
    "Telas",
    "Baterias",
    "Conectores",
    "Películas",
    "Capas",
    "Cabos",
    "Áudio",
    "Acessórios",
  ];

  return (
    <section style={heroSectionStyle}>
      <div style={heroGridStyle}>
        <aside style={categoriesBoxStyle}>
          <div style={categoriesHeaderStyle}>☰ Categorias</div>

          <div>
            {categories.map((category) => (
              <a key={category} href="#catalogo" style={categoryLinkStyle}>
                {category}
                <span style={categoryArrowStyle}>›</span>
              </a>
            ))}
          </div>
        </aside>

        <div style={bannerStyle}>
          <div style={bannerContentStyle}>
            <p style={labelStyle}>i Peças</p>

            <h2 style={titleStyle}>
              Peças de reposição para celulares com consulta rápida.
            </h2>

            <p style={descriptionStyle}>
              Encontre telas, baterias, conectores, películas e acessórios com
              preço e disponibilidade atualizados.
            </p>

            <div style={buttonGroupStyle}>
              <a href="#catalogo" style={primaryButtonStyle}>
                Ver catálogo
              </a>

              <a
                href="https://wa.me/5521995519228"
                target="_blank"
                rel="noreferrer"
                style={secondaryButtonStyle}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div style={redBlurStyle} />

          <div style={watermarkStyle}>iP</div>
        </div>
      </div>
    </section>
  );
}

const heroSectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "35px 40px 60px",
};

const heroGridStyle = {
  display: "grid",
  gridTemplateColumns: "260px 1fr",
  gap: "24px",
  alignItems: "stretch",
};

const categoriesBoxStyle = {
  backgroundColor: "#111",
  border: "1px solid #333",
  borderRadius: "18px",
  overflow: "hidden",
};

const categoriesHeaderStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  padding: "16px 20px",
  fontWeight: "bold",
  fontSize: "16px",
};

const categoryLinkStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 20px",
  color: "#ddd",
  textDecoration: "none",
  borderBottom: "1px solid #222",
  fontSize: "15px",
};

const categoryArrowStyle = {
  color: "#dc2626",
};

const bannerStyle = {
  position: "relative",
  minHeight: "360px",
  background: "linear-gradient(135deg, #111 0%, #050505 55%, #450a0a 100%)",
  border: "1px solid #333",
  borderRadius: "22px",
  overflow: "hidden",
  padding: "45px",
  display: "flex",
  alignItems: "center",
};

const bannerContentStyle = {
  maxWidth: "620px",
  position: "relative",
  zIndex: 2,
};

const labelStyle = {
  color: "#dc2626",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "14px",
};

const titleStyle = {
  fontSize: "44px",
  lineHeight: "1.1",
  margin: 0,
  color: "white",
};

const descriptionStyle = {
  color: "#bbb",
  fontSize: "18px",
  marginTop: "20px",
  maxWidth: "560px",
};

const buttonGroupStyle = {
  marginTop: "30px",
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
};

const primaryButtonStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  textDecoration: "none",
  padding: "14px 22px",
  borderRadius: "12px",
  fontWeight: "bold",
};

const secondaryButtonStyle = {
  backgroundColor: "transparent",
  color: "white",
  textDecoration: "none",
  padding: "14px 22px",
  borderRadius: "12px",
  border: "1px solid #555",
  fontWeight: "bold",
};

const redBlurStyle = {
  position: "absolute",
  right: "-80px",
  bottom: "-100px",
  width: "340px",
  height: "340px",
  borderRadius: "50%",
  backgroundColor: "rgba(220, 38, 38, 0.18)",
  filter: "blur(4px)",
};

const watermarkStyle = {
  position: "absolute",
  right: "40px",
  top: "45px",
  color: "rgba(255,255,255,0.06)",
  fontSize: "120px",
  fontWeight: "bold",
};

export default Hero;