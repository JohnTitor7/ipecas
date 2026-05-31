import { useState } from "react";

import {
  Battery,
  Headphones,
  MonitorSmartphone,
  Package,
  ShieldCheck,
  Smartphone,
  Wrench,
  Zap,
  MessageCircle,
  SearchCheck,
  Menu,
  X,
  ChevronRight,
  BadgeDollarSign,
} from "lucide-react";

import heroBanner from "../assets/hero-banner.png";
import "./Hero.css";

function Hero() {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const categories = [
    {
      name: "Telas",
      description: "Displays e Touch Screens",
      icon: MonitorSmartphone,
    },
    {
      name: "Baterias",
      description: "Baterias e Componentes",
      icon: Battery,
    },
    {
      name: "Conectores",
      description: "Conectores de Carga e FPC",
      icon: Zap,
    },
    {
      name: "Películas",
      description: "Vidros, Películas e Protetores",
      icon: ShieldCheck,
    },
    {
      name: "Acessórios",
      description: "Cabos, Carregadores e Mais",
      icon: Headphones,
    },
    {
      name: "Componentes",
      description: "Auto-falantes, Flex e Outros",
      icon: Smartphone,
    },
    {
      name: "Ferramentas",
      description: "Ferramentas e Utilitários",
      icon: Wrench,
    },
    {
      name: "Outros",
      description: "Diversos",
      icon: Package,
    },
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Peças de qualidade",
      description: "Produtos testados e selecionados",
    },
    {
      icon: BadgeDollarSign,
      title: "Melhores preços",
      description: "Competitivos do mercado",
    },
    {
      icon: MessageCircle,
      title: "Atendimento via WhatsApp",
      description: "Rápido e humanizado",
    },
    {
      icon: SearchCheck,
      title: "Consulte antes de comprar",
      description: "Confira preço e disponibilidade",
    },
  ];

  function openCategoryMenu() {
    setIsCategoryMenuOpen(true);
  }

  function closeCategoryMenu() {
    setIsCategoryMenuOpen(false);
  }

  return (
    <section className="hero-section">
      <button
        type="button"
        className="mobile-category-button"
        onClick={openCategoryMenu}
      >
        <Menu size={22} />
        Categorias
      </button>

      {isCategoryMenuOpen && (
        <button
          type="button"
          className="category-overlay"
          onClick={closeCategoryMenu}
          aria-label="Fechar menu de categorias"
        />
      )}

      <div className="hero-grid">
        <aside
          className={`hero-sidebar ${
            isCategoryMenuOpen ? "hero-sidebar-open" : ""
          }`}
        >
          <div className="hero-sidebar-header">
            <div className="hero-sidebar-title">
              <Menu size={18} />
              <strong>CATEGORIAS</strong>
            </div>

            <button
              type="button"
              className="hero-sidebar-close"
              onClick={closeCategoryMenu}
              aria-label="Fechar categorias"
            >
              <X size={22} />
            </button>
          </div>

          <div>
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <a
                  key={category.name}
                  href="#catalogo"
                  className="hero-category-link"
                  onClick={closeCategoryMenu}
                >
                  <span className="hero-category-icon">
                    <Icon size={19} />
                  </span>

                  <span className="hero-category-content">
                    <strong className="hero-category-name">
                      {category.name}
                    </strong>

                    <small className="hero-category-description">
                      {category.description}
                    </small>
                  </span>

                  <ChevronRight size={18} className="hero-category-arrow" />
                </a>
              );
            })}
          </div>

          <div className="hero-quality-box">
            <ShieldCheck size={28} className="hero-quality-icon" />

            <div>
              <strong className="hero-quality-title">
                Qualidade e confiança
              </strong>

              <p className="hero-quality-text">
                Trabalhamos com peças testadas e de alta qualidade.
              </p>
            </div>
          </div>
        </aside>

        <div className="hero-main-content">
          <div className="hero-banner-wrapper">
            <img
              src={heroBanner}
              alt="Peças para celular"
              className="hero-banner-image"
            />
          </div>

          <div className="hero-info-grid">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div key={highlight.title} className="hero-info-box">
                  <Icon size={30} className="hero-info-icon" />

                  <div>
                    <strong>{highlight.title}</strong>

                    <p className="hero-info-description">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;