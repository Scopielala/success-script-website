import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore SuccessScript's consultation, website, API, database design, and mobile app development services.",
};

const services = [
  {
    number: "01",
    name: "Consultation",
    summary:
      "A place to discuss a software idea, the need behind it, and possible next steps.",
    audience: "People and teams shaping an idea or weighing a software project.",
    value: "A clearer starting point for deciding what to explore next.",
  },
  {
    number: "02",
    name: "Website development",
    summary:
      "Website development for businesses and individuals who need a web presence or a web-based product.",
    audience: "Organizations and individuals who need a website built for their needs.",
    value: "A web experience that presents information or supports an online service.",
  },
  {
    number: "03",
    name: "API engineering",
    summary:
      "API engineering for software that needs a defined way for applications and services to communicate.",
    audience: "Teams building applications that exchange data with other software.",
    value: "A structured connection point between software systems.",
  },
  {
    number: "04",
    name: "Database design",
    summary:
      "Database design for projects that need to organize the information their software uses.",
    audience: "People and teams planning an application around stored information.",
    value: "A considered structure for the data an application needs to work with.",
  },
  {
    number: "05",
    name: "Mobile app development",
    summary:
      "Mobile app development for ideas and services intended to be used on mobile devices.",
    audience: "Businesses and individuals exploring a mobile software experience.",
    value: "A mobile application shaped around the intended use and audience.",
  },
];

export default function ServicesPage() {
  return (
    <article className="services-page" aria-labelledby="page-title">
      <header className="services-hero">
        <p className="page-eyebrow">03 / What we do</p>
        <h1 className="page-title" id="page-title">
          Our Services
        </h1>
        <p className="page-intro">
          From early conversations to application development, SuccessScript
          works across the parts that help bring software ideas to life.
        </p>
      </header>

      <section className="services-list" aria-label="SuccessScript services">
        {services.map((service) => (
          <article className="service-detail" key={service.number}>
            <div className="service-detail__index" aria-hidden="true">
              {service.number}
            </div>
            <div className="service-detail__main">
              <h2>{service.name}</h2>
              <p className="service-detail__summary">{service.summary}</p>
            </div>
            <dl className="service-detail__notes">
              <div>
                <dt>For</dt>
                <dd>{service.audience}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{service.value}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <section className="services-cta" aria-labelledby="services-cta-title">
        <div>
          <p className="page-eyebrow">Have a project in mind?</p>
          <h2 id="services-cta-title">Tell us what you’re looking to build.</h2>
        </div>
        <Link className="button button--primary" href="/contact">
          Contact SuccessScript <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </article>
  );
}
