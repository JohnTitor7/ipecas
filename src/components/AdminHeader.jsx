import { Link } from "react-router-dom";

function AdminHeader({ logo, onLogout }) {
  return (
    <header style={adminHeaderStyle}>
      <div style={adminHeaderContentStyle}>
        <Link to="/" style={logoAreaStyle}>
          <img src={logo} alt="Logo i Peças" style={logoStyle} />

          <div>
            <h1 style={titleStyle}>i Peças</h1>
            <p style={subtitleStyle}>Painel administrativo</p>
          </div>
        </Link>

        <div style={actionsStyle}>
          <Link to="/" style={secondaryButtonStyle}>
            Voltar para o site
          </Link>

          <button type="button" onClick={onLogout} style={logoutButtonStyle}>
            Sair do painel
          </button>
        </div>
      </div>
    </header>
  );
}

const adminHeaderStyle = {
  backgroundColor: "#050505",
  borderBottom: "1px solid #1f1f1f",
  padding: "18px 32px",
};

const adminHeaderContentStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
  flexWrap: "wrap",
};

const logoAreaStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  textDecoration: "none",
};

const logoStyle = {
  width: "64px",
  height: "64px",
  objectFit: "contain",
  display: "block",
};

const titleStyle = {
  color: "white",
  margin: 0,
  fontSize: "30px",
  lineHeight: 1,
  fontWeight: "800",
};

const subtitleStyle = {
  color: "#dc2626",
  margin: "6px 0 0",
  fontSize: "13px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const actionsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
};

const secondaryButtonStyle = {
  color: "#ddd",
  textDecoration: "none",
  border: "1px solid #333",
  padding: "11px 14px",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "14px",
};

const logoutButtonStyle = {
  backgroundColor: "transparent",
  color: "#f87171",
  border: "1px solid #7f1d1d",
  padding: "11px 14px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
};

export default AdminHeader;