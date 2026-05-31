import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const featuredWork = [
  {
    id: "pine-design-system",
    title: "Pine Design System",
    description:
      "Kajabi's multi-platform design system powering consistent, accessible product experiences across 6 product teams and 40+ engineers. Pine includes web components, design tokens, accessibility standards, governance, documentation, and shared developer workflows.",
    meta: "Kajabi Design System",
    url: "https://pine-design-system.netlify.app/",
    tags: [
      "Design Systems",
      "Web Components",
      "Design Tokens",
      "Accessibility",
      "Governance",
      "Developer Experience"
    ]
  },
  {
    id: "pine-mcp",
    title: "Pine MCP",
    description:
      "An MCP integration that exposes Pine design system knowledge to AI assistants, helping generated code follow established components, tokens, accessibility requirements, and implementation standards.",
    meta: "AI-Assisted Development",
    url: "https://medium.com/@quintonjasonjr/teaching-ai-our-design-system-d9788fe96c8e",
    tags: [
      "AI-Assisted Development",
      "MCP",
      "Design Systems",
      "Developer Experience",
      "Frontend Architecture"
    ]
  }
];

const featuredWriting = [
  {
    title: "Teaching AI Our Design System",
    source: "Medium",
    url: "https://medium.com/@quintonjasonjr/teaching-ai-our-design-system-d9788fe96c8e"
  },
  {
    title: "My Job Is a Claude Skill. Now What.",
    source: "Medium",
    url: "https://medium.com/@quintonjasonjr/my-job-is-a-claude-skill-now-what-ec00daf0de21"
  },
  {
    title: "Bots Be Lying and We're Still Shipping",
    source: "Medium",
    url: "https://medium.com/@quintonjasonjr/bots-be-lying-and-were-still-shipping-6276468129b8"
  },
  {
    title: "The Design System Team Did Real Work. Nobody Could See It.",
    source: "Medium",
    url: "https://medium.com/@quintonjasonjr"
  }
];

const isExternal = url => /^https?:\/\//.test(url);

const ActionLink = ({ to, children, className }) =>
  to.indexOf("#") === 0 ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : isExternal(to) ? (
    <a href={to} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  );

const Index = () => (
  <main className="home">
    <Helmet
      title="Quinton Jason | Senior Design Engineer"
      meta={[
        {
          name: "description",
          content:
            "Quinton Jason is a Senior Design Engineer specializing in design systems, frontend architecture, accessibility, and AI-native product development."
        }
      ]}
    />
    <section className="home-hero">
      <div className="container home-hero__inner">
        <p className="home-hero__eyebrow">Quinton Jason</p>
        <h1 className="home-hero__title">
          Senior Design Engineer specializing in design systems, frontend
          architecture, and AI-native development.
        </h1>
        <p className="home-hero__bio">
          I build systems that help product teams ship consistent, accessible
          experiences at scale. My work spans design systems, web components,
          design tokens, governance, developer experience, and AI-assisted
          development workflows.
        </p>
        <div className="home-hero__actions">
          <ActionLink
            to="https://pine-design-system.netlify.app/"
            className="button button--primary"
          >
            View Pine Design System
          </ActionLink>
          <ActionLink to="#pine-mcp" className="button button--secondary">
            View Pine MCP
          </ActionLink>
          <Link to="/writing/" className="button button--secondary">
            Read Writing
          </Link>
          <Link to="/contact/" className="button button--secondary">
            Contact
          </Link>
        </div>
      </div>
    </section>

    <section className="home-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Featured Work</p>
          <h2>Pine is the center of my current design systems work.</h2>
          <p>
            I spent years building design systems for humans. Now I am helping
            design systems work for AI-assisted development too.
          </p>
        </div>
        <div className="work-grid work-grid--featured">
          {featuredWork.map(item => (
            <article className="work-card" id={item.id} key={item.title}>
              <span className="work-card__meta">{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="tag-list">
                {item.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="work-entry__links">
                <ActionLink to={item.url}>
                  {item.title === "Pine MCP" ? "Read about Pine MCP" : "View Pine"}
                </ActionLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="home-section home-section--quiet">
      <div className="container home-note">
        <div>
          <p className="section-heading__eyebrow">At Kajabi</p>
          <h2>Design system knowledge where product work happens.</h2>
        </div>
        <p>
          I help evolve Pine, a multi-platform design system used by 40+
          engineers across 6 product teams. My recent work explores how AI
          assistants can consume design system knowledge so generated code
          follows established components, tokens, accessibility standards, and
          implementation patterns.
        </p>
        <Link to="/work/" className="text-link">
          View more work
        </Link>
      </div>
    </section>

    <section className="home-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Featured Writing</p>
          <h2>Design systems, AI-assisted development, and frontend quality.</h2>
          <p>
            Recent essays on how system knowledge, governance, and standards
            need to show up inside modern product development workflows.
          </p>
        </div>
        <div className="writing-grid">
          {featuredWriting.map(item => (
            <article className="writing-card" key={item.title}>
              <div className="writing-card__meta">
                <span>{item.source}</span>
                <span>Article</span>
              </div>
              <h2>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h2>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="home-section home-section--quiet">
      <div className="container home-note">
        <div>
          <p className="section-heading__eyebrow">Teaching</p>
          <h2>Web foundations, accessibility, and systems thinking.</h2>
        </div>
        <p>
          I also teach web design and frontend development at Louisiana State
          University, where I help students build foundations in HTML, CSS,
          JavaScript, accessibility, UX, responsive design, and systems thinking.
        </p>
        <a
          href="https://design.lsu.edu/faculty/jason-quinton/"
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LSU profile
        </a>
      </div>
    </section>

    <section className="home-section">
      <div className="container home-note">
        <div>
          <p className="section-heading__eyebrow">About</p>
          <h2>Systems that influence decisions, not just documentation.</h2>
        </div>
        <p>
          I build systems that help teams make better product decisions at
          scale. My work sits at the intersection of design systems, frontend
          architecture, accessibility, and AI-assisted development. I care about
          the gap between standards and adoption. Documentation matters, but
          systems succeed when they influence decisions at the moment work
          happens.
        </p>
        <Link to="/about/" className="text-link">
          More about me
        </Link>
      </div>
    </section>
  </main>
);

export default Index;
