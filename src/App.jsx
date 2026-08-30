import { useEffect, useState } from "react";

const zodiacImage = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zodiac_wheel.svg";
const readerImage = "https://images.unsplash.com/photo-1681809238092-e18a6ebe3dda?auto=format&fit=crop&w=900&q=85";
const whatsappUrl = "https://wa.me/?text=Hola%20Sof%C3%ADa%2C%20quisiera%20hacer%20una%20consulta";

const zodiacSparkles = [
  { x: "8%", y: "29%", size: "5px", delay: "-1.1s" },
  { x: "18%", y: "7%", size: "8px", delay: "-2.8s" },
  { x: "46%", y: "1%", size: "4px", delay: "-.4s" },
  { x: "76%", y: "9%", size: "7px", delay: "-3.5s" },
  { x: "94%", y: "35%", size: "5px", delay: "-2s" },
  { x: "88%", y: "72%", size: "8px", delay: "-.8s" },
  { x: "64%", y: "94%", size: "5px", delay: "-3.1s" },
  { x: "31%", y: "91%", size: "7px", delay: "-1.7s" },
  { x: "4%", y: "67%", size: "4px", delay: "-2.4s" },
];

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
    title: "Problemas de pareja",
    tag: "Amor & vínculos",
    copy: "Si estás atravesando problemas de pareja —desconfianza, distancia, terceros en discordia— la consulta esotérica te da respuestas claras y un trabajo espiritual a medida para destrabar la relación.",
    meta: "Trabajo espiritual a medida",
    image: readerImage,
    imageAlt: "Manos sosteniendo una baraja de tarot",
  },
  {
    title: "Mal de ojo y magia blanca",
    tag: "Protección & energía",
    copy: "Reconocer el mal de ojo a tiempo evita que se profundice. Trabajo con magia blanca para revertirlo, proteger tu energía y la de tu familia.",
    meta: "Protección energética",
    image: "https://images.unsplash.com/photo-1558467778-122dbb038e3b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Cartas de tarot desplegadas sobre una mesa",
  },
  {
    title: "Ayuda espiritual",
    tag: "Destrabar caminos",
    copy: "Cuando la vida se traba en todos los frentes, la ayuda espiritual y los trabajos espirituales abren el camino: veo el origen del problema y trabajo directamente sobre él.",
    meta: "Acompañamiento personal",
    image: "https://images.unsplash.com/photo-1570639945209-27852ea44516?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Mesa de tarot iluminada por velas",
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
            <div className="zodiac-wheel">
              <img src={zodiacImage} alt="Rueda de los signos del zodíaco" />
              <div className="sparkle-field" aria-hidden="true">
                {zodiacSparkles.map((sparkle, index) => (
                  <span
                    className="sparkle"
                    key={index}
                    style={{
                      "--sparkle-x": sparkle.x,
                      "--sparkle-y": sparkle.y,
                      "--sparkle-size": sparkle.size,
                      "--sparkle-delay": sparkle.delay,
                    }}
                  ></span>
                ))}
              </div>
            </div>
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
            <h2>Claridad y soluciones para lo que estás viviendo</h2>
            <p className="services-intro">Como vidente, en cada consulta esotérica leo tu situación con claridad: qué está pasando, por qué y qué hacer. Trabajo la videncia junto con rituales de amor y trabajos espirituales, para que la respuesta venga acompañada de una solución real.</p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card reveal" key={service.title} style={{ "--delay": `${index * 70}ms` }}>
                <img src={service.image} alt={service.imageAlt} />
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <span className="service-tag">{service.tag}</span>
                  <p>{service.copy}</p>
                  <div className="service-meta"><span>{service.meta}</span></div>
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
