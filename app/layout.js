"use client";

import { useState } from "react";

const copy = {
  de: {
    nav: {
      home: "Start",
      services: "Leistungen",
      about: "Über uns",
      process: "Ablauf",
      contact: "Kontakt",
    },
    cta: "Service anfragen",
    badge: "Premium Property Services",
    heroTitle: "Komplette Unterstützung rund um Immobilien.",
    heroText:
      "OmniWorks Services unterstützt Hausverwaltungen, Eigentümer und Privatkunden mit strukturierten Lösungen für Umzüge, Räumungen, Objektvorbereitung und Projektkoordination.",
    heroPrimary: "Kontakt aufnehmen",
    heroSecondary: "Leistungen ansehen",
    focus: "Fokus",
    cards: [
      {
        title: "Umzug",
        text: "Effiziente Unterstützung bei Objektwechseln, Übergaben und logistischen Abläufen.",
      },
      {
        title: "Räumung",
        text: "Zuverlässige Lösungen für Wohnungen, Häuser, Keller, Lagerflächen und Gewerbeobjekte.",
      },
      {
        title: "Vorbereitung",
        text: "Vorbereitung leerstehender Objekte vor Neuvermietung, Verkauf oder interner Übergabe.",
      },
      {
        title: "Koordination",
        text: "Ein zentraler Ansprechpartner für strukturierte Planung und externe Koordination.",
      },
    ],
    servicesLabel: "Leistungen",
    servicesTitle: "Strukturierte Lösungen für Objekt- und Immobilienabläufe.",
    servicesText:
      "Eine professionelle Leistungsdarstellung, die bei Eigentümern, Hausverwaltungen und Privatkunden Vertrauen schafft.",
    serviceArea: "Leistungsbereich",
    services: [
      {
        title: "Umzugsservice",
        text: "Effiziente Unterstützung bei Umzügen, Wohnungsauflösungen und Objektübergaben im Rhein-Main-Gebiet.",
      },
      {
        title: "Räumungsservice",
        text: "Komplette oder teilweise Räumungslösungen für Wohnungen, Häuser, Keller, Lagerräume und Gewerbeflächen.",
      },
      {
        title: "Objektvorbereitung",
        text: "Vorbereitung von leerstehenden Immobilien vor Neuvermietung, Verkauf oder interner Übergabe.",
      },
      {
        title: "Projektkoordination",
        text: "Ein Ansprechpartner für Planung, Terminabstimmung und Koordination externer Leistungen.",
      },
    ],
    aboutLabel: "Über uns",
    aboutTitle: "Ein hochwertiger Markenauftritt für ein Serviceunternehmen mit klarer Struktur.",
    aboutText: [
      "OmniWorks Services ist als zuverlässiger Partner für Immobilien- und Objektservices positioniert – mit Fokus auf Klarheit, Reaktionsgeschwindigkeit und professioneller Koordination.",
      "Die Website ist bewusst seriös, hochwertig und vertrauenswürdig aufgebaut, ohne unnötige technische Aussagen zu treffen.",
      "So entsteht eine starke Markenbasis für spätere Erweiterung, zusätzliche Leistungen und eine größere Marktpräsenz.",
    ],
    processLabel: "Ablauf",
    processTitle: "Klare Schritte. Professionelle Umsetzung.",
    process: [
      {
        step: "01",
        title: "Anfrage",
        text: "Sie senden uns die Eckdaten Ihres Projekts und erhalten zeitnah eine Rückmeldung.",
      },
      {
        step: "02",
        title: "Bewertung",
        text: "Wir prüfen Umfang, Zeitrahmen und praktische Anforderungen.",
      },
      {
        step: "03",
        title: "Umsetzung",
        text: "Wir organisieren den Ablauf und halten die Kommunikation klar und effizient.",
      },
      {
        step: "04",
        title: "Abschluss",
        text: "Das Objekt wird bereit für den nächsten Schritt hinterlassen.",
      },
    ],
    contactLabel: "Kontakt",
    contactTitle: "Bereit für einen professionellen Außenauftritt.",
    contactText:
      "Ersetzen Sie die Platzhalter unten durch Ihre tatsächlichen Kontaktdaten, bevor Sie die Seite veröffentlichen.",
    phone: "Telefon",
    email: "E-Mail",
    area: "Einsatzgebiet",
    areaValue: "Rhein-Main-Gebiet",
    sendRequest: "Anfrage senden",
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      process: "Process",
      contact: "Contact",
    },
    cta: "Request Service",
    badge: "Premium Property Services",
    heroTitle: "Complete support for property operations.",
    heroText:
      "OmniWorks Services supports property managers, landlords, and private clients with structured solutions for relocations, clearance, property preparation, and project coordination.",
    heroPrimary: "Contact Us",
    heroSecondary: "Explore Services",
    focus: "Focus",
    cards: [
      {
        title: "Move",
        text: "Efficient support for property transitions, handovers, and logistics.",
      },
      {
        title: "Clear",
        text: "Reliable solutions for apartments, houses, basements, storage spaces, and commercial units.",
      },
      {
        title: "Prepare",
        text: "Preparation of vacant properties before new tenants, sale, or internal handover.",
      },
      {
        title: "Coordinate",
        text: "One central contact for structured planning and external coordination.",
      },
    ],
    servicesLabel: "Services",
    servicesTitle: "Structured solutions for property and operational workflows.",
    servicesText:
      "A professional service presentation designed to create trust with landlords, property managers, and private clients.",
    serviceArea: "Service Area",
    services: [
      {
        title: "Move Services",
        text: "Efficient support for relocations, apartment clear-outs, and property handovers across the Rhein-Main area.",
      },
      {
        title: "Clearance Services",
        text: "Full or partial clearance solutions for apartments, houses, basements, storage units, and commercial spaces.",
      },
      {
        title: "Property Preparation",
        text: "Preparation of vacant properties before new tenants, sale, or internal handover.",
      },
      {
        title: "Project Coordination",
        text: "One point of contact for planning, scheduling, and coordinating external services.",
      },
    ],
    aboutLabel: "About",
    aboutTitle: "A premium brand presence for a structured service business.",
    aboutText: [
      "OmniWorks Services is positioned as a reliable partner for property and operational services with a focus on clarity, responsiveness, and professional coordination.",
      "The website language is intentionally structured to feel serious, premium, and trustworthy without making unnecessary technical claims.",
      "This creates a strong brand base for future expansion into additional services, more staff, and broader market visibility.",
    ],
    processLabel: "Process",
    processTitle: "Clear steps. Professional execution.",
    process: [
      {
        step: "01",
        title: "Request",
        text: "Send us the details of your project and receive a prompt response.",
      },
      {
        step: "02",
        title: "Assessment",
        text: "We review the scope, timeline, and practical requirements.",
      },
      {
        step: "03",
        title: "Execution",
        text: "We organize the process and keep communication clear and efficient.",
      },
      {
        step: "04",
        title: "Completion",
        text: "The property is left ready for the next step.",
      },
    ],
    contactLabel: "Contact",
    contactTitle: "Ready for a professional company presence.",
    contactText:
      "Replace the placeholders below with your actual business contact details before publishing.",
    phone: "Phone",
    email: "Email",
    area: "Service Area",
    areaValue: "Rhein-Main Area",
    sendRequest: "Send Request",
  },
};

export default function HomePage() {
  const [lang, setLang] = useState("de");
  const t = copy[lang];

  return (
    <main>
      <header className="site-header">
        <div>
          <div className="brand">OMNIWORKS</div>
          <div className="brand-sub">SERVICES</div>
        </div>

        <nav className="nav">
          <a href="#home">{t.nav.home}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <div className="lang-switch">
            <button
              className={lang === "de" ? "active" : ""}
              onClick={() => setLang("de")}
            >
              DE
            </button>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <a href="#contact" className="outline-btn">
            {t.cta}
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-left">
          <div className="badge">{t.badge}</div>
          <h1>{t.heroTitle}</h1>
          <div className="gold-line"></div>
          <p>{t.heroText}</p>
          <div className="hero-buttons">
            <a href="#contact" className="gold-btn">
              {t.heroPrimary}
            </a>
            <a href="#services" className="ghost-btn">
              {t.heroSecondary}
            </a>
          </div>
        </div>

        <div className="hero-grid">
          {t.cards.map((card, i) => (
            <div className={`info-card ${i % 2 === 1 ? "offset" : ""}`} key={card.title}>
              <div className="card-label">{t.focus}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="light-section" id="services">
        <div className="section-head">
          <div className="section-label">{t.servicesLabel}</div>
          <h2>{t.servicesTitle}</h2>
          <div className="gold-line"></div>
          <p>{t.servicesText}</p>
        </div>

        <div className="grid-two">
          {t.services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="section-label gold-text">{t.serviceArea}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-section" id="about">
        <div className="about-grid">
          <div>
            <div className="section-label">{t.aboutLabel}</div>
            <h2>{t.aboutTitle}</h2>
            <div className="gold-line"></div>
          </div>
          <div className="about-text">
            {t.aboutText.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section" id="process">
        <div className="section-head">
          <div className="section-label">{t.processLabel}</div>
          <h2>{t.processTitle}</h2>
          <div className="gold-line"></div>
        </div>

        <div className="grid-four">
          {t.process.map((item) => (
            <div className="service-card" key={item.step}>
              <div className="section-label gold-text">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-box">
          <div>
            <div className="section-label">{t.contactLabel}</div>
            <h2>{t.contactTitle}</h2>
            <div className="gold-line"></div>
            <p>{t.contactText}</p>
          </div>

          <div className="contact-card">
            <div className="contact-item">
              <div className="section-label">{t.phone}</div>
              <strong>+49 000 00000000</strong>
            </div>
            <div className="contact-item">
              <div className="section-label">{t.email}</div>
              <strong>info@omniworks-services.com</strong>
            </div>
            <div className="contact-item">
              <div className="section-label">{t.area}</div>
              <strong>{t.areaValue}</strong>
            </div>

            <a href="mailto:info@omniworks-services.com" className="gold-btn contact-btn">
              {t.sendRequest}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
