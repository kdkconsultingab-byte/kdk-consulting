import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KDK Consulting AB",
  description: "KDK Consulting AB builds practical digital products and services.",
};

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="KDK Consulting home">
          <img src="/kdk-logo.png" alt="KDK Consulting" />
          <span>KDK Consulting</span>
        </a>
        <a className="nav-link" href="#contact">Contact</a>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">KDK CONSULTING AB · GOTHENBURG, SWEDEN</p>
        <h1>Practical digital products, built with care.</h1>
        <p className="intro">
          KDK Consulting AB is a Swedish technology company building useful
          software products and helping businesses with digital product and
          technology consulting.
        </p>
        <a className="button" href="#contact">Get in touch</a>
      </section>

      <section className="services" aria-labelledby="what-we-do">
        <p className="eyebrow">WHAT WE DO</p>
        <h2 id="what-we-do">From idea to dependable product.</h2>
        <div className="service-grid">
          <article>
            <span>01</span>
            <h3>Product development</h3>
            <p>We create focused digital products that solve everyday problems.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Software &amp; AI</h3>
            <p>We use modern software and AI thoughtfully, where it creates real value.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Long-term thinking</h3>
            <p>We favour clear, maintainable solutions and relationships built to last.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-heading">
        <p className="eyebrow">CONTACT</p>
        <h2 id="contact-heading">Let&apos;s talk.</h2>
        <p>For company information or product enquiries, contact us by email.</p>
        <a className="email" href="mailto:info@kdkconsulting.se">info@kdkconsulting.se</a>
        <p className="location">Gothenburg, Sweden</p>
      </section>

      <footer>© {new Date().getFullYear()} KDK Consulting AB</footer>
    </main>
  );
}
