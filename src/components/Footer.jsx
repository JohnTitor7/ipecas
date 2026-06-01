import { Link } from "react-router-dom";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <section style={ctaSectionStyle}>
        <div>
          <p style={ctaLabelStyle}>Atendimento especializado</p>

          <h2 style={ctaTitleStyle}>
            Precisa consultar uma peça para celular?
          </h2>

          <p style={ctaTextStyle}>
            Fale com a loja pelo WhatsApp e confirme preço, disponibilidade e
            compatibilidade antes de comprar.
          </p>
        </div>

        <a
          href="https://wa.me/5521995519228"
          target="_blank"
          rel="noreferrer"
          style={ctaButtonStyle}
        >
          <MessageCircle size={22} />
          Falar no WhatsApp
        </a>
      </section>

      <section style={infoSectionStyle}>
        <div style={brandColumnStyle}>
          <h3 style={brandTitleStyle}>i Peças</h3>

          <p style={brandTextStyle}>
            Vitrine digital para consulta de peças de reposição, acessórios e
            componentes para celulares.
          </p>

          <div style={securityBadgeStyle}>
            <ShieldCheck size={20} />
            <span>Consulta rápida e atendimento humanizado</span>
          </div>
        </div>

        <div style={footerColumnStyle}>
          <h4 style={columnTitleStyle}>Categorias</h4>

          <a href="#catalogo" style={footerLinkStyle}>
            Telas
          </a>
          <a href="#catalogo" style={footerLinkStyle}>
            Baterias
          </a>
          <a href="#catalogo" style={footerLinkStyle}>
            Conectores
          </a>
          <a href="#catalogo" style={footerLinkStyle}>
            Acessórios
          </a>
        </div>

        <div style={footerColumnStyle}>
          <h4 style={columnTitleStyle}>Atendimento</h4>

          <p style={infoItemStyle}>
            <Clock size={17} />
            Seg. a Sex: 08h às 18h
          </p>

          <p style={infoItemStyle}>
            <MessageCircle size={17} />
            (21) 99551-9228
          </p>

          <p style={infoItemStyle}>
            <Mail size={17} />
            Atendimento via WhatsApp
          </p>
        </div>

        <div style={footerColumnStyle}>
          <h4 style={columnTitleStyle}>Loja</h4>

          <p style={infoItemStyle}>
            <Smartphone size={17} />
            Peças para celulares
          </p>

          <p style={infoItemStyle}>
            <MapPin size={17} />
            Consulte disponibilidade com a loja
          </p>

          <Link to="/admin" style={adminLinkStyle}>
            Área administrativa
          </Link>
        </div>
      </section>

      <div style={bottomBarStyle}>
        <p style={bottomTextStyle}>
          © {new Date().getFullYear()} i Peças. Todos os direitos reservados.
        </p>

        <p style={bottomTextStyle}>Desenvolvido por Ryan Vieira</p>
      </div>
    </footer>
  );
}

const footerStyle = {
  marginTop: "20px",
  backgroundColor: "#050505",
  borderTop: "1px solid #1f1f1f",
};

const ctaSectionStyle = {
  background: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "34px 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
  flexWrap: "wrap",
};

const ctaLabelStyle = {
  color: "#fee2e2",
  margin: "0 0 8px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "13px",
};

const ctaTitleStyle = {
  color: "white",
  margin: "0 0 8px",
  fontSize: "30px",
};

const ctaTextStyle = {
  color: "#fee2e2",
  margin: 0,
  maxWidth: "660px",
  lineHeight: "1.5",
};

const ctaButtonStyle = {
  backgroundColor: "#050505",
  color: "white",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: "12px",
  fontWeight: "bold",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  whiteSpace: "nowrap",
};

const infoSectionStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "42px 32px",
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1.2fr 1.2fr",
  gap: "32px",
};

const brandColumnStyle = {
  maxWidth: "430px",
};

const brandTitleStyle = {
  color: "white",
  fontSize: "30px",
  margin: "0 0 12px",
};

const brandTextStyle = {
  color: "#aaa",
  lineHeight: "1.6",
  margin: "0 0 18px",
};

const securityBadgeStyle = {
  color: "#f87171",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  fontWeight: "bold",
  fontSize: "14px",
};

const footerColumnStyle = {
  display: "grid",
  alignContent: "start",
  gap: "10px",
};

const columnTitleStyle = {
  color: "white",
  margin: "0 0 8px",
  fontSize: "17px",
};

const footerLinkStyle = {
  color: "#aaa",
  textDecoration: "none",
  fontSize: "14px",
};

const infoItemStyle = {
  color: "#aaa",
  margin: 0,
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
};

const adminLinkStyle = {
  color: "#dc2626",
  textDecoration: "none",
  fontWeight: "bold",
  marginTop: "6px",
  fontSize: "14px",
};

const bottomBarStyle = {
  borderTop: "1px solid #1f1f1f",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "18px 32px",
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
};

const bottomTextStyle = {
  color: "#777",
  margin: 0,
  fontSize: "13px",
};

export default Footer;