import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "KDK Consulting AB",
  description:
    "KDK Consulting AB is a Swedish technology and product consulting company based in Gothenburg.",
};

const services = [
  {
    label: "01",
    title: "Digital product development",
    body: "Focused web and mobile products from early idea to a working release.",
  },
  {
    label: "02",
    title: "Software and AI prototypes",
    body: "Practical technical prototypes that test real customer value before larger investment.",
  },
  {
    label: "03",
    title: "Product and project support",
    body: "Clear planning, delivery support, and technical coordination for small teams.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="KDK Consulting home">
          <Image src="/kdk-logo.png" alt="KDK Consulting" width={34} height={34} />
          <span>KDK Consulting</span>
        </a>
        <div className="nav-actions">
          <a className="nav-link" href="#company">Company</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">KDK CONSULTING AB - GOTHENBURG, SWEDEN</p>
        <h1>KDK Consulting AB</h1>
        <p className="intro">
          A Swedish technology and product consulting company building practical
          software, AI-supported tools, and digital products.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contact">Contact KDK</a>
          <a className="text-link" href="#work">View services</a>
        </div>
      </section>

      <section id="company" className="company" aria-labelledby="company-heading">
        <div>
          <p className="eyebrow">COMPANY</p>
          <h2 id="company-heading">Organization information</h2>
          <p>
            KDK Consulting AB operates from Gothenburg, Sweden. This website,
            kdkconsulting.se, is the public company website for business contact,
            product information, and organization verification.
          </p>
        </div>
        <dl className="facts" aria-label="Company facts">
          <div>
            <dt>Company name</dt>
            <dd>KDK Consulting AB</dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>kdkconsulting.se</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href="mailto:info@kdkconsulting.se">info@kdkconsulting.se</a>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Gothenburg, Sweden</dd>
          </div>
        </dl>
      </section>

      <section id="work" className="services" aria-labelledby="what-we-do">
        <p className="eyebrow">SERVICES</p>
        <h2 id="what-we-do">Technology consulting and product development.</h2>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.label}>
              <span>{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product" aria-labelledby="product-heading">
        <div>
          <p className="eyebrow">PRODUCT</p>
          <h2 id="product-heading">CookSmart</h2>
        </div>
        <p>
          CookSmart is a mobile app project from KDK Consulting AB. The app helps
          people turn available ingredients into practical meal ideas and is
          currently being prepared for Apple TestFlight.
        </p>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-heading">
        <p className="eyebrow">CONTACT</p>
        <h2 id="contact-heading">Contact KDK Consulting AB</h2>
        <p>
          For company verification, product enquiries, or consulting requests,
          contact KDK Consulting AB by email.
        </p>
        <a className="email" href="mailto:info@kdkconsulting.se">info@kdkconsulting.se</a>
        <p className="location">Gothenburg, Sweden</p>
      </section>

      <footer>© {new Date().getFullYear()} KDK Consulting AB</footer>
    </main>
  );
}
