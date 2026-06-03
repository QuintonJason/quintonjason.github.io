import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const projectDetails = [
  {
    label: "Company",
    value: "Kajabi"
  },
  {
    label: "Role",
    value: "Senior UX Developer"
  },
  {
    label: "Team",
    value: "Design Systems"
  },
  {
    label: "Timeline",
    value: "2025 to 2026"
  },
  {
    label: "Platform",
    value: "Kajabi Admin"
  }
];

const goals = [
  "Create a scalable theming architecture",
  "Support dark mode across major admin experiences",
  "Avoid large-scale rewrites",
  "Establish patterns future teams could continue building on"
];

const roleItems = [
  "Semantic token adoption",
  "Theme architecture decisions",
  "Legacy compatibility strategies",
  "Cross-team implementation support",
  "Component migration guidance",
  "Dark mode validation and bug resolution"
];

const architectureSurfaces = [
  {
    title: "Rails views",
    description: "Server-rendered surfaces needed to respond to the same theme contract."
  },
  {
    title: "React applications",
    description: "Modern app surfaces needed semantic tokens instead of hardcoded values."
  },
  {
    title: "Pine components",
    description: "Design system components needed theme-aware defaults and reusable patterns."
  },
  {
    title: "Sage and legacy UI",
    description: "Older systems needed compatibility layers during gradual migration."
  },
  {
    title: "TinyMCE iframes",
    description: "Embedded editor documents needed mirrored theme state and separate editor styles."
  }
];

const results = [
  "Dark mode support across Kajabi Admin",
  "A scalable theming architecture",
  "Consistent behavior across Rails, React, and design system surfaces",
  "A migration path for legacy UI",
  "Reduced dependency on hardcoded color values",
  "Improved support for future theme capabilities"
];

const KajabiAdminDarkMode = () => (
  <main className="case-study-page">
    <Helmet
      title="Dark Mode for Kajabi Admin | Quinton Jason"
      meta={[
        {
          name: "description",
          content:
            "A case study about dark mode as design system infrastructure for Kajabi Admin, including semantic tokens, theme architecture, legacy compatibility, TinyMCE iframe theming, and rollout strategy."
        }
      ]}
    />

    <section className="page-hero">
      <div className="container">
        <p className="section-heading__eyebrow">Kajabi Admin Dark Mode</p>
        <h1>Dark mode as a platform capability, not a toggle.</h1>
        <p>
          In 2026, Kajabi released dark mode for its admin experience. The user
          experience looked simple, but the system behind it required theming
          architecture for a decade-old platform built across Rails, React,
          Sage, TinyMCE, Pine, and multiple generations of design system
          technology.
        </p>
      </div>
    </section>

    <section className="home-section">
      <div className="container case-study-layout">
        <aside className="case-study-sidebar" aria-label="Case study summary">
          <dl>
            {projectDetails.map(item => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="case-study-content">
          <section>
            <p className="section-heading__eyebrow">Overview</p>
            <h2>Users see a toggle. Engineers see infrastructure.</h2>
            <p>
              Dark mode is one of those features that looks deceptively simple
              from the outside. Rather than treating it as a visual enhancement,
              the Design Systems team approached it as a platform capability.
            </p>
            <p>
              My role focused on helping establish the architectural patterns,
              semantic token adoption, migration strategy, and implementation
              details that allowed dark mode to scale across the application.
            </p>
          </section>

          <section>
            <p className="section-heading__eyebrow">Challenge</p>
            <h2>The admin experience was not a single application.</h2>
            <p>
              Kajabi Admin was the result of years of growth. Some areas used
              modern Pine components. Others still relied on Sage. React
              applications lived alongside Rails views. TinyMCE editors
              rendered inside iframes. Third-party tools introduced their own
              styling assumptions.
            </p>
            <p>
              Every surface handled color differently. The challenge was not
              creating dark colors. The challenge was creating a system that
              allowed every part of the platform to understand what those colors
              meant.
            </p>
            <ol className="system-diagram system-diagram--flow" aria-label="Dark mode platform surfaces">
              {architectureSurfaces.map((item, index) => (
                <li key={item.title}>
                  <span>{index + 1}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <p className="section-heading__eyebrow">Goals</p>
            <h2>Success meant future teams could stop thinking about dark mode.</h2>
            <p>
              Success was not measured by whether a toggle existed. Success was
              measured by whether future teams could build new features without
              making dark mode a separate implementation project every time.
            </p>
            <ul className="outcome-list">
              {goals.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="section-heading__eyebrow">My Role</p>
            <h2>I worked on the architecture and implementation patterns.</h2>
            <p>
              A significant portion of the effort involved helping feature
              teams move away from hardcoded color values and toward Pine
              semantic tokens.
            </p>
            <ul className="tool-list">
              {roleItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="section-heading__eyebrow">Semantic Tokens</p>
            <h2>Before dark mode could exist, color needed meaning.</h2>
            <p>
              Historically, product surfaces often defined colors directly.
              That works until multiple themes enter the picture. We moved
              surfaces toward semantic tokens so the interface no longer cared
              whether the theme was light or dark. It cared that a surface
              represented a container and the text represented content.
            </p>
            <div className="code-comparison">
              <article className="code-card">
                <h3>Before</h3>
                <p>Hardcoded values made theme behavior a local styling problem.</p>
                <pre>
                  <code>{`background: #ffffff;
color: #222222;`}</code>
                </pre>
              </article>
              <article className="code-card">
                <h3>After</h3>
                <p>Semantic tokens made theme behavior a system contract.</p>
                <pre>
                  <code>{`background: var(--pine-color-background-container);
color: var(--pine-color-text);`}</code>
                </pre>
              </article>
            </div>
          </section>

          <section>
            <p className="section-heading__eyebrow">Theme Contract</p>
            <h2>One root-level contract let every surface participate.</h2>
            <p>
              One of the most important architectural decisions was creating a
              single source of truth for theme state. Rather than allowing
              individual applications to manage their own theme logic, dark mode
              was controlled through a root-level attribute.
            </p>
            <article className="code-card code-card--single">
              <h3>Shared contract</h3>
              <pre>
                <code>{`<html data-theme="dark">`}</code>
              </pre>
            </article>
            <p>
              Rails views, React applications, design system components, and
              shared stylesheets could participate in the theme once they
              understood that contract.
            </p>
          </section>

          <section>
            <p className="section-heading__eyebrow">Legacy Compatibility</p>
            <h2>The migration strategy balanced architecture and delivery.</h2>
            <p>
              Not every part of the application was ready for Pine. Large
              portions of the platform still depended on Sage and older color
              systems. Rather than delaying dark mode until every migration was
              complete, compatibility layers mapped older styling approaches
              into the new theme architecture.
            </p>
            <div className="system-diagram system-diagram--split" aria-label="Legacy compatibility model">
              <div>
                <strong>Legacy surface</strong>
                <p>Rails, Sage, older color systems, and inherited product styles.</p>
              </div>
              <div>
                <strong>Compatibility layer</strong>
                <p>Mapping and migration patterns connected old surfaces to theme intent.</p>
              </div>
              <div>
                <strong>Pine theme contract</strong>
                <p>Semantic tokens and shared theme state enabled consistent behavior.</p>
              </div>
            </div>
          </section>

          <section>
            <p className="section-heading__eyebrow">TinyMCE Problem</p>
            <h2>Iframes needed their own theme bridge.</h2>
            <p>
              TinyMCE renders content inside an iframe. Iframes operate as
              separate documents, so they cannot automatically access CSS
              variables or theme state from the parent application.
            </p>
            <p>
              Dark mode required a bridge between the parent application and the
              editor environment. Theme state needed to be mirrored into the
              iframe, and dedicated editor styles needed to be maintained
              separately. This became a reusable pattern for embedded
              experiences.
            </p>
          </section>

          <section>
            <p className="section-heading__eyebrow">Rollout Strategy</p>
            <h2>Feature flags and preference handling reduced rollout risk.</h2>
            <p>
              Dark mode was introduced behind a feature flag. User preferences
              were stored independently and persisted across sessions. The
              implementation also needed to support internal workflows such as
              account masquerading without accidentally modifying creator
              preferences.
            </p>
          </section>

          <section>
            <p className="section-heading__eyebrow">Results</p>
            <h2>Dark mode became a platform capability.</h2>
            <ul className="outcome-list">
              {results.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="section-heading__eyebrow">Reflection</p>
            <h2>Dark mode revealed the design system work underneath.</h2>
            <p>
              The biggest lesson from this project is that dark mode is not
              really a dark mode project. It is a design systems project.
              Features like dark mode expose every inconsistency hiding within a
              platform.
            </p>
            <p>
              Hardcoded colors, disconnected styling systems, legacy
              components, and third-party dependencies all become visible the
              moment a second theme enters the picture. Dark mode did not create
              the technical debt. It revealed it.
            </p>
            <p>
              Most people will not think about semantic tokens, theme contracts,
              or iframe styling strategies. They will notice that dark mode
              works. That is the point. The best design system work often
              disappears into the product.
            </p>
          </section>

          <div className="case-study-actions">
            <Link to="/work/pine-design-system/">View Pine Design System</Link>
            <Link to="/work/">Back to work</Link>
            <Link to="/contact/">Talk design systems</Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default KajabiAdminDarkMode;
