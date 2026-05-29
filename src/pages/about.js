import React from "react";
import Helmet from "react-helmet";

import "../css/styles.css";

const About = () => (
  <main className="about-page">
    <Helmet
      title="About | Quinton Jason"
      meta={[
        {
          name: "description",
          content:
            "About Quinton Jason, a Senior Design Engineer focused on design systems, frontend architecture, accessibility, teaching, and AI-assisted workflows."
        }
      ]}
    />
    <section className="page-hero">
      <div className="container">
        <p className="section-heading__eyebrow">About</p>
        <h1>I work where design systems, frontend architecture, and teaching meet.</h1>
        <p>
          I am a Senior Design Engineer focused on the architecture, tooling,
          standards, and collaboration models that help product teams ship
          consistent and accessible UI at scale.
        </p>
      </div>
    </section>

    <section className="home-section">
      <div className="container about-grid">
        <div>
          <p className="section-heading__eyebrow">Focus</p>
          <h2>Design systems as product infrastructure.</h2>
        </div>
        <div className="about-copy">
          <p>
            My work sits between design intent and engineering reality:
            component libraries, semantic design tokens, accessible defaults,
            developer tooling, and contribution models that make system quality
            easier to repeat.
          </p>
          <p>
            My recent writing explores design systems, UX development,
            AI-native workflows, and the ways team behavior becomes part of the
            interface. This site keeps older web experiments and creative
            practice as an archive of the same throughline: craft, constraints,
            and curiosity.
          </p>
        </div>
      </div>
    </section>

    <section className="home-section home-section--quiet">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Elsewhere</p>
          <h2>Teaching and public work</h2>
        </div>
        <div className="proof-grid">
          <a
            href="https://design.lsu.edu/faculty/jason-quinton/"
            className="proof-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LSU College of Art & Design</span>
            <h3>Part-time instructor</h3>
            <p>
              Teaching web UX foundations in the LSU School of Art and helping
              students connect interface decisions to real web constraints.
            </p>
          </a>
          <a
            href="https://blog.teamtreehouse.com/quinton-turned-his-love-of-the-web-into-a-life-changing-career"
            className="proof-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Treehouse Feature</span>
            <h3>A career built through learning</h3>
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

export default About;
