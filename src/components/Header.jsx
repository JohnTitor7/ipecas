import { Link } from "react-router-dom";

function Header({ logo, search, onSearchChange }) {
  const whatsappNumber = "5521995519228";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <header>
      <div style={topHeaderStyle}>
        <div style={headerContentStyle}>
          <Link to="/" style={logoContainerStyle}>
            <img src={logo} alt="Logo i Peças" style={logoStyle} />

            <div>
              <h1 style={titleStyle}>i Peças</h1>

              <p style={subtitleStyle}>Peças de reposição para celulares</p>
            </div>
          </Link>

          <div style={searchContainerStyle}>
            <input
              type="text"
              placeholder="O que está procurando?"
              value={search}
              onChange={onSearchChange}
              style={searchInputStyle}
            />

            <span style={searchIconStyle}>🔍</span>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={whatsappButtonStyle}
          >
            WhatsApp
          </a>
        </div>
      </div>

      <nav style={navStyle}>
        <div style={navContentStyle}>
          <span style={menuLabelStyle}>☰ Menu</span>

          <a href="#catalogo" style={navLinkStyle}>
            Telas
          </a>

          <a href="#catalogo" style={navLinkStyle}>
            Baterias
          </a>

          <a href="#catalogo" style={navLinkStyle}>
            Conectores
          </a>

          <a href="#catalogo" style={navLinkStyle}>
            Películas
          </a>

          <a href="#catalogo" style={navLinkStyle}>
            Acessórios
          </a>
        </div>
      </nav>
    </header>
  );
}

const topHeaderStyle = {
  backgroundColor: "#050505",
  borderBottom: "1px solid #7f1d1d",
  padding: "18px 40px",
};

const headerContentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
  flexWrap: "wrap",
};

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  textDecoration: "none",
};

const logoStyle = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "2px solid #dc2626",
};

const titleStyle = {
  color: "white",
  margin: 0,
  fontSize: "30px",
  lineHeight: 1,
};

const subtitleStyle = {
  color: "#aaa",
  margin: "6px 0 0",
  fontSize: "15px",
};

const searchContainerStyle = {
  flex: 1,
  minWidth: "260px",
  maxWidth: "520px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#111",
  border: "1px solid #333",
  borderRadius: "14px",
  overflow: "hidden",
};

const searchInputStyle = {
  flex: 1,
  padding: "15px 16px",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  color: "white",
  fontSize: "15px",
};

const searchIconStyle = {
  padding: "0 18px",
  color: "#dc2626",
  fontSize: "22px",
  fontWeight: "bold",
};

const whatsappButtonStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  textDecoration: "none",
  padding: "14px 24px",
  borderRadius: "14px",
  fontWeight: "bold",
  boxShadow: "0 10px 25px rgba(220, 38, 38, 0.25)",
};

const navStyle = {
  backgroundColor: "#0a0a0a",
  borderBottom: "1px solid #1f1f1f",
  padding: "12px 40px",
};

const navContentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  gap: "24px",
  flexWrap: "wrap",
  color: "white",
  fontSize: "15px",
  fontWeight: "600",
};

const menuLabelStyle = {
  color: "#dc2626",
};

const navLinkStyle = {
  color: "#ddd",
  textDecoration: "none",
};

export default Header;