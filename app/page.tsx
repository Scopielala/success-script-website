import Link from "next/link";

const servicePreviews = [
  "Consultation",
  "Website Development",
  "API Engineering",
  "Database Design",
  "Mobile App Development",
] as const;

export default function HomePage() {
  return (
    <div className="home-page">
      <section aria-labelledby="home-title" className="home-hero">
        <div className="home-hero__topline">
          <p className="page-eyebrow">Software development / SuccessScript</p>
          <span className="home-index">01 — 05</span>
        </div>

        <div className="home-hero__grid">
          <h1 className="home-title" id="home-title">
            <span>Ideas</span>
            <span>into</span>
            <span>software.</span>
          </h1>

          <div className="home-hero__aside">
            <p className="home-intro">
              We design and build web and mobile applications that bring
              software ideas to life.
            </p>
            <p className="home-audience">
              For businesses and individuals ready to make an idea real.
            </p>
            <div className="home-actions">
              <Link className="button button--primary" href="/contact">
                Start a conversation <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/services">
                Explore our services
              </Link>
            </div>
          </div>
        </div>

        <p className="home-capabilities">
          <span>Product</span>
          <span aria-hidden="true">/</span>
          <span>UI/UX</span>
          <span aria-hidden="true">/</span>
          <span>Frontend</span>
          <span aria-hidden="true">/</span>
          <span>Backend</span>
          <span aria-hidden="true">/</span>
          <span>Mobile</span>
        </p>
      </section>

      <section aria-labelledby="home-services-title" className="home-services">
        <div className="home-services__heading">
          <p className="page-eyebrow">How we can help</p>
          <h2 id="home-services-title">Our services</h2>
          <Link className="text-link" href="/services">
            View all services <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <ol className="service-preview-list">
          {servicePreviews.map((service, index) => (
            <li key={service}>
              <span aria-hidden="true">0{index + 1}</span>
              <span>{service}</span>
              <span aria-hidden="true">↗</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
