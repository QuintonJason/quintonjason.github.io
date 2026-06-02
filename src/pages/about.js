import React from "react";
import Helmet from "react-helmet";

const featuredExperiments = [
  {
    title: "Understanding transform-box",
    meta: "CSS / SVG Debugging",
    description:
      "A focused demo explaining how SVG transform origins behave and how transform-box fixes browser behavior that feels broken.",
    url: "https://codepen.io/quintonjason/pen/GwqOGQ"
  },
  {
    title: "Animated Playing Card",
    meta: "SVG Animation",
    description:
      "An interactive motion study using SVG and CSS animation to turn a small visual detail into a polished interface moment. Hover the card to trigger the animation.",
    url: "https://codepen.io/quintonjason/pen/wJZXpE"
  },
  {
    title: "Hack Night Logo",
    meta: "Logo Motion",
    description:
      "A logo animation demo exploring transforms, timing, and expressive SVG motion for an event identity. Use the dropdown to switch logo states. The real version used the WeatherBug API to respond to local weather.",
    url:
      "https://codepen.io/quintonjason/pen/GrVqJJ/5b71f773f045cd2029fda20dba88a595"
  },
  {
    title: "CSS Animated Cuddly Bear",
    meta: "SVG Character Motion",
    description:
      "My first SVG animation, later used in an SVG teaching session to make shape animation feel tangible.",
    url: "https://codepen.io/quintonjason/pen/mybarZ"
  },
  {
    title: "Sunset Vegas",
    meta: "SVG Talk Demo",
    description:
      "A slide-deck demo from an SVG talk showing how expressive vector illustration and motion can support teaching. Click the Vegas sign to play the animation.",
    url: "https://quintonjason.com/svg-talk-v2/#/52"
  }
];

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
          <p className="section-heading__eyebrow">CSS and SVG Experiments</p>
          <h2>Small demos from talks, teaching, and frontend play.</h2>
          <p>
            These experiments show the craft side of my work: explaining browser
            behavior, prototyping interaction ideas, and using CSS and SVG to
            make technical concepts easier to see.
          </p>
        </div>
        <div className="experiment-grid">
          {featuredExperiments.map(item => (
            <article className="experiment-card" key={item.title}>
              <span>{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                View demo
              </a>
            </article>
          ))}
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
