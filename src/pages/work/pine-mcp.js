import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const mcpTools = [
  "get_pine_component",
  "list_pine_components",
  "list_pine_icons",
  "get_pine_design_doc",
  "ask_pine_agent",
  "review_generated_layout",
  "fix_layout_issues"
];

const practiceExamples = [
  {
    title: "Accessibility",
    developerRequest: "Add an icon-only close button to dismiss a panel.",
    genericOutput:
      "The assistant generated a button with only an aria-hidden icon, leaving the control without an accessible name.",
    guidance:
      "Icon-only interactive controls need a programmatic label, and decorative icons should stay hidden from assistive technology.",
    result:
      "The final output uses the Pine button pattern with a clear accessible name and a decorative icon that does not pollute the screen reader experience.",
    why:
      "A screen reader user can understand and operate the close action without guessing."
  },
  {
    title: "Layout constraints",
    developerRequest: "Build a responsive settings layout with a main form and supporting panel.",
    genericOutput:
      "The assistant reached for a generic Bootstrap or Tailwind-style grid instead of Pine's layout primitives.",
    guidance:
      "Pine layout starts with container, then row, then box, with mobile-first sizing and spacing handled through system props.",
    result:
      "The generated layout follows the Pine container, row, and box workflow so spacing, breakpoints, and composition match the system.",
    why:
      "Teams get a layout that behaves consistently across product surfaces and screen sizes."
  },
  {
    title: "Token usage",
    developerRequest: "Style a warning message with the right text and background colors.",
    genericOutput:
      "The assistant used hardcoded colors or core token names that described values instead of product meaning.",
    guidance:
      "Use semantic tokens that map intent to theme-aware values instead of raw colors or low-level primitives.",
    result:
      "The final output uses semantic Pine tokens, so the warning adapts across light mode, dark mode, and future themes.",
    why:
      "The UI stays readable and theme-compatible without one-off color fixes."
  }
];

const decisionFlow = [
  "Accessibility",
  "Component Selection",
  "Layout",
  "Tokens",
  "Semantic HTML"
];

const PineMcpCaseStudy = () => (
  <main className="case-study-page">
    <Helmet
      title="Pine MCP | Quinton Jason"
      meta={[
        {
          name: "description",
          content:
            "A case study about Pine MCP, an AI-assisted design system workflow that helps generated code follow Pine components, tokens, accessibility rules, and implementation patterns."
        }
      ]}
    />

    <section className="page-hero">
      <div className="container">
        <p className="section-heading__eyebrow">Pine MCP</p>
        <h1>A workflow gate for AI-assisted design system adoption.</h1>
        <p>
          Pine MCP helps AI assistants detect when Pine is needed, retrieve the
          right component and token context, and validate generated UI against
          design system rules. The goal is generated code that starts closer to
          Pine components, accessibility standards, and implementation patterns.
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
              <dt>Focus</dt>
              <dd>MCP workflow gate for generated UI quality</dd>
            </div>
            <div>
              <dt>System</dt>
              <dd>Pine Design System</dd>
            </div>
            <div>
              <dt>Users</dt>
              <dd>Engineers, designers, and AI assistants</dd>
            </div>
          </dl>
        </aside>

        <div className="case-study-content">
          <section>
            <p className="section-heading__eyebrow">Problem</p>
            <h2>AI was speeding up coding, but bypassing the system.</h2>
            <p>
              As engineers started using AI assistants to move faster, generated
              interfaces often came back built with generic markup, Tailwind
              classes, or patterns from other component libraries. That created
              a new kind of design system adoption problem: code could drift
              away from Pine before a human had a chance to review it.
            </p>
            <p>
              The issue was not that engineers did not value the design system.
              The issue was that the assistant did not understand the system.
              Pine needed to be consumable by people and by the tools helping
              those people write code.
            </p>
          </section>

          <section>
            <p className="section-heading__eyebrow">Approach</p>
            <h2>Expose design system knowledge where generation happens.</h2>
            <p>
              Pine MCP exposes design system knowledge to AI-assisted
              development workflows: available components, design tokens,
              governing rules, implementation guidance, accessibility
              requirements, composition advice, and anti-patterns that help
              course-correct generated output.
            </p>
          </section>

          <section>
            <p className="section-heading__eyebrow">Pine MCP In Practice</p>
            <h2>Three places Pine MCP changes generated UI decisions.</h2>
            <p>
              Generic AI assistants generate plausible code. Pine MCP changes
              the decisions being made during generation by injecting design
              system knowledge, accessibility guidance, layout constraints,
              token rules, and component recommendations.
            </p>
            <div className="practice-grid">
              {practiceExamples.map(example => (
                <article className="practice-card" key={example.title}>
                  <h3>{example.title}</h3>
                  <dl>
                    <div>
                      <dt>Developer Request</dt>
                      <dd>{example.developerRequest}</dd>
                    </div>
                    <div>
                      <dt>Generic AI Output</dt>
                      <dd>{example.genericOutput}</dd>
                    </div>
                    <div>
                      <dt>Pine MCP Guidance</dt>
                      <dd>{example.guidance}</dd>
                    </div>
                    <div>
                      <dt>Final Pine-Compliant Result</dt>
                      <dd>{example.result}</dd>
                    </div>
                    <div>
                      <dt>Why It Matters</dt>
                      <dd>{example.why}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section>
            <p className="section-heading__eyebrow">What Pine MCP Actually Changes</p>
            <h2>It replaces the most common answer with the system answer.</h2>
            <div className="evidence-callout">
              <p>
                Across all examples, Pine MCP collapses a fork in the road into
                a single correct answer. Instead of selecting patterns based on
                what is most common on the web, Pine MCP applies the current
                design system's rules at generation time.
              </p>
            </div>
            <ol className="decision-flow" aria-label="Design system decisions Pine MCP moves earlier">
              {decisionFlow.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p>
              These are the same decisions a senior design system engineer
              would normally catch during code review. Pine MCP moves them
              earlier into the generation process.
            </p>
          </section>

          <section>
            <p className="section-heading__eyebrow">MCP Tools</p>
            <h2>Tools for components, docs, review, and repair.</h2>
            <ul className="tool-list">
              {mcpTools.map(tool => (
                <li key={tool}>
                  <code>{tool}</code>
                </li>
              ))}
            </ul>
          </section>

          <div className="case-study-actions">
            <a
              href="https://medium.com/@quintonjasonjr/teaching-ai-our-design-system-d9788fe96c8e"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the article
            </a>
            <Link to="/contact/">Talk design systems and AI</Link>
            <Link to="/work/">Back to work</Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default PineMcpCaseStudy;
