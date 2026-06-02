import { useEffect, useState } from "react";
import {
  Battery,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Menu,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import heroBanner from "../assets/hero-banner.png";
import bannerTelas from "../assets/banners/banner-telas.png";
import bannerBaterias from "../assets/banners/banner-baterias.png";
import bannerConectores from "../assets/banners/banner-conectores.png";

import "./Hero.css";

const banners = [
  {
    id: 1,
    image: heroBanner,
    alt: "Peças para celular",
  },
  {
    id: 2,
    image: bannerTelas,
    alt: "Telas e películas para celular",
  },
  {
    id: 3,
    image: bannerBaterias,
    alt: "Baterias e componentes para celular",
  },
  {
    id: 4,
    image: bannerConectores,
    alt: "Conectores e acessórios para celular",
  },
];

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
    icon: Smartphone,
  },
];

const infoCards = [
  {
    title: "Peças de qualidade",
    description: "Produtos testados e selecionados",
    icon: ShieldCheck,
  },
  {
    title: "Melhores preços",
    description: "Competitivos do mercado",
    icon: Zap,
  },
  {
    title: "Atendimento via WhatsApp",
    description: "Rápido e humanizado",
    icon: Headphones,
  },
  {
    title: "Consulte antes de comprar",
    description: "Confira preço e disponibilidade",
    icon: MonitorSmartphone,
  },
];

function Hero({ onSelectCategory }) {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBannerIndex((currentIndex) =>
        currentIndex === banners.length - 1 ? 0 : currentIndex + 1
      );
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, []);

  function handleSelectCategory(categoryName) {
    onSelectCategory(categoryName);
    closeCategoryMenu();
  }

  function openCategoryMenu() {
    setIsCategoryMenuOpen(true);
  }

  function closeCategoryMenu() {
    setIsCategoryMenuOpen(false);
  }

  function goToBanner(index) {
    setActiveBannerIndex(index);
  }

  function goToPreviousBanner() {
    setActiveBannerIndex((currentIndex) =>
      currentIndex === 0 ? banners.length - 1 : currentIndex - 1
    );
  }

  function goToNextBanner() {
    setActiveBannerIndex((currentIndex) =>
      currentIndex === banners.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <button
          type="button"
          className="hero-mobile-menu-button"
          onClick={openCategoryMenu}
        >
          <Menu size={22} />
          Categorias
        </button>

        <div className="hero-layout">
          <CategorySidebar
            isOpen={isCategoryMenuOpen}
            onClose={closeCategoryMenu}
            onSelectCategory={handleSelectCategory}
          />

          {isCategoryMenuOpen && (
            <button
              type="button"
              className="hero-sidebar-overlay"
              onClick={closeCategoryMenu}
              aria-label="Fechar menu de categorias"
            />
          )}

          <div className="hero-main">
            <div className="hero-banner-carousel">
              <div className="hero-banner-slides">
                {banners.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={
                      index === activeBannerIndex
                        ? "hero-banner-slide active"
                        : "hero-banner-slide"
                    }
                  >
                    <img
                      src={banner.image}
                      alt={banner.alt}
                      className="hero-banner-image"
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="hero-banner-arrow hero-banner-arrow-left"
                onClick={goToPreviousBanner}
                aria-label="Banner anterior"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                className="hero-banner-arrow hero-banner-arrow-right"
                onClick={goToNextBanner}
                aria-label="Próximo banner"
              >
                <ChevronRight size={28} />
              </button>

              <div className="hero-banner-dots">
                {banners.map((banner, index) => (
                  <button
                    key={banner.id}
                    type="button"
                    className={
                      index === activeBannerIndex
                        ? "hero-banner-dot active"
                        : "hero-banner-dot"
                    }
                    onClick={() => goToBanner(index)}
                    aria-label={`Ir para o banner ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="hero-info-grid">
              {infoCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article key={card.title} className="hero-info-card">
                    <Icon size={30} className="hero-info-icon" />

                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategorySidebar({ isOpen, onClose, onSelectCategory }) {
  return (
    <aside className={isOpen ? "hero-sidebar open" : "hero-sidebar"}>
      <div className="hero-sidebar-header">
        <div className="hero-sidebar-title">
          <Menu size={20} />
          <span>Categorias</span>
        </div>

        <button
          type="button"
          className="hero-sidebar-close"
          onClick={onClose}
          aria-label="Fechar categorias"
        >
          <X size={22} />
        </button>
      </div>

      <nav className="hero-category-list">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              type="button"
              className="hero-category-link"
              onClick={() => onSelectCategory(category.name)}
            >
              <Icon size={20} className="hero-category-icon" />

              <span className="hero-category-text">
                <strong>{category.name}</strong>
                <small>{category.description}</small>
              </span>

              <ChevronRight size={18} className="hero-category-arrow" />
            </button>
          );
        })}
      </nav>

      <div className="hero-sidebar-card">
        <ShieldCheck size={26} />

        <div>
          <strong>Qualidade e confiança</strong>
          <p>Trabalhamos com peças testadas e de alta qualidade.</p>
        </div>
      </div>
    </aside>
  );
}

export default Hero;