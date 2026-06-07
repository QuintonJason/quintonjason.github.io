import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import work from "../../data/work.json";

const workSignals = [
  {
    value: "40+",
    label: "engineers supported"
  },
  {
    value: "6",
    label: "product teams"
  },
  {
    value: "40",
    label: "components"
  },
  {
    value: "Multi-platform",
    label: "design system scope"
  }
];

const isExternal = url => /^https?:\/\//.test(url);

const featuredProjectTitles = [
  "Pine Design System",
  "Pine MCP",
  "Learn.QuintonJason.com",
  "Dark Mode for Kajabi Admin"
];

const projectVisuals = {
  "Pine Design System": {
    type: "image",
    src: "/images/pine-case-study/sage-to-pine-migration.png",
    alt: "Pine Sage to Pine migration documentation showing migration guidance and mapping tables.",
    eyebrow: "Migration and governance"
  },
  "Pine MCP": {
    type: "diagram",
    eyebrow: "AI workflow gate",
    steps: ["Detect", "Context", "Generate", "Validate"]
  },
  "Learn.QuintonJason.com": {
    type: "image",
    src: "/images/work/learn-quintonjason-lessons.png",
    alt:
      "Learn.QuintonJason.com lessons page showing course lesson search, filters, and lesson cards.",
    eyebrow: "Teaching platform"
  },
  "Dark Mode for Kajabi Admin": {
    type: "image",
    src: "/images/dark-mode-case-study/admin-dark.png",
    alt: "Kajabi Admin dashboard in dark mode with navigation, analytics cards, and promotional cards.",
    eyebrow: "Platform theming"
  }
};

const WorkLink = ({ link }) =>
  link.url.indexOf("#") === 0 ? (
    <a href={link.url}>{link.label}</a>
  ) : isExternal(link.url) ? (
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      {link.label}
    </a>
  ) : (
    <Link to={link.url}>{link.label}</Link>
  );

const ProjectVisual = ({ item }) => {
  const visual = projectVisuals[item.title];

  if (!visual) {
    return null;
  }

  if (visual.type === "image") {
    return (
      <figure className="work-entry__visual">
        <span>{visual.eyebrow}</span>
        <img src={visual.src} alt={visual.alt} loading="lazy" />
      </figure>
    );
  }

  return (
    <div className="work-entry__visual work-entry__visual--diagram" aria-label={`${item.title} proof diagram`}>
      <span>{visual.eyebrow}</span>
      <ol>
        {visual.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

const WorkEntry = ({ item, featured = false }) => (
  <article
    className={featured ? "work-entry work-entry--featured" : "work-entry"}
    id={
      item.title === "Pine MCP"
        ? "pine-mcp"
        : item.title === "Pine Design System"
        ? "pine-design-system"
        : item.title === "Learn.QuintonJason.com"
        ? "learn-quintonjason"
        : undefined
    }
  >
    <div className="work-entry__meta">
      <span>{item.status}</span>
      <span>{item.role}</span>
    </div>
    <div>
      <h2>{item.title}</h2>
      <p>{item.summary}</p>
      {item.title === "Learn.QuintonJason.com" && (
        <div className="mini-change">
          <strong>What changed</strong>
          <p>
            Course material became a structured product experience for teaching
            HTML, CSS, JavaScript, accessibility, UX, responsive design, and
            modern frontend workflows.
          </p>
        </div>
      )}
      <ul className="tag-list">
        {item.topics.map(topic => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      <div className="work-entry__links">
        {item.links.map(link => (
          <WorkLink link={link} key={link.label} />
        ))}
      </div>
    </div>
    {featured && <ProjectVisual item={item} />}
  </article>
);

const Work = () => (
  <main className="work-page">
    <Helmet
      title="Work | Quinton Jason"
      meta={[
        {
          name: "description",
          content:
            "Selected work from Quinton Jason across design systems, frontend architecture, accessibility, developer experience, and AI-assisted design system workflows."
        }
      ]}
    />
    <section className="page-hero">
      <div className="container">
        <p className="section-heading__eyebrow">Work</p>
        <h1>Design systems, frontend architecture, and AI-assisted workflows.</h1>
        <p>
          I build systems that help product teams ship consistent, accessible
          experiences at scale. My work spans component APIs, semantic tokens,
          governance, documentation, developer experience, accessibility, and
          emerging AI-native design system workflows. I also teach web design
          through a learning platform built from my LSU curriculum, which
          turns technical systems into structured, teachable material.
        </p>
      </div>
    </section>

    <section className="home-section">
      <div className="container">
        <div className="work-principles-callout">
          <p>
            My projects connect through a simple idea: build systems, teach
            systems, and help AI work with systems.
          </p>
          <Link to="/principles/">Read Notes From Building Systems</Link>
        </div>
        <div className="section-heading">
          <p className="section-heading__eyebrow">Current Focus</p>
          <h2>Pine is the center of my current design systems work.</h2>
          <p>
            At Kajabi, I help evolve Pine as product infrastructure for teams
            building across multiple product surfaces. My recent work explores
            how design system knowledge can also guide AI-assisted development.
          </p>
        </div>
        <dl className="signal-grid">
          {workSignals.map(item => (
            <div className="signal-card" key={item.label}>
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="home-section home-section--quiet">
      <div className="container work-list">
        {work
          .filter(item => featuredProjectTitles.includes(item.title))
          .map(item => (
            <WorkEntry item={item} featured key={item.title} />
          ))}
      </div>
    </section>

    <section className="home-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Supporting Capabilities</p>
          <h2>Reusable patterns behind the project work.</h2>
          <p>
            These are not separate case studies. They are the capabilities that
            show up across Pine, Pine MCP, Kajabi Admin Dark Mode, Learn, and my
            writing.
          </p>
        </div>
        <div className="capability-list">
          {work
            .filter(item => !featuredProjectTitles.includes(item.title))
            .map(item => (
              <WorkEntry item={item} key={item.title} />
            ))}
        </div>
      </div>
    </section>
  </main>
);

export default Work;
