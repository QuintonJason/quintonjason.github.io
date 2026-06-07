import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const principles = [
  {
    title: "Documentation is not governance",
    body:
      "Documentation matters, but it is not enough. A system succeeds when it influences decisions at the moment work happens.",
    context:
      "That means moving standards into contribution workflows, lint rules, validation mechanisms, and AI-assisted review loops.",
    links: [
      { label: "Pine Design System", url: "/work/pine-design-system/" },
      { label: "Pine MCP", url: "/work/pine-mcp/" }
    ]
  },
  {
    title: "Design systems are adoption problems",
    body:
      "The hard part is not building a component. The hard part is helping teams choose it, trust it, extend it, and avoid rebuilding it differently elsewhere.",
    context:
      "Pine had to support 40+ engineers across 6 product teams while giving teams a practical path from Sage-era UI to a modern component system.",
    links: [
      { label: "Pine Design System", url: "/work/pine-design-system/" },
      { label: "Kajabi Admin Dark Mode", url: "/work/kajabi-admin-dark-mode/" }
    ]
  },
  {
    title: "Dark mode reveals debt",
    body:
      "Dark mode did not create the technical debt. It revealed it. A second theme exposes hardcoded colors, legacy assumptions, disconnected styling systems, and places where the system was not actually being followed.",
    context:
      "The work behind Kajabi Admin dark mode was really a platform architecture, semantic token, migration, and compatibility problem.",
    links: [
      { label: "Kajabi Admin Dark Mode", url: "/work/kajabi-admin-dark-mode/" }
    ]
  },
  {
    title: "AI is a new design system consumer",
    body:
      "Design systems used to be written for designers and engineers. AI-assisted development adds another consumer: the agent generating code.",
    context:
      "That changes how systems need to expose guidance, constraints, examples, and validation before generated UI reaches production code.",
    links: [
      { label: "Pine MCP", url: "/work/pine-mcp/" },
      { label: "Writing", url: "/writing/" }
    ]
  },
  {
    title: "The right thing should be easier than the wrong thing",
    body:
      "Good systems reduce judgment fatigue. They make the expected path easier to find, easier to implement, and harder to accidentally bypass.",
    context:
      "Component APIs, design tokens, accessibility standards, and learning materials all work best when they make the preferred path obvious.",
    links: [
      { label: "Pine Design System", url: "/work/pine-design-system/" },
      { label: "Learn.QuintonJason.com", url: "http://learn.quintonjason.com/" }
    ]
  },
  {
    title: "Teaching is system design",
    body:
      "Teaching frontend development has shaped how I build systems. If people cannot understand the model, they cannot adopt it.",
    context:
      "Learn.QuintonJason.com applies the same principle to students that design systems apply to product teams: structure the material so people can move from concepts to practice.",
    links: [
      { label: "Learn.QuintonJason.com", url: "http://learn.quintonjason.com/" },
      { label: "Writing", url: "/writing/" }
    ]
  }
];

const isExternal = url => /^https?:\/\//.test(url);

const PrincipleLink = ({ link }) =>
  isExternal(link.url) ? (
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      {link.label}
    </a>
  ) : (
    <Link to={link.url}>{link.label}</Link>
  );

const Principles = () => (
  <main className="principles-page">
    <Helmet
      title="Notes From Building Systems | Quinton Jason"
      meta={[
        {
          name: "description",
          content:
            "Design systems principles from Quinton Jason on governance, adoption, dark mode, AI-assisted development, teaching, and frontend architecture."
        }
      ]}
    />
    <section className="page-hero principles-hero">
      <div className="container">
        <p className="section-heading__eyebrow">Design Systems Principles</p>
        <h1>Notes From Building Systems</h1>
        <p>
          I have spent years building design systems, teaching frontend
          development, and exploring how AI changes the way teams write
          software. These are the principles that show up across my work.
        </p>
      </div>
    </section>

    <section className="home-section">
      <div className="container">
        <div className="principles-intro">
          <p className="section-heading__eyebrow">Operating Model</p>
          <h2>I build systems, teach systems, and help AI work with systems.</h2>
          <p>
            The projects are different, but the pattern is consistent: make the
            model visible, reduce the number of unsupported decisions, and help
            people move from standards to adoption.
          </p>
        </div>

        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article className="principle-card" key={principle.title}>
              <span className="principle-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{principle.title}</h2>
                <p className="principle-card__lead">{principle.body}</p>
                <p>{principle.context}</p>
                <div className="principle-card__links" aria-label="Related work">
                  {principle.links.map(link => (
                    <PrincipleLink link={link} key={link.label} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="home-section home-section--quiet">
      <div className="container home-note">
        <div>
          <p className="section-heading__eyebrow">Related Work</p>
          <h2>The principles show up in the work.</h2>
        </div>
        <p>
          Pine, Pine MCP, Kajabi Admin Dark Mode, Learn.QuintonJason.com, and my
          writing all point at the same problem: systems only matter when people
          and tools can actually use them.
        </p>
        <div className="case-study-actions">
          <Link to="/influence-through-systems/">Influence through systems</Link>
          <Link to="/work/">View work</Link>
        </div>
      </div>
    </section>
  </main>
);

export default Principles;
