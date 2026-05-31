import React from "react";
import Helmet from "react-helmet";

const Contact = () => (
  <main className="container contact-page">
    <Helmet
      title="Contact | Quinton Jason"
      meta={[
        {
          name: "description",
          content:
            "Contact Quinton Jason about design systems, frontend architecture, accessibility, teaching, writing, and web work."
        }
      ]}
    />
    <div className="archive-intro">
      <p className="section-heading__eyebrow">Contact</p>
      <h1>Get in touch</h1>
      <p>
        For design systems, frontend architecture, accessibility, teaching,
        writing, or web work, email is the most reliable place to start.
      </p>
      <p>
        <a className="button button--primary" href="mailto:quinton.jason@gmail.com">
          Email Quinton
        </a>
        <a
          className="button button--secondary button--spaced"
          href="https://www.linkedin.com/in/quintonjason/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  </main>
);

export default Contact;
