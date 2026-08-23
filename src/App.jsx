import { useEffect, useState } from "react";

const zodiacImage = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zodiac_wheel.svg";
const readerImage = "https://images.unsplash.com/photo-1681809238092-e18a6ebe3dda?auto=format&fit=crop&w=900&q=85";
const whatsappUrl = "https://wa.me/?text=Hola%20Sof%C3%ADa%2C%20quisiera%20hacer%20una%20consulta";

const specialties = [
  { icon: "fa-eye", label: "Videncia" },
  { icon: "fa-moon", label: "Astrología" },
  { icon: "fa-hashtag", label: "Numerología" },
  { icon: "fa-layer-group", label: "Tarot" },
  { icon: "fa-hand-sparkles", label: "Energía" },
  { icon: "fa-gem", label: "Limpiezas" },
];

const services = [
  {
    title: "Lectura de tarot",
    tag: "Tarot & claridad",
    copy: "Encontrá respuestas sobre el amor, el trabajo, tus proyectos y las decisiones que hoy te inquietan.",
    meta: "Consulta personal",
  },
  {
    title: "Videncia",
    tag: "Intuición & futuro",
    copy: "Una conexión sensible para reconocer señales, comprender el presente y mirar posibilidades futuras.",
    meta: "A distancia",
  },
  {
    title: "Orientación afectiva",
    tag: "Amor & vínculos",
    copy: "Comprendé distancias, cambios y dinámicas de pareja desde un espacio confidencial y sin juicios.",
    meta: "Atención privada",
  },
  {
    title: "Limpieza energética",
    tag: "Armonía & renovación",
    copy: "Prácticas de armonización para personas y espacios que necesitan recuperar una energía más liviana.",
    meta: "Personal o espacios",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-wrap">
      <header className="header">
        <nav className={`nav nav-left ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#especialidades" onClick={closeMenu}>Especialidades</a>
        </nav>

        <a className="brand" href="#inicio" aria-label="Sofía Tarot, inicio">
          <span className="brand-rays">✦</span>
          <strong>SOFÍA</strong>
          <small>TAROT</small>
        </a>

        <nav className={`nav nav-right ${menuOpen ? "is-open" : ""}`}>
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>

        <button className="menu-button" aria-expanded={menuOpen} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true"></i>
        </button>

        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#especialidades" onClick={closeMenu}>Especialidades</a>
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy reveal is-visible">
            <p className="script-label">Sofía Tarot</p>
            <h1>Descubrí las respuestas que esconde tu destino</h1>
            <p className="hero-text">Una guía espiritual cercana y confiable para acompañarte en los momentos más importantes de tu vida.</p>
            <a className="gradient-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Descubrí tu lectura</a>
          </div>

          <div className="hero-visual reveal is-visible">
            <div className="zodiac-glow"></div>
            <img src={zodiacImage} alt="Rueda de los signos del zodíaco" />
          </div>
        </section>

        <section className="specialties reveal" id="especialidades" aria-label="Especialidades">
          {specialties.map((item) => (
            <article className="specialty-card" key={item.label}>
              <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="services" id="servicios">
          <div className="section-heading reveal">
            <p className="script-label">Servicios destacados</p>
            <h2>Una guía para cada momento</h2>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card reveal" key={service.title} style={{ "--delay": `${index * 70}ms` }}>
                <img src={readerImage} alt="Consulta de tarot sobre una mesa" />
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <span className="service-tag">{service.tag}</span>
                  <p>{service.copy}</p>
                  <div className="service-meta"><span><i className="fa-solid fa-star" aria-hidden="true"></i> 4.9</span><span>{service.meta}</span></div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true"></i> Consultar</a>
                </div>
              </article>
            ))}
          </div>

          <a className="gradient-button explore-button reveal" href="#sobre-mi">Conocer más</a>
        </section>

        <section className="about" id="sobre-mi">
          <div className="about-image reveal">
            <img src={readerImage} alt="Lectura personal de cartas de tarot" />
          </div>
          <div className="about-copy reveal">
            <p className="script-label">Lo que hago</p>
            <h2>Orientación espiritual cuando más la necesitás.</h2>
            <p>Soy Sofía. Desde muy joven aprendí a escuchar mi intuición y a leer los símbolos de las cartas. Cada encuentro es personal, respetuoso y absolutamente confidencial.</p>
            <ul>
              <li><i className="fa-solid fa-check" aria-hidden="true"></i> Consultas presenciales y a distancia</li>
              <li><i className="fa-solid fa-check" aria-hidden="true"></i> Escucha cercana y sin juicios</li>
              <li><i className="fa-solid fa-check" aria-hidden="true"></i> Orientación clara y personalizada</li>
            </ul>
          </div>
        </section>

        <section className="contact reveal" id="contacto">
          <p className="script-label">Tu consulta empieza acá</p>
          <h2>Hablemos de eso que hoy te inquieta</h2>
          <p>Escribime por WhatsApp y coordinamos una consulta en la modalidad que te resulte más cómoda.</p>
          <a className="gradient-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true"></i> Escribirle a Sofía</a>
        </section>
      </main>

      <footer>
        <div><strong>SOFÍA TAROT</strong><span>Lecturas presenciales y a distancia</span></div>
        <p>El tarot brinda orientación simbólica y no sustituye asesoramiento profesional.</p>
        <a href="https://zigodev.com.ar" target="_blank" rel="noopener noreferrer">Hecho por zigodev</a>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp">
        <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default App;
