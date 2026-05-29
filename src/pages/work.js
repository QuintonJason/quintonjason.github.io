import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import work from "../../data/work.json";
import "../css/styles.css";

const isExternal = url => /^https?:\/\//.test(url);

const WorkLink = ({ link }) =>
  isExternal(link.url) ? (
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
            "Selected work and focus areas from Quinton Jason across design system architecture, component APIs, design tokens, accessibility, developer tooling, teaching, and AI-native workflows."
        }
      ]}
    />
    <section className="page-hero">
      <div className="container">
        <p className="section-heading__eyebrow">Work</p>
        <h1>Design systems as infrastructure for better product teams.</h1>
        <p>
          An anonymized view of the impact areas I work in: system architecture,
          component APIs, semantic tokens, accessibility standards, developer
          experience, AI-native workflows, and teaching.
        </p>
      </div>
    </section>

    <section className="home-section">
      <div className="container work-list">
        {work.map(item => (
          <article className="work-entry" key={item.title}>
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
