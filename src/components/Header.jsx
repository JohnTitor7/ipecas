function Header({ logo }) {
  return (
    <header
      style={{
        borderBottom: "1px solid #7f1d1d",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(90deg, #050505, #111111)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <img
          src={logo}
          alt="Logo i Peças"
          style={{
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #dc2626",
          }}
        />

        <div>
          <h1 style={{ color: "white", margin: 0, fontSize: "30px" }}>
            i Peças
          </h1>

          <p style={{ color: "#aaa", marginTop: "5px" }}>
            Peças de reposição para celulares
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/5521995519228"
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          padding: "12px 22px",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        WhatsApp
      </a>
    </header>
  );
}

export default Header;