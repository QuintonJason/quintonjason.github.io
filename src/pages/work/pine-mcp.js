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
        <h1>Teaching AI assistants to use the design system.</h1>
        <p>
          Engineers were reaching for AI to build faster, but the generated
          code often ignored Pine and defaulted to generic UI patterns. Pine MCP
          gives AI-assisted workflows access to the same components, tokens,
          accessibility guidance, and governance rules that product teams are
          expected to use.
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
              <dd>AI-assisted design system workflows</dd>
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
            <p>
              In practice, a designer or engineer can provide design context,
              then use design tooling context alongside Pine MCP so the
              assistant maps an interface to Pine components instead of
              inventing a generic implementation.
            </p>
            <ol className="workflow-diagram" aria-label="Pine MCP workflow">
              <li>
                <span>1</span>
                <strong>Design context</strong>
                <p>Designs, screenshots, prompts, or product intent.</p>
              </li>
              <li>
                <span>2</span>
                <strong>Pine MCP</strong>
                <p>Components, tokens, rules, docs, and patterns.</p>
              </li>
              <li>
                <span>3</span>
                <strong>Pine output</strong>
                <p>Generated code starts with system components.</p>
              </li>
              <li>
                <span>4</span>
                <strong>Review and repair</strong>
                <p>Layout issues can be reviewed and corrected.</p>
              </li>
            </ol>
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

          <section>
            <p className="section-heading__eyebrow">Before and After</p>
            <h2>Tabs should become Pine tabs, not generic markup.</h2>
            <div className="code-comparison">
              <article className="code-card">
                <h3>Before Pine MCP</h3>
                <p>
                  The assistant treated tabs like loose markup and text, missing
                  the design system component.
                </p>
                <pre>
                  <code>{`<div>
  <span>Sturdy</span>
  <div class="panel">...</div>
</div>`}</code>
                </pre>
              </article>

              <article className="code-card">
                <h3>After Pine MCP</h3>
                <p>
                  With Pine context available, the assistant can use the
                  intended component API.
                </p>
                <pre>
                  <code>{`<pds-tabs>
  <pds-tab name="sturdy">Sturdy</pds-tab>
  <pds-tab-panel name="sturdy">...</pds-tab-panel>
</pds-tabs>`}</code>
                </pre>
              </article>
            </div>
          </section>

          <section>
            <p className="section-heading__eyebrow">Why It Matters</p>
            <h2>Adoption has to happen at the moment decisions are made.</h2>
            <p>
              Documentation still matters, but AI-assisted development changes
              where implementation decisions happen. Pine MCP moves design
              system guidance into the workflow while code is being generated,
              reviewed, and repaired.
            </p>
            <p>
              The goal is not to make AI an authority over the system. The goal
              is to make system knowledge available to the tools teams already
              use, so generated code starts closer to established components,
              tokens, accessibility requirements, and implementation patterns.
            </p>
          </section>

          <section>
            <p className="section-heading__eyebrow">What Changed</p>
            <h2>The review starts from a better place.</h2>
            <ul className="outcome-list">
              <li>
                AI-assisted output can start closer to Pine components and
                established implementation patterns.
              </li>
              <li>
                Review conversations can focus more on product intent and less
                on basic system compliance.
              </li>
              <li>
                System rules become available during generation, not only after
                someone stops to search documentation.
              </li>
              <li>
                Accessibility guidance and anti-patterns can be introduced
                while layouts are being generated, reviewed, and repaired.
              </li>
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
