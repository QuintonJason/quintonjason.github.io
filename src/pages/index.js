import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "../css/styles.css";

const featuredWork = [
  {
    title: "Design system architecture",
    description:
      "Component APIs, tokens, accessibility standards, governance, and frontend architecture for product teams.",
    meta: "Senior design engineering",
    url: "/work/"
  },
  {
    title: "Writing and systems thinking",
    description:
      "Recent pieces on design systems, AI-assisted workflows, UX development, CSS, and team behavior.",
    meta: "Medium, DEV, archive",
    url: "/writing/"
  },
  {
    title: "Teaching and archive",
    description:
      "Web UX instruction, older SVG writing, public features, and creative practice.",
    meta: "LSU, SVG, archive",
    url: "/about/"
  }
];

const Index = () => (
  <main className="home">
    <Helmet
      title="Quinton Jason | Senior Design Engineer"
      meta={[
        {
          name: "description",
          content:
            "Quinton Jason is a Senior Design Engineer focused on design systems, frontend architecture, accessibility, design tokens, teaching, and AI-native product workflows."
        }
      ]}
    />
    <section className="home-hero">
      <div className="container home-hero__inner">
        <p className="home-hero__eyebrow">Senior Design Engineer</p>
        <h1 className="home-hero__title">Quinton Jason</h1>
        <p className="home-hero__bio">
          I build design systems as product infrastructure: component APIs,
          semantic tokens, accessible patterns, frontend architecture, and
          workflows that help teams ship consistent UI at scale.
        </p>
        <div className="home-hero__actions">
          <Link to="/work/" className="button button--primary">
            View work
          </Link>
          <Link to="/writing/" className="button button--secondary">
            Read writing
          </Link>
        </div>
      </div>
    </section>

    <section className="home-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Selected paths</p>
          <h2>Systems work, writing, and teaching</h2>
        </div>
        <div className="work-grid">
          {featuredWork.map(item => (
            <Link to={item.url} className="work-card" key={item.title}>
              <span className="work-card__meta">{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="home-section home-section--quiet">
      <div className="container home-note">
        <div>
          <p className="section-heading__eyebrow">Now</p>
          <h2>Making system work visible, usable, and durable.</h2>
        </div>
        <p>
          The work is not just component output. It is the architecture,
          constraints, documentation, accessibility decisions, and collaboration
          patterns that let product teams trust the system and keep moving.
        </p>
        <Link to="/contact/" className="text-link">
          Get in touch
        </Link>
      </div>
    </section>

    <section className="home-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Elsewhere</p>
          <h2>Teaching, writing, and public work.</h2>
        </div>
        <div className="proof-grid">
          <a
            href="https://design.lsu.edu/faculty/jason-quinton/"
            className="proof-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LSU College of Art & Design</span>
            <h3>Instructor in the School of Art</h3>
            <p>
              Teaching web UX foundations and bringing professional product
              experience into the classroom.
            </p>
          </a>
          <a
            href="https://blog.teamtreehouse.com/quinton-turned-his-love-of-the-web-into-a-life-changing-career"
            className="proof-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Treehouse Feature</span>
            <h3>A career story rooted in learning</h3>
            <p>
              A profile about returning to the web, building a career, and
              growing into speaking and leadership.
            </p>
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Index;
