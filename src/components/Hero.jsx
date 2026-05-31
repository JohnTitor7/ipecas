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
  ChevronRight,
} from "lucide-react";

import heroBanner from "../assets/hero-banner.png";

function Hero() {
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

  return (
    <section style={sectionStyle}>
      <div style={mainGridStyle}>
        <aside style={sidebarStyle}>
          <div style={sidebarHeaderStyle}>
            <Menu size={18} />
            <strong>CATEGORIAS</strong>
          </div>

          <div>
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <a
                  key={category.name}
                  href="#catalogo"
                  style={categoryItemStyle}
                >
                  <span style={categoryIconStyle}>
                    <Icon size={19} />
                  </span>

                  <span style={{ flex: 1 }}>
                    <strong style={categoryNameStyle}>{category.name}</strong>
                    <small style={categoryDescriptionStyle}>
                      {category.description}
                    </small>
                  </span>

                  <ChevronRight size={18} style={categoryArrowStyle} />
                </a>
              );
            })}
          </div>

          <div style={qualityBoxStyle}>
            <ShieldCheck size={28} style={qualityIconStyle} />

            <div>
              <strong style={{ color: "#f87171" }}>
                Qualidade e confiança
              </strong>

              <p style={qualityTextStyle}>
                Trabalhamos com peças testadas e de alta qualidade.
              </p>
            </div>
          </div>
        </aside>

        <div>
          <div style={bannerImageWrapperStyle}>
            <img
              src={heroBanner}
              alt="Peças para celular"
              style={bannerImageStyle}
            />
          </div>

          <div style={brandAndInfoStyle}>
            <div style={brandsBoxStyle}>
              <p style={brandTitleStyle}>Marcas mais buscadas</p>

              <div style={brandListStyle}>
                {[
                  "Apple",
                  "Samsung",
                  "Motorola",
                  "Xiaomi",
                  "Realme",
                  "Infinix",
                ].map((brand) => (
                  <span key={brand} style={brandChipStyle}>
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div key={highlight.title} style={infoBoxStyle}>
                  <Icon size={27} style={infoIconStyle} />

                  <div>
                    <strong>{highlight.title}</strong>
                    <p style={infoDescriptionStyle}>
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

const sectionStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "24px 32px 36px",
};

const mainGridStyle = {
  display: "grid",
  gridTemplateColumns: "270px 1fr",
  gap: "22px",
  alignItems: "stretch",
};

const sidebarStyle = {
  backgroundColor: "#111",
  border: "1px solid #2a2a2a",
  borderRadius: "16px",
  overflow: "hidden",
  height: "fit-content",
};

const sidebarHeaderStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  padding: "16px 18px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontSize: "15px",
};

const categoryItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "13px 16px",
  borderBottom: "1px solid #242424",
  color: "#ddd",
  textDecoration: "none",
};

const categoryIconStyle = {
  width: "28px",
  color: "#dc2626",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const categoryNameStyle = {
  display: "block",
  color: "white",
  fontSize: "14px",
};

const categoryDescriptionStyle = {
  display: "block",
  color: "#888",
  fontSize: "12px",
  marginTop: "2px",
};

const categoryArrowStyle = {
  color: "#aaa",
};

const qualityBoxStyle = {
  margin: "14px",
  padding: "14px",
  backgroundColor: "#0a0a0a",
  border: "1px solid #333",
  borderRadius: "14px",
  display: "flex",
  gap: "12px",
  alignItems: "center",
};

const qualityIconStyle = {
  color: "#dc2626",
  flexShrink: 0,
};

const qualityTextStyle = {
  color: "#aaa",
  fontSize: "12px",
  margin: "4px 0 0",
  lineHeight: "1.4",
};

const bannerImageWrapperStyle = {
  border: "1px solid #2a2a2a",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "#050505",
};

const bannerImageStyle = {
  width: "100%",
  height: "365px",
  objectFit: "cover",
  display: "block",
};

const brandAndInfoStyle = {
  marginTop: "14px",
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
  gap: "12px",
};

const brandsBoxStyle = {
  backgroundColor: "#111",
  border: "1px solid #2a2a2a",
  borderRadius: "14px",
  padding: "14px",
};

const brandTitleStyle = {
  color: "white",
  margin: "0 0 10px",
  fontWeight: "bold",
};

const brandListStyle = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
};

const brandChipStyle = {
  color: "#ddd",
  border: "1px solid #333",
  borderRadius: "10px",
  padding: "8px 12px",
  fontSize: "13px",
};

const infoBoxStyle = {
  backgroundColor: "#111",
  border: "1px solid #2a2a2a",
  borderRadius: "14px",
  padding: "14px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const infoIconStyle = {
  color: "#dc2626",
  flexShrink: 0,
};

const infoDescriptionStyle = {
  color: "#aaa",
  margin: "4px 0 0",
  fontSize: "13px",
};

export default Hero;