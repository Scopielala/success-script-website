import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet SuccessScript, a software development team helping people and businesses bring their ideas to life.",
};

const disciplines = [
  "UI/UX design",
  "Product management",
  "Frontend development",
  "Backend development",
  "Mobile app development",
];

const values = [
  {
    title: "Understand the need",
    description:
      "Start with the people, problem, and purpose behind a software idea.",
  },
  {
    title: "Work across disciplines",
    description:
      "Bring design, product thinking, and engineering into the same conversation.",
  },
  {
    title: "Make the complex clear",
    description:
      "Explain decisions and break a large idea into understandable next steps.",
  },
  {
    title: "Build with care",
    description:
      "Treat usability, thoughtful design, and sound engineering as parts of one product.",
  },
];

export default function AboutPage() {
  return (
    <article className="about-page" aria-labelledby="page-title">
      <header className="about-hero">
        <p className="page-eyebrow">02 / Company</p>
        <h1 className="page-title" id="page-title">
          Ideas into software.
        </h1>
        <p className="page-intro about-lede">
          SuccessScript is a technology-driven business hub that builds web and
          mobile applications. We help people and businesses turn software
          ideas into products made for their needs.
        </p>
      </header>

      <section className="about-section" aria-labelledby="about-approach">
        <div className="about-section__label">
          <p className="page-eyebrow">A team across disciplines</p>
          <span className="about-index" aria-hidden="true">01</span>
        </div>
        <div className="about-section__content">
          <h2 id="about-approach">Different expertise, working toward one product.</h2>
          <p>
            Building useful software calls for more than code. SuccessScript
            brings together design, product thinking, and engineering so each
            part of an idea can move toward a working application.
          </p>
          <ul className="discipline-list" aria-label="SuccessScript team disciplines">
            {disciplines.map((discipline, index) => (
              <li key={discipline}>
                <span aria-hidden="true">0{index + 1}</span>
                {discipline}
                <span aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-section about-purpose" aria-labelledby="about-mission">
        <div className="about-section__label">
          <p className="page-eyebrow">Why we are here</p>
          <span className="about-index" aria-hidden="true">02</span>
        </div>
        <div className="about-section__content">
          <div className="about-statement">
            <p className="page-eyebrow">Our mission</p>
            <h2 id="about-mission">
              Help people and businesses bring software ideas to life.
            </h2>
            <p>
              We aim to do this by bringing product thinking, design, and
              software development together around the needs of each idea.
            </p>
          </div>
          <div className="about-statement">
            <p className="page-eyebrow">Our vision</p>
            <h2 id="about-vision">
              A world where useful ideas can become useful software.
            </h2>
            <p>
              We imagine a future where people and businesses can explore
              digital tools shaped around the work and experiences that matter
              to them.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-values">
        <div className="about-section__label">
          <p className="page-eyebrow">How we want to work</p>
          <span className="about-index" aria-hidden="true">03</span>
        </div>
        <div className="about-section__content">
          <h2 id="about-values">Values we want our work to reflect.</h2>
          <ul className="about-values-list">
            {values.map((value, index) => (
              <li key={value.title}>
                <span className="about-values-list__index" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-background">
        <div className="about-section__label">
          <p className="page-eyebrow">Our background</p>
          <span className="about-index" aria-hidden="true">04</span>
        </div>
        <div className="about-section__content">
          <h2 id="about-background">A software business built around ideas.</h2>
          <p>
            SuccessScript is a technology-driven business hub specializing in
            software applications. The company brings together expertise in
            UI/UX, product management, frontend, backend, and mobile app
            development to help clients turn ideas into web and mobile
            applications. Its current services include consultation, website
            development, API engineering, database design, and mobile app
            development.
          </p>
        </div>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <p className="page-eyebrow">Have an idea in mind?</p>
        <div className="about-cta__row">
          <h2 id="about-cta-title">Let’s find its next step.</h2>
          <Link className="button button--primary" href="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Link className="text-link" href="/services">
          Explore our services <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </article>
  );
}
