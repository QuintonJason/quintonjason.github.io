import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const architectureRepos = [
  {
    title: "ds-tokens",
    description:
      "Source of truth for core, semantic, and component-level design tokens."
  },
  {
    title: "pine",
    description:
      "Web component library, accessibility patterns, docs, and shared implementation standards."
  },
  {
    title: "pine-mcp",
    description:
      "MCP workflow layer that exposes Pine knowledge to AI-assisted development tools."
  },
  {
    title: "kajabi-products",
    description:
      "Consumer integration layer where product teams adopt Pine in real product surfaces."
  },
  {
    title: "Sage migration bridge",
    description:
      "Migration bridge for auditing and replacing legacy Sage usage during gradual adoption."
  }
];

const tokenLayers = [
  {
    title: "Core",
    description: "Raw values such as color scales, spacing, typography, and motion primitives."
  },
  {
    title: "Semantic",
    description:
      "Product-facing decisions such as surface, text, border, action, focus, and feedback roles."
  },
  {
    title: "Component",
    description:
      "Component-scoped tokens that connect Pine APIs to consistent implementation details."
  }
];

const governanceItems = [
  "ESLint Pine color rules",
  "Stylelint token rules",
  "no-Sage migration audit",
  "changed-line-only enforcement",
  "lint-rule-as-the-real-fix"
];

const accessibilityItems = [
  "formAssociated + ElementInternals for form-compatible web components",
  "ARIA attribute reinjection for Shadow DOM boundaries",
  "Modal focus trap behavior",
  "Keyboard and semantic standards for component APIs",
  "axe-core e2e testing in progress for automated accessibility checks"
];

const PineDesignSystemCaseStudy = () => (
  <main className="case-study-page">
    <Helmet
      title="Pine Design System | Quinton Jason"
      meta={[
        {
          name: "description",
          content:
            "A case study about Pine Design System architecture, governance, accessibility standards, design tokens, web components, and AI-assisted design system workflows."
        }
      ]}
    />

    <section className="page-hero">
      <div className="container">
        <p className="section-heading__eyebrow">Pine Design System</p>
        <h1>Design system architecture for product teams, platforms, and AI-assisted workflows.</h1>
        <p>
          Pine is Kajabi's multi-platform design system supporting 40+
          engineers across 6 product teams. My work helps Pine operate as
          product infrastructure: web components, design tokens, accessibility
          standards, governance, migration tooling, documentation, and shared
          developer workflows.
        </p>
      </div>
    </section>

    <section className="home-section">
      <div className="container case-study-layout">
        <aside className="case-study-sidebar" aria-label="Case study summary">
          <dl>
            <div>
              <dt>Role</dt>
              <dd>Senior Design Engineer</dd>
            </div>
            <div>
              <dt>System</dt>
              <dd>Pine Design System</dd>
            </div>
            <div>
              <dt>Scale</dt>
              <dd>40+ engineers, 6 product teams, 40 components</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Architecture, governance, accessibility, migration, and AI-assisted workflows</dd>
            </div>
          </dl>
        </aside>

        <div className="case-study-content">
          <section>
            <p className="section-heading__eyebrow">System Architecture</p>
            <h2>A four-repo design system architecture with a migration bridge.</h2>
            <p>
              Pine is not only a component library. It is an architecture for
              moving design decisions through tokens, web components,
              governance rules, product integrations, and AI-assisted
              development workflows.
            </p>
            <p>
              The system is structured around four active repositories plus a
              legacy Sage migration bridge, so product teams can adopt Pine
              gradually without relying on documentation alone.
            </p>
            <ol className="system-diagram system-diagram--flow" aria-label="Pine repository architecture">
              {architectureRepos.map((item, index) => (
                <li key={item.title}>
                  <span>{index + 1}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <p className="section-heading__eyebrow">Technical Direction</p>
            <h2>Web components keep Pine useful across product surfaces.</h2>
            <p>
              Pine uses web components over framework-coupled components so the
              system can travel across product contexts without tying product
              teams to one rendering stack. That architecture supports shared
              component APIs, accessible defaults, tokenized styling, and
              consistent implementation guidance.
            </p>
            <div className="proof-panel">
              <h3>Architecture decisions</h3>
              <ul className="outcome-list">
                <li>Web Components over framework-coupled components.</li>
                <li>Three-layer token hierarchy: core to semantic to component.</li>
                <li>Diff-gated dual enforcement for gradual migration.</li>
                <li>MCP-mediated AI tooling for generated-code quality.</li>
              </ul>
            </div>
          </section>

          <section>
            <p className="section-heading__eyebrow">Token Architecture</p>
            <h2>Tokens move from raw values to product meaning to component decisions.</h2>
            <p>
              Pine's token hierarchy separates raw design primitives from
              semantic product decisions and component-level implementation
              details. That separation makes tokens easier to govern and easier
              for teams, docs, and AI-assisted workflows to consume.
            </p>
            <ol className="system-diagram system-diagram--stack" aria-label="Pine token hierarchy">
              {tokenLayers.map(item => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <p className="section-heading__eyebrow">Governance and Enforcement</p>
            <h2>Rules belong in the workflow, not only in documentation.</h2>
            <p>
              Instead of relying on documentation alone, I helped move design
              system rules into linting, migration tooling, and AI-assisted
              validation workflows.
            </p>
            <p>
              This matters because the real fix is often not another doc page.
              The durable fix is a rule, audit, or workflow that catches drift
              when product work is happening.
            </p>
            <ul className="tool-list">
              {governanceItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="system-diagram system-diagram--split" aria-label="Diff-gated enforcement model">
              <div>
                <strong>Existing product surface</strong>
                <p>Legacy usage can continue while migration work is planned.</p>
              </div>
              <div>
                <strong>Changed lines</strong>
                <p>New and touched code has to follow Pine token and component rules.</p>
              </div>
              <div>
                <strong>Migration bridge</strong>
                <p>Audits identify Sage usage and guide gradual replacement with Pine.</p>
              </div>
            </div>
          </section>

          <section>
            <p className="section-heading__eyebrow">Accessibility Architecture</p>
            <h2>Accessibility standards are part of the component contract.</h2>
            <p>
              Pine accessibility work focuses on making accessible behavior part
              of component APIs and implementation standards, not an optional
              checklist after the interface is built.
            </p>
            <ul className="outcome-list">
              {accessibilityItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="section-heading__eyebrow">AI-Assisted Workflows</p>
            <h2>Pine knowledge can guide generated code before review starts.</h2>
            <p>
              Pine MCP extends the design system into AI-assisted development.
              The workflow helps assistants detect when Pine is needed, retrieve
              the right component and token context, and validate generated UI
              against design system rules.
            </p>
            <ol className="workflow-diagram" aria-label="Pine MCP workflow">
              <li>
                <span>1</span>
                <strong>Detect</strong>
                <p>Identify when generated UI should use Pine patterns.</p>
              </li>
              <li>
                <span>2</span>
                <strong>Context</strong>
                <p>Retrieve component, token, icon, doc, and accessibility guidance.</p>
              </li>
              <li>
                <span>3</span>
                <strong>Generate</strong>
                <p>Start from Pine components instead of generic markup.</p>
              </li>
              <li>
                <span>4</span>
                <strong>Validate</strong>
                <p>Review generated layouts against system rules and anti-patterns.</p>
              </li>
            </ol>
          </section>

          <div className="case-study-actions">
            <a
              href="https://pine-design-system.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Pine Design System
            </a>
            <Link to="/work/pine-mcp/">View Pine MCP</Link>
            <Link to="/work/">Back to work</Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default PineDesignSystemCaseStudy;
