import { Link } from "react-router-dom";
import { Search, MessageCircle } from "lucide-react";

function Header({ logo, search, onSearchChange }) {
  const whatsappNumber = "5521995519228";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <header>
      <div style={topBarStyle}>
        <div style={topBarContentStyle}>
          <span>Atendimento especializado</span>

          <div style={topBarRightStyle}>
            <span>Seg. a Sex: 08h às 18h</span>
            <span>|</span>
            <span>WhatsApp: (21) 99551-9228</span>
          </div>
        </div>
      </div>

      <div style={mainHeaderStyle}>
        <div style={mainHeaderContentStyle}>
          <Link to="/" style={logoContainerStyle}>
            <img src={logo} alt="Logo i Peças" style={logoStyle} />

            <h1 style={titleStyle}>i Peças</h1>
          </Link>

          <div style={searchContainerStyle}>
            <input
              type="text"
              placeholder="Buscar por peças, modelos ou códigos"
              value={search}
              onChange={onSearchChange}
              style={searchInputStyle}
            />

            <Search size={22} style={searchIconStyle} />
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={whatsappButtonStyle}
          >
            <span style={whatsappIconStyle}>
              <MessageCircle size={22} />
            </span>

            <span>
              <strong style={whatsappTitleStyle}>Fale no WhatsApp</strong>
              <small style={whatsappSubtitleStyle}>(21) 99551-9228</small>
            </span>
          </a>
        </div>
      </div>

      <nav style={navStyle}>
        <div style={navContentStyle}>
          <a href="#" style={activeNavLinkStyle}>
            Início
          </a>

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
            Flex e Cabos
          </a>

          <a href="#catalogo" style={navLinkStyle}>
            Câmeras
          </a>

          <a href="#catalogo" style={navLinkStyle}>
            Carcaças
          </a>

          <a href="#catalogo" style={navLinkStyle}>
            Auto-falantes
          </a>

          <a href="#catalogo" style={navLinkStyle}>
            Outros
          </a>
        </div>
      </nav>
    </header>
  );
}

const topBarStyle = {
  backgroundColor: "#050505",
  borderBottom: "1px solid #171717",
  padding: "8px 32px",
};

const topBarContentStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap",
  color: "#aaa",
  fontSize: "13px",
};

const topBarRightStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
};

const mainHeaderStyle = {
  backgroundColor: "#050505",
  padding: "18px 32px",
  borderBottom: "1px solid #171717",
};

const mainHeaderContentStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "auto minmax(320px, 1fr) auto",
  alignItems: "center",
  gap: "34px",
};

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  textDecoration: "none",
};

const logoStyle = {
  width: "78px",
  height: "78px",
  objectFit: "contain",
  display: "block",
};

const titleStyle = {
  color: "white",
  margin: 0,
  fontSize: "36px",
  lineHeight: 1,
  fontWeight: "800",
  whiteSpace: "nowrap",
};

const searchContainerStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#111",
  border: "1px solid #333",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)",
};

const searchInputStyle = {
  flex: 1,
  padding: "17px 18px",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  color: "white",
  fontSize: "15px",
};

const searchIconStyle = {
  marginRight: "18px",
  color: "white",
  opacity: 0.9,
  flexShrink: 0,
};

const whatsappButtonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  backgroundColor: "transparent",
  color: "white",
  textDecoration: "none",
  padding: "12px 20px",
  borderRadius: "14px",
  border: "1px solid #dc2626",
  boxShadow: "0 12px 30px rgba(220, 38, 38, 0.12)",
  whiteSpace: "nowrap",
};

const whatsappIconStyle = {
  color: "#dc2626",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const whatsappTitleStyle = {
  display: "block",
  color: "white",
  fontSize: "15px",
};

const whatsappSubtitleStyle = {
  color: "#ddd",
  fontSize: "13px",
};

const navStyle = {
  backgroundColor: "#0a0a0a",
  borderTop: "1px solid #111",
  borderBottom: "1px solid #1f1f1f",
  padding: "0 32px",
};

const navContentStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "38px",
  overflowX: "auto",
};

const navLinkStyle = {
  color: "#ddd",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "14px",
  textTransform: "uppercase",
  padding: "18px 0",
  whiteSpace: "nowrap",
};

const activeNavLinkStyle = {
  ...navLinkStyle,
  color: "#dc2626",
  borderBottom: "3px solid #dc2626",
};

export default Header;