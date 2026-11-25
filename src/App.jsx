import React, { useState } from "react";

import {
  ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Instagram,
  MapPin, Phone, Clock3, Sparkles, Star, Heart
} from "lucide-react";

const services = [
  { number: "01", title: "Stylizacja 1:1", description: "Subtelne podkreślenie spojrzenia i naturalny efekt na co dzień.", time: "1,5–2 godz.", price: "150 zł" },
  { number: "02", title: "Objętości 2D–3D", description: "Delikatna objętość, która dodaje rzęsom wyrazistości.", time: "2 godz.", price: "170 zł" },
  { number: "03", title: "Objętości 4D–6D", description: "Wyrazisty wachlarz i efekt, który przyciąga spojrzenia.", time: "2–2,5 godz.", price: "190 zł" },
  { number: "04", title: "Lifting rzęs", description: "Podkręcenie i optyczne uniesienie naturalnych rzęs.", time: "60–75 min", price: "130 zł" },
];

const gallery = [
  { src: "/moje1.png", alt: "Moja stylizacja rzęs 1" },
  { src: "/moje2.png", alt: "Moja stylizacja rzęs 2" },
  { src: "/moje3.png", alt: "Moja stylizacja rzęs 3" },
];

const reviews = [
  { quote: "Piękne, lekkie rzęsy i cudowna atmosfera. W końcu znalazłam swoje miejsce!", name: "Aleksandra K." },
  { quote: "Pełen profesjonalizm, dokładność i indywidualne podejście. Polecam z całego serca.", name: "Natalia M." },
  { quote: "Efekt jest dokładnie taki, jak chciałam. Wizyta to chwila relaksu tylko dla mnie.", name: "Karolina W." },
];

function SectionHeading({ eyebrow, title, note, light = false }) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">CHWILA DLA CIEBIE · PIĘKNO W KAŻDYM DETALU</div>
      <header className="header">
       <img
  src="/logo.png"
  alt="M&M Lashes"
  className="brand-logo"
/>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about" onClick={closeMenu}>O mnie</a>
          <a href="#services" onClick={closeMenu}>Usługi</a>
          <a href="#gallery" onClick={closeMenu}>Galeria</a>
          <a href="#prices" onClick={closeMenu}>Cennik</a>
          <a href="#contact" onClick={closeMenu} className="nav-cta">Umów wizytę <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow hero-eyebrow"><Sparkles size={14} /> TWOJE SPOJRZENIE, TWOJA HISTORIA</span>
          <h1>Piękno zaczyna się<br />od <em>spojrzenia.</em></h1>
          <p>Podkreśl swoją naturalną urodę dzięki stylizacji rzęs dopasowanej właśnie do Ciebie.</p>
          <a className="button button-light" href="#contact">Zarezerwuj wizytę <ArrowUpRight size={17} /></a>
        </div>
        <a className="scroll-cue" href="#about"><span>ODKRYJ WIĘCEJ</span><ArrowDown size={15} /></a>
        <div className="hero-index">01 / 04</div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="intro-image-wrap">
<img src="/moje-zdjecie.png" alt="Moje zdjęcie" />
          <div className="image-stamp"><span>MADE WITH</span><Heart size={18} /><span>CARE</span></div>
        </div>
        <div className="intro-copy">
          <span className="eyebrow">POZNAJMY SIĘ</span>
          <h2>Małe detale.<br /><em>Wielka różnica.</em></h2>
          <p className="lead">Witaj w Lash Atelier — miejscu, w którym piękno spotyka się z uważnością.</p>
          <p>Wierzę, że najlepsza stylizacja to taka, w której czujesz się po prostu sobą. Dlatego każdą aplikację dobieram indywidualnie, dbając o komfort, precyzję i efekt, który pasuje do Twojego stylu.</p>
          <a className="text-link" href="#services">Poznaj ofertę <ArrowRight size={16} /></a>
          <div className="signature">Do zobaczenia! <span>♡</span></div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <SectionHeading eyebrow="CHWILA TYLKO DLA CIEBIE" title={<>Usługi, które <em>pokochasz.</em></>} note="Wybierz efekt, w którym poczujesz się najlepiej. Każda stylizacja zaczyna się od krótkiej konsultacji." />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><Sparkles size={18} /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-bottom"><span><Clock3 size={14} /> {service.time}</span><strong>{service.price}</strong></div>
            </article>
          ))}
        </div>
        <p className="small-note">* Cennik ma charakter przykładowy — uzupełnij go o aktualne ceny salonu.</p>
      </section>

      <section className="quote-band">
        <span className="eyebrow">TWOJE PIĘKNO, TWOJE ZASADY</span>
        <p>„Elegancja tkwi w <em>prostocie</em>, a piękno w szczegółach.”</p>
      </section>

      <section className="gallery-section section-pad" id="gallery">
        <SectionHeading eyebrow="STWORZONE Z PRECYZJĄ" title={<>Zajrzyj do <em>galerii.</em></>} note="Każde spojrzenie jest inne. Zobacz wybrane inspiracje i efekty stylizacji." />
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className={`gallery-item gallery-${index + 1}`} key={item.src}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>LOOKBOOK / 0{index + 1}</figcaption>
            </figure>
          ))}
        </div>
        <a className="text-link gallery-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={17} /> Zobacz więcej na Instagramie <ArrowUpRight size={15} /></a>
      </section>

      <section className="prices section-pad" id="prices">
        <div className="prices-copy">
          <span className="eyebrow">INWESTYCJA W DOBRE SAMOPOCZUCIE</span>
          <h2>Przejrzysty<br /><em>cennik.</em></h2>
          <p>Nie wiesz, która metoda będzie dla Ciebie najlepsza? Napisz do mnie — wspólnie wybierzemy idealną stylizację.</p>
          <a className="button button-dark" href="#contact">Zapytaj o termin <ArrowUpRight size={16} /></a>
        </div>
        <div className="price-table">
          {services.map((service) => (
            <div className="price-row" key={service.number}>
              <div><span>{service.number}</span><strong>{service.title}</strong></div>
              <b>{service.price}</b>
            </div>
          ))}
          <p className="small-note">Uzupełnienia i zdjęcie stylizacji — wycena indywidualna.</p>
        </div>
      </section>

      <section className="reviews section-pad">
        <SectionHeading eyebrow="SŁOWA, KTÓRE CIESZĄ" title={<>Wasze <em>opinie.</em></>} />
        <div className="review-card">
          <div className="stars" aria-label="5 gwiazdek"><Star /><Star /><Star /><Star /><Star /></div>
          <blockquote>„{reviews[activeReview].quote}”</blockquote>
          <span className="review-name">{reviews[activeReview].name}</span>
          <div className="review-controls">
            {reviews.map((review, index) => (
              <button key={review.name} className={activeReview === index ? "dot active" : "dot"} onClick={() => setActiveReview(index)} aria-label={`Opinia ${index + 1}`} />
            ))}
          </div>
        </div>
        <p className="small-note">Przykładowe opinie — zastąp je prawdziwymi recenzjami klientek.</p>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-main">
          <span className="eyebrow">ZASŁUGUJESZ NA TĘ CHWILĘ</span>
          <h2>Gotowa na nowe<br /><em>spojrzenie?</em></h2>
          <p>Odezwij się i zarezerwuj swój termin. Z przyjemnością zadbam o Twoje rzęsy.</p>
          <a className="button button-light" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Napisz na Instagramie <ArrowUpRight size={16} /></a>
        </div>
        <div className="contact-details">
          <div><MapPin /><span><b>ADRES</b>Twoje miasto, ul. Przykładowa 1</span></div>
          <div><Phone /><span><b>TELEFON</b>+48 000 000 000</span></div>
          <div><Clock3 /><span><b>GODZINY OTWARCIA</b>Pon.–Pt. 9:00–18:00<br />Sob. 9:00–14:00</span></div>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-link"><Instagram /> @lashatelier <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">L<span>.</span></span><span className="brand-name">LASH ATELIER<small>BEAUTY STUDIO</small></span></a>
        <span>© {new Date().getFullYear()} LASH ATELIER. WSZYSTKIE PRAWA ZASTRZEŻONE.</span>
        <a href="#home">DO GÓRY ↑</a>
      </footer>
    </main>
  );
}