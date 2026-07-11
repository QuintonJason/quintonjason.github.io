import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const projectDetails = [
  { label: 'Role', value: 'Senior Design Engineer' },
  {
    label: 'Focus',
    value: 'MCP, design systems, accessibility, developer experience',
  },
  {
    label: 'Technologies',
    value: 'Model Context Protocol, TypeScript, Web Components, Storybook',
  },
  {
    label: 'Audience',
    value: 'Engineers, designers, and AI-assisted development workflows',
  },
]

const toolExamples = ['get_pine_component', 'get_pine_design_doc']

const featuredExamples = [
  {
    title: 'Semantic tokens and dark mode',
    request:
      'Style a card with a white background, thin gray border, dark title text, and slightly lighter body text.',
    genericLabel: 'Likely generic output',
    genericCode: `.card {
  background-color: var(--pine-color-white);
  border: 1px solid var(--pine-color-grey-300);
  color: var(--pine-color-grey-900);

  .card-body {
    color: var(--pine-color-grey-700);
  }
}`,
    pineLabel: 'Pine-compliant output',
    pineCode: `.card {
  background-color: var(--pine-color-background-container);
  border: 1px solid var(--pine-color-border);
  color: var(--pine-color-text);

  .card-body {
    color: var(--pine-color-text-muted);
  }
}`,
    guidance:
      'Use semantic tokens for contextual meaning. Do not use hardcoded colors or fixed core color tokens where semantic alternatives exist.',
    why:
      'Both versions may look identical in light mode, but only the semantic-token version adapts correctly to dark mode.',
  },
  {
    title: 'Responsive layout',
    request:
      'Build a two-column page with wide main content and a narrow sidebar. Stack it on mobile.',
    genericLabel: 'Likely generic output',
    genericCode: `<div style="max-width: 1200px; margin: 0 auto;">
  <div style="display: flex; gap: 16px;">
    <div style="flex: 2;">Main content</div>
    <div style="flex: 1;">Sidebar</div>
  </div>
</div>`,
    pineLabel: 'Pine-compliant output',
    pineCode: `<pds-container size="lg">
  <pds-row col-gap="md">
    <pds-box size-xs="12" size-md="8">
      Main content
    </pds-box>
    <pds-box size-xs="12" size-md="4">
      Sidebar
    </pds-box>
  </pds-row>
</pds-container>`,
    guidance:
      'Use container, row, and box with mobile-first breakpoint sizing. Do not introduce inline styles or a competing layout model.',
    why:
      "The Pine version uses the system's actual responsive architecture instead of creating another layout pattern for teams to maintain.",
  },
  {
    title: 'Accessible icon-only close button',
    request:
      'Add a close button to the modal header that just shows an X icon.',
    genericLabel: 'Likely generic output',
    genericCode: `<button class="modal-close" onclick="close()">
  <svg width="16" height="16">
    <!-- X icon path -->
  </svg>
</button>`,
    pineLabel: 'Pine-compliant output',
    pineCode: `<pds-button icon-only aria-label="Close dialog">
  <pds-icon slot="start" name="remove" aria-hidden="true"></pds-icon>
  Close dialog
</pds-button>`,
    guidance:
      'Icon-only controls require an accessible name, and decorative icons must be hidden from assistive technology.',
    why:
      'The generic version may be announced only as button. The Pine-guided version communicates Close dialog button.',
  },
]

const shortExamples = [
  {
    title: 'Toast versus alert',
    request: 'Show a success message after the user clicks Save.',
    genericCode: `{saved && (
  <div className="bg-green-100 text-green-800 p-3">
    Saved!
  </div>
)}`,
    pineCode: `<pds-toast
  component-id="save-success"
  variant="success"
  message="Profile saved."
></pds-toast>`,
    guidance:
      'Use toast for temporary feedback about a completed action that does not require acknowledgment. Use alert for persistent or critical information.',
    why: 'The system encodes behavior and hierarchy, not just color.',
  },
  {
    title: 'Accessible form field',
    request: 'Add an email signup form with an email input and submit button.',
    genericCode: `<input type="email" placeholder="Enter your email" />
<button type="submit">Submit</button>`,
    pineCode: `<pds-input
  component-id="signup-email"
  label="Email"
  type="email"
  name="email"
  required
></pds-input>

<pds-button variant="primary" type="submit">
  Submit
</pds-button>`,
    guidance:
      'Inputs require persistent labels. Placeholder text is not a label. Use the system component API so error state and accessibility relationships remain intact.',
    why:
      'The system makes accessible implementation the default rather than something each developer must rebuild.',
  },
]

const decisionSummary = [
  'Accessible names for icon-only controls',
  'Toast versus alert based on behavioral purpose',
  'System layout primitives instead of generic CSS',
  'Semantic tokens instead of fixed color values',
  'Persistent labels and system-managed form accessibility',
]

const outcomes = [
  'More consistent component selection',
  'Better token usage',
  'Accessibility guidance available during implementation',
  'Reduced reliance on generic web patterns',
  'Design-system decisions available within AI-assisted workflows',
  'Repetitive corrections moved earlier in the development process',
]

const lessons = [
  'AI is a new consumer of the design system.',
  'Human-readable documentation and machine-usable context are related, but not identical.',
  'The system needs explicit component contracts, priorities, constraints, and anti-patterns.',
  'Validation is as important as retrieval.',
  'The most valuable guardrails address subtle errors that still look visually plausible.',
]

const FlowDiagram = () => (
  <figure className="mcp-flow-diagram">
    <figcaption>
      <strong>Pine MCP generation flow</strong>
      MCP tools retrieve current component APIs and design guidance at the
      moment the AI assistant needs them.
    </figcaption>
    <ol aria-label="Pine MCP generation flow">
      <li>Developer request</li>
      <li>AI assistant</li>
      <li>Pine MCP tools</li>
      <li>Component contracts and design guidance</li>
      <li>Generated implementation</li>
      <li>Validation</li>
    </ol>
  </figure>
)

const CodeBlock = ({ children }) => (
  <pre>
    <code>{children}</code>
  </pre>
)

const FeaturedExample = ({ example, spotlight = false }) => (
  <article
    className={`mcp-example ${spotlight ? 'mcp-example--spotlight' : ''}`}
  >
    <div className="mcp-example__header">
      <span>Request</span>
      <h3>{example.title}</h3>
      <p>{example.request}</p>
    </div>
    <div className="code-comparison code-comparison--mcp">
      <article className="code-card">
        <h4>{example.genericLabel}</h4>
        <CodeBlock>{example.genericCode}</CodeBlock>
      </article>
      <article className="code-card code-card--pine">
        <h4>{example.pineLabel}</h4>
        <CodeBlock>{example.pineCode}</CodeBlock>
      </article>
    </div>
    <dl className="decision-list decision-list--mcp">
      <div>
        <dt>Rule enforced</dt>
        <dd>{example.guidance}</dd>
      </div>
      <div>
        <dt>Why it matters</dt>
        <dd>{example.why}</dd>
      </div>
    </dl>
  </article>
)

const ShortExample = ({ example }) => (
  <article className="mcp-short-example">
    <h4>{example.title}</h4>
    <p>
      <strong>Request: </strong>
      {example.request}
    </p>
    <div className="code-comparison code-comparison--mcp">
      <article className="code-card">
        <h5>Generic output</h5>
        <CodeBlock>{example.genericCode}</CodeBlock>
      </article>
      <article className="code-card code-card--pine">
        <h5>Pine-compliant output</h5>
        <CodeBlock>{example.pineCode}</CodeBlock>
      </article>
    </div>
    <dl className="decision-list decision-list--mcp">
      <div>
        <dt>Rule enforced</dt>
        <dd>{example.guidance}</dd>
      </div>
      <div>
        <dt>Why it matters</dt>
        <dd>{example.why}</dd>
      </div>
    </dl>
  </article>
)

const PineMcpCaseStudy = () => (
  <main className="case-study-page">
    <Helmet
      title="Pine MCP: Teaching AI to Build With a Design System | Quinton Jason"
      meta={[
        {
          name: 'description',
          content:
            'How I helped turn design-system documentation, component contracts, accessibility guidance, and token rules into structured context for AI-assisted development.',
        },
      ]}
    />

    <section className="page-hero">
      <div className="container">
        <p className="section-heading__eyebrow">Pine MCP</p>
        <h1>Teaching AI to build with the design system.</h1>
        <p>
          Pine MCP gives AI assistants direct access to Pine's component
          contracts, accessibility guidance, token rules, layout patterns, and
          implementation standards. Instead of relying on generic training data,
          generated code can use the same source of truth as the engineers
          maintaining the system.
        </p>
      </div>
    </section>

    <section className="case-study-proof">
      <div className="container">
        <div className="mcp-positioning-callout">
          <p>
            Pine MCP moves design-system decisions from review time to
            generation time.
          </p>
        </div>
      </div>
    </section>

    <section className="home-section">
      <div className="container case-study-layout">
        <div className="case-study-overview">
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

          <section className="evidence-intro">
            <p className="section-heading__eyebrow">Overview</p>
            <h2>
              Structured context turns Pine from something AI can mention into
              something AI can follow.
            </h2>
            <p>
              Pine MCP is not simply documentation exposed to an AI assistant.
              It is structured design-system context that helps AI choose the
              correct components, tokens, layouts, accessibility patterns, and
              implementation rules before code reaches review.
            </p>
            <div className="evidence-callout">
              <strong>Core argument</strong>
              <p>
                A generic model predicts the most common answer on the public
                web. Pine MCP retrieves the answer supported by the current
                design system.
              </p>
            </div>
          </section>
        </div>

        <div className="case-study-content">
          <section>
            <p className="section-heading__eyebrow">Problem</p>
            <h2>
              Generic AI output often looked reasonable while violating local
              system rules.
            </h2>
            <p>
              Generic AI assistants produce plausible UI based on common public
              patterns: raw HTML, utility classes, Bootstrap-like grids,
              hardcoded values, and component APIs from other systems. The
              problem was not that generated code always looked obviously
              broken. It often looked acceptable in isolation.
            </p>
            <p>
              The most dangerous output was not obviously incorrect. It was code
              that looked acceptable in isolation but violated the system in
              ways that surfaced later through accessibility issues, dark-mode
              failures, inconsistent behavior, or code review.
            </p>
            <ul className="outcome-list outcome-list--evidence">
              <li>Incorrect component selection</li>
              <li>Missing accessibility relationships</li>
              <li>Raw layout primitives instead of Pine layout components</li>
              <li>Core color tokens where semantic tokens were required</li>
              <li>Component APIs that did not match Pine</li>
            </ul>
          </section>

          <section className="evidence-section evidence-section--media-full">
            <div className="evidence-section__content">
              <p className="section-heading__eyebrow">
                Documentation Was Not Enough
              </p>
              <h2>
                Documentation tells. Structured context guides. Validation
                checks.
              </h2>
              <p>
                Human documentation is written for browsing, learning, and
                judgment. AI-assisted development needs retrievable context that
                is current, specific, and available at the moment code is being
                generated.
              </p>
            </div>
            <div
              className="mcp-docs-comparison"
              aria-label="Traditional documentation compared with Pine MCP"
            >
              <article>
                <h3>Traditional documentation</h3>
                <ul>
                  <li>Written for browsing and learning</li>
                  <li>Requires the reader to find the relevant page</li>
                  <li>Leaves implementation choices to the developer</li>
                  <li>Usually catches mistakes during review</li>
                </ul>
              </article>
              <article>
                <h3>Pine MCP</h3>
                <ul>
                  <li>Retrieves the relevant component contract or rule</li>
                  <li>
                    Supplies current, system-specific context at generation time
                  </li>
                  <li>Reduces ambiguous implementation choices</li>
                  <li>Supports validation before code reaches review</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="evidence-section evidence-section--media-full">
            <div className="evidence-section__content">
              <p className="section-heading__eyebrow">How Pine MCP Works</p>
              <h2>
                MCP tools retrieve the system rule when the assistant needs it.
              </h2>
              <p>
                Pine MCP makes design-system knowledge available as structured
                context. Tools can retrieve component APIs, design guidance,
                layout rules, token expectations, and accessibility guidance
                during generation rather than after a pull request is opened.
              </p>
              <ul className="tool-list">
                {toolExamples.map(tool => (
                  <li key={tool}>
                    <code>{tool}</code>
                  </li>
                ))}
              </ul>
            </div>
            <FlowDiagram />
          </section>

          <section className="proof-artifact-section">
            <div className="section-heading">
              <p className="section-heading__eyebrow">Evidence</p>
              <h2>Generic output versus Pine-guided output.</h2>
              <p>
                These examples show the kinds of decisions Pine MCP can pull
                forward: semantic tokens, layout primitives, accessible names,
                feedback behavior, and form accessibility.
              </p>
            </div>
            <div className="mcp-example-stack">
              {featuredExamples.map((example, index) => (
                <FeaturedExample
                  example={example}
                  key={example.title}
                  spotlight={index === 0}
                />
              ))}
            </div>
          </section>

          <section>
            <details className="mcp-more-examples">
              <summary>More examples</summary>
              <div className="mcp-short-example-grid">
                {shortExamples.map(example => (
                  <ShortExample example={example} key={example.title} />
                ))}
              </div>
            </details>
          </section>

          <section className="evidence-section evidence-section--outcomes">
            <div className="evidence-section__content">
              <p className="section-heading__eyebrow">Pattern</p>
              <h2>
                Pine MCP collapses plausible choices into the system-supported
                choice.
              </h2>
              <p>
                Across the examples, the pattern is consistent. The assistant
                should not have to infer Pine from generic web examples. It
                should retrieve the current rule, apply the documented component
                contract, and avoid anti-patterns before a reviewer has to
                correct them.
              </p>
            </div>
            <ul className="outcome-list outcome-list--evidence">
              {decisionSummary.map(item => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="proof-artifact-section">
            <div className="section-heading">
              <p className="section-heading__eyebrow">
                Generation-Time Guidance
              </p>
              <h2>
                Pine MCP does not remove human review. It changes what review is
                for.
              </h2>
              <p>
                The old flow pushed recurring system corrections into review.
                The Pine MCP flow moves those corrections earlier so reviewers
                can spend more attention on product judgment, edge cases, and
                user experience.
              </p>
            </div>
            <div
              className="mcp-review-shift"
              aria-label="Review-time correction compared with generation-time guidance"
            >
              <article>
                <h3>Review-time correction</h3>
                <ol>
                  <li>Generate</li>
                  <li>Implement</li>
                  <li>Review</li>
                  <li>Find violations</li>
                  <li>Revise</li>
                </ol>
              </article>
              <article>
                <h3>Generation-time guidance</h3>
                <ol>
                  <li>Retrieve rules</li>
                  <li>Generate within constraints</li>
                  <li>Validate</li>
                  <li>Review higher-level decisions</li>
                </ol>
              </article>
            </div>
            <div className="evidence-callout">
              <strong>Core conclusion</strong>
              <p>
                Pine MCP does not remove human review. It moves repetitive
                system corrections earlier so reviewers can focus on product
                judgment, edge cases, and user experience.
              </p>
            </div>
          </section>

          <section className="evidence-section evidence-section--outcomes">
            <div className="evidence-section__content">
              <p className="section-heading__eyebrow">
                Observed Workflow Outcomes
              </p>
              <h2>The value is qualitative, but concrete.</h2>
              <p>
                I am not presenting adoption numbers or measured business impact
                here. The defensible outcome is a clearer workflow:
                system-specific decisions become available inside AI-assisted
                development instead of appearing only as review feedback.
              </p>
            </div>
            <ul className="outcome-list outcome-list--evidence">
              {outcomes.map(item => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="reflection-section">
            <p className="section-heading__eyebrow">What I Learned</p>
            <h2>
              AI-assisted workflows make the design system contract more
              explicit.
            </h2>
            <ul className="outcome-list">
              {lessons.map(item => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="reflection-section">
            <p className="section-heading__eyebrow">Related Work</p>
            <h2>
              This work connects Pine, governance, and theme infrastructure.
            </h2>
            <div className="case-study-actions">
              <a
                href="https://pine-design-system.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pine Design System
              </a>
              <Link to="/influence-through-systems/">
                Influence Through Systems
              </Link>
              <Link to="/work/kajabi-admin-dark-mode/">
                Kajabi Admin Dark Mode
              </Link>
            </div>
          </section>

          <div className="case-study-actions">
            <Link to="/work/pine-design-system/">View Pine Design System</Link>
            <Link to="/work/">Back to work</Link>
            <Link to="/contact/">Talk design systems and AI</Link>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default PineMcpCaseStudy
