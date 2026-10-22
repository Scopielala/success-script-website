import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SuccessScript by WhatsApp or email to discuss your software idea.",
};

const whatsappUrl =
  "https://wa.me/2349137170209?text=Hello%20SuccessScript%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20software%20project.";

export default function ContactPage() {
  return (
    <article className="contact-page" aria-labelledby="page-title">
      <header className="contact-hero">
        <p className="page-eyebrow">04 / Start a conversation</p>
        <h1 className="page-title" id="page-title">
          Contact Us
        </h1>
        <p className="page-intro">
          Have a software idea or a question about our services? Get in touch
          with SuccessScript by WhatsApp or email.
        </p>
      </header>

      <section className="contact-options" aria-label="Ways to contact SuccessScript">
        <article className="contact-option">
          <div className="contact-option__topline">
            <p className="page-eyebrow">01 / WhatsApp</p>
            <span aria-hidden="true">↗</span>
          </div>
          <h2>Start a chat.</h2>
          <p>
            Message us to discuss what you have in mind and the next step for
            your project.
          </p>
          <p className="contact-option__detail">0913 717 0209</p>
          <a
            className="contact-option__link"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with SuccessScript on WhatsApp at 0913 717 0209"
          >
            Chat on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </article>

        <article className="contact-option">
          <div className="contact-option__topline">
            <p className="page-eyebrow">02 / Email</p>
            <span aria-hidden="true">↗</span>
          </div>
          <h2>Send an email.</h2>
          <p>
            Write to us with a little context about your question or the
            software you are considering.
          </p>
          <a className="contact-option__link" href="mailto:successscript100@gmail.com">
            successscript100@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </article>
      </section>
    </article>
  );
}
