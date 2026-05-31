import { Link } from "react-router-dom";
import { MessageCircle, Search } from "lucide-react";
import "./Header.css";

function Header({
  logo,
  search,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onClearCategory,
}) {
  const whatsappNumber = "5521995519228";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const navItems = [
  { label: "Início", category: "Todos" },
  { label: "Telas", category: "Telas" },
  { label: "Baterias", category: "Baterias" },
  { label: "Conectores", category: "Conectores" },
  { label: "Flex e Cabos", category: "Cabos" },
  { label: "Câmeras", category: "Câmeras" },
  { label: "Carcaças", category: "Carcaças" },
  { label: "Auto-falantes", category: "Componentes" },
  { label: "Outros", category: "Outros" },
];

  return (
    <header className="site-header">
      <div className="header-topbar">
        <div className="header-topbar-content">
          <span>Atendimento especializado</span>

          <div className="header-topbar-right">
            <span>Seg. a Sex: 08h às 18h</span>
            <span>|</span>
            <span>WhatsApp: (21) 99551-9228</span>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="header-main-content">
          <Link to="/" className="header-logo-area">
            <img src={logo} alt="Logo i Peças" className="header-logo" />

            <h1 className="header-title">i Peças</h1>
          </Link>

          <div className="header-search">
            <input
              type="text"
              placeholder="Buscar por peças, modelos ou códigos"
              value={search}
              onChange={onSearchChange}
              className="header-search-input"
            />

            <Search size={22} className="header-search-icon" />
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="header-whatsapp"
          >
            <MessageCircle size={24} className="header-whatsapp-icon" />

            <span>
              <strong>Fale no WhatsApp</strong>
              <small>(21) 99551-9228</small>
            </span>
          </a>
        </div>
      </div>

      <nav className="header-nav">
        <div className="header-nav-content">
          {navItems.map((item) => {
  const isActive = selectedCategory === item.category;

  return (
              <button
                key={item.label}
                type="button"
                onClick={() =>
                  item.category === "Todos"
                    ? onClearCategory()
                    : onSelectCategory(item.category)
                }
                className={isActive ? "header-nav-link active" : "header-nav-link"}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Header;