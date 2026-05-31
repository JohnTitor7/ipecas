import {
  Battery,
  Cable,
  Camera,
  Headphones,
  MonitorSmartphone,
  Package,
  ShieldCheck,
  Smartphone,
  TabletSmartphone,
  Wrench,
  Zap,
  Truck,
  MessageCircle,
  SearchCheck,
  Menu,
  ChevronRight,
} from "lucide-react";

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

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Peças testadas",
      description: "e de qualidade",
    },
    {
      icon: Truck,
      title: "Envio rápido",
      description: "consulte disponibilidade",
    },
    {
      icon: Headphones,
      title: "Atendimento",
      description: "especializado",
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
          <div style={bannerStyle}>
            <div style={bannerContentStyle}>
              <p style={bannerLabelStyle}>#ipeças</p>

              <h2 style={bannerTitleStyle}>
                Peças e acessórios
                <span style={bannerTitleHighlightStyle}> para celulares</span>
              </h2>

              <p style={bannerDescriptionStyle}>
                Consulte preços e disponibilidade pelo WhatsApp com um de nossos
                atendentes.
              </p>

              <div style={benefitsStyle}>
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div key={benefit.title} style={benefitItemStyle}>
                      <Icon size={26} style={benefitIconStyle} />

                      <div>
                        <strong>{benefit.title}</strong>

                        <p style={benefitDescriptionStyle}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={phoneMockupStyle}>
              <div style={phoneScreenStyle}>
                <TabletSmartphone
                  size={70}
                  style={{
                    color: "rgba(255,255,255,0.16)",
                  }}
                />
              </div>

              <div style={phoneBodyStyle}>
                <div style={phoneBatteryStyle}>Li-ion</div>
                <Cable
                  size={42}
                  style={{
                    position: "absolute",
                    bottom: "28px",
                    right: "32px",
                    color: "rgba(255,255,255,0.18)",
                  }}
                />
              </div>
            </div>

            <div style={redDetailOneStyle} />
            <div style={redDetailTwoStyle} />
          </div>

          <div style={brandAndInfoStyle}>
            <div style={brandsBoxStyle}>
              <p style={brandTitleStyle}>Marcas mais buscadas</p>

              <div style={brandListStyle}>
                {["Apple", "Samsung", "Motorola", "Xiaomi", "Realme", "Infinix"].map(
                  (brand) => (
                    <span key={brand} style={brandChipStyle}>
                      {brand}
                    </span>
                  )
                )}
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

const bannerStyle = {
  position: "relative",
  minHeight: "365px",
  background:
    "radial-gradient(circle at 75% 50%, rgba(220, 38, 38, 0.28), transparent 30%), linear-gradient(135deg, #141414 0%, #050505 55%, #1a0505 100%)",
  border: "1px solid #2a2a2a",
  borderRadius: "16px",
  overflow: "hidden",
  padding: "50px",
  display: "flex",
  alignItems: "center",
};

const bannerContentStyle = {
  maxWidth: "620px",
  position: "relative",
  zIndex: 2,
};

const bannerLabelStyle = {
  color: "#dc2626",
  margin: "0 0 10px",
  fontWeight: "bold",
};

const bannerTitleStyle = {
  color: "white",
  fontSize: "56px",
  lineHeight: "1",
  margin: 0,
  fontWeight: "900",
};

const bannerTitleHighlightStyle = {
  display: "block",
  color: "#dc2626",
};

const bannerDescriptionStyle = {
  color: "#ddd",
  fontSize: "20px",
  lineHeight: "1.4",
  maxWidth: "520px",
  marginTop: "22px",
};

const benefitsStyle = {
  marginTop: "30px",
  display: "flex",
  gap: "22px",
  flexWrap: "wrap",
};

const benefitItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "white",
  fontSize: "13px",
};

const benefitIconStyle = {
  color: "#dc2626",
  flexShrink: 0,
};

const benefitDescriptionStyle = {
  color: "#aaa",
  margin: "3px 0 0",
};

const phoneMockupStyle = {
  position: "absolute",
  right: "60px",
  bottom: "35px",
  width: "290px",
  height: "280px",
  transform: "rotate(-8deg)",
  opacity: 0.92,
};

const phoneScreenStyle = {
  position: "absolute",
  right: "50px",
  top: "0",
  width: "150px",
  height: "260px",
  borderRadius: "22px",
  border: "2px solid #555",
  background: "linear-gradient(160deg, #222, #050505)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const phoneBodyStyle = {
  position: "absolute",
  right: "0",
  top: "35px",
  width: "155px",
  height: "245px",
  borderRadius: "20px",
  border: "2px solid #777",
  background: "linear-gradient(160deg, #111, #333 45%, #060606 100%)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
};

const phoneBatteryStyle = {
  position: "absolute",
  left: "35px",
  top: "70px",
  width: "80px",
  height: "105px",
  borderRadius: "8px",
  backgroundColor: "#111",
  border: "1px solid #555",
  color: "#777",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
};

const redDetailOneStyle = {
  position: "absolute",
  right: "-60px",
  top: "-30px",
  width: "180px",
  height: "18px",
  backgroundColor: "#dc2626",
  transform: "rotate(-38deg)",
  opacity: 0.75,
};

const redDetailTwoStyle = {
  position: "absolute",
  right: "-40px",
  bottom: "40px",
  width: "240px",
  height: "20px",
  backgroundColor: "#dc2626",
  transform: "rotate(-38deg)",
  opacity: 0.65,
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