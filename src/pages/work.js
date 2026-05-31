import React from "react";
import Link from "gatsby-link";
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
          emerging AI-native design system workflows.
        </p>
      </div>
    </section>

    <section className="home-section">
      <div className="container">
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
        {work.map(item => (
          <article
            className="work-entry"
            id={item.title === "Pine MCP" ? "pine-mcp" : undefined}
            key={item.title}
          >
            <div className="work-entry__meta">
              <span>{item.status}</span>
              <span>{item.role}</span>
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
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
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default Work;
