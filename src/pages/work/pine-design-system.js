import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const metrics = [
  { value: "40+", label: "engineers supported" },
  { value: "6", label: "product teams" },
  { value: "40", label: "components" },
  { value: "4-repo", label: "design system architecture" }
];

const evidenceSections = [
  {
    layout: "media-right",
    eyebrow: "Architecture",
    title: "Pine is product infrastructure, not only a component library.",
    lead:
      "First, Pine had to work across product surfaces, technology stacks, and adoption paths.",
    image: "/images/pine-case-study/getting-started.png",
    alt:
      "Pine documentation getting started page showing install guidance, first component rendering, and token usage.",
    caption:
      "Getting Started documentation gives engineers a clear path from install to first component to tokenized styling.",
    problem:
      "Kajabi product surfaces span multiple stacks and generations of UI. A design system that only works in one framework would not travel far enough.",
    decision:
      "Structure Pine around web components, shared docs, tokenized styling, and consumer integrations so teams can adopt the system across product contexts.",
    tradeoff:
      "Web components require more care around accessibility, framework wrappers, and documentation than a single-framework component package.",
    outcome:
      "Pine can serve as a cross-platform system for product teams instead of a narrow implementation library."
  },
  {
    layout: "media-full",
    spotlight: true,
    eyebrow: "Migration Strategy",
    title: "Moving teams to Pine was as important as building Pine.",
    lead:
      "A design system only matters when teams can move real product work into it without stopping delivery.",
    image: "/images/pine-case-study/sage-to-pine-migration.png",
    alt:
      "Pine Sage to Pine migration guide showing a mental model shift and quick mapping table from legacy markup to Pine approaches.",
    caption:
      "Migration docs map legacy Sage and raw HTML habits to Pine equivalents so teams can modernize incrementally.",
    problem:
      "Teams were carrying forward Sage-era layout habits, raw HTML, utility classes, and hardcoded styling into new UI.",
    decision:
      "Frame migration as a mental model shift: component-first, semantic content, props for spacing, and tokens for color.",
    tradeoff:
      "Gradual migration is slower than a rewrite, but it is safer for a large product surface with active teams.",
    outcome:
      "Teams get a practical bridge from legacy UI to Pine without blocking product work on a full rewrite."
  },
  {
    layout: "media-left",
    eyebrow: "Design Tokens",
    title: "Tokens turn raw color decisions into semantic product language.",
    lead:
      "Once teams had an adoption path, consistency needed to live in the language of the system.",
    image: "/images/pine-case-study/token-naming-convention.png",
    alt:
      "Pine token naming convention documentation showing namespace, base, context, and modifier examples.",
    caption:
      "Naming conventions define how token names move from generic primitives to component-level decisions.",
    problem:
      "Without a shared naming model, tokens become another set of hardcoded values with unclear ownership and inconsistent usage.",
    decision:
      "Use a layered naming convention that separates namespace, base, context, and modifier so tokens can scale from core values to component APIs.",
    tradeoff:
      "A stricter naming model asks teams to learn the system before moving quickly, but it makes long-term adoption more predictable.",
    outcome:
      "Teams get a shared vocabulary for color, state, context, and component styling instead of one-off naming."
  },
  {
    layout: "compact",
    eyebrow: "Token Mapping",
    title: "Mapping references help teams migrate from raw values to semantic tokens.",
    lead:
      "Token adoption needed a reference that connected old implementation habits to new product meaning.",
    image: "/images/pine-case-study/token-mapping-reference.png",
    alt:
      "Pine token mapping reference showing core tokens, semantic tokens, and use cases for text and background colors.",
    caption:
      "Token mapping references connect core values to semantic usage so teams know which token fits a product decision.",
    problem:
      "Engineers need to know which semantic token replaces a raw color or legacy value when updating existing UI.",
    decision:
      "Document token mappings with the use case attached, not just the token name.",
    tradeoff:
      "Mapping tables add maintenance overhead, but they reduce guesswork and make token adoption more self-serve.",
    outcome:
      "Token migration becomes a clearer implementation path rather than a scavenger hunt through color names."
  },
  {
    layout: "media-right",
    eyebrow: "Developer Experience",
    title: "Component docs make API decisions visible at the point of use.",
    lead:
      "Adoption also depended on docs that helped engineers make the right implementation decision while building.",
    image: "/images/pine-case-study/button-examples.png",
    alt:
      "Pine button documentation showing primary, secondary, tertiary, and accent button examples with React and web component tabs.",
    caption:
      "Button examples show variants, disabled states, icon usage, and implementation tabs for React and web components.",
    problem:
      "Component adoption slows down when engineers have to infer variants, states, or implementation details from scattered examples.",
    decision:
      "Document components with live examples, variants, state guidance, and implementation tabs.",
    tradeoff:
      "Better docs require ongoing upkeep, but they reduce repeated design system support requests.",
    outcome:
      "Engineers can choose the right component behavior faster and with fewer one-off UI decisions."
  },
  {
    layout: "media-full",
    eyebrow: "Accessibility",
    title: "Accessibility guidance is part of the component contract.",
    lead:
      "As Pine became the path for product UI, accessibility had to be part of the component contract instead of a late review step.",
    image: "/images/pine-case-study/accessibility-guide-light.png",
    alt:
      "Pine accessibility guide in light mode showing WCAG Level AA guidance, keyboard navigation principles, and ARIA patterns.",
    caption:
      "The accessibility guide documents keyboard navigation, ARIA patterns, labels, and component-specific expectations.",
    problem:
      "Accessibility breaks when it is treated as a checklist after product UI has already been composed.",
    decision:
      "Move accessibility expectations into Pine docs and component guidance so engineers see them while they build.",
    tradeoff:
      "Central guidance cannot replace product-level testing, but it creates a stronger baseline for every team.",
    outcome:
      "Teams have a shared accessibility standard tied to the design system rather than scattered tribal knowledge."
  },
  {
    layout: "media-left",
    compact: true,
    eyebrow: "Dark Mode + Accessibility",
    title: "The same accessibility guidance has to hold across themes.",
    lead:
      "Theme support made the accessibility contract more visible across contrast, focus, and component states.",
    image: "/images/pine-case-study/accessibility-guide-dark.png",
    alt:
      "Pine accessibility guide in dark mode showing the same keyboard navigation and ARIA guidance in a dark theme.",
    caption:
      "Dark theme documentation makes contrast, focus, and component states easier to validate across modes.",
    problem:
      "Theme support can expose weak contrast, unclear focus, and component assumptions that only worked in light mode.",
    decision:
      "Keep accessibility guidance visible in both light and dark contexts so themed UI is part of the design system standard.",
    tradeoff:
      "Every theme increases validation cost, but theme-aware guidance prevents teams from treating dark mode as a visual skin.",
    outcome:
      "Accessibility standards stay connected to real component rendering across themes."
  },
];

const architectureRepos = [
  "ds-tokens",
  "pine",
  "pine-mcp",
  "kajabi-products",
  "legacy Sage migration bridge"
];

const outcomeItems = [
  "Established Pine as product infrastructure across product teams.",
  "Made component, token, accessibility, migration, and developer workflow decisions easier to find.",
  "Created a clearer path from legacy Sage patterns to Pine components and tokens.",
  "Extended design system adoption into AI-assisted development workflows through Pine MCP."
];

const governanceItems = [
  {
    title: "Document",
    description:
      "Make component, token, accessibility, and migration expectations explicit."
  },
  {
    title: "Guide",
    description:
      "Translate legacy Sage and raw HTML habits into Pine component and token choices."
  },
  {
    title: "Enforce",
    description:
      "Move repeatable rules into linting, migration checks, and changed-line validation."
  },
  {
    title: "Validate",
    description:
      "Use Pine MCP to help generated UI follow system rules before product review."
  }
];

const EvidenceSection = ({ section }) => {
  const classes = [
    "evidence-section",
    `evidence-section--${section.layout}`,
    section.spotlight ? "evidence-section--spotlight" : "",
    section.compact ? "evidence-section--compact" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
  <section className={classes}>
    <div className="evidence-section__content">
      <p className="section-heading__eyebrow">{section.eyebrow}</p>
      <h2>{section.title}</h2>
      {section.lead && <p className="evidence-section__lead">{section.lead}</p>}
      <dl className="decision-list">
        <div>
          <dt>Problem</dt>
          <dd>{section.problem}</dd>
        </div>
        <div>
          <dt>Decision</dt>
          <dd>{section.decision}</dd>
        </div>
        <div>
          <dt>Tradeoff</dt>
          <dd>{section.tradeoff}</dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>{section.outcome}</dd>
        </div>
      </dl>
    </div>
    <figure className="evidence-figure">
      <img src={section.image} alt={section.alt} loading="lazy" />
      <figcaption>{section.caption}</figcaption>
    </figure>
  </section>
  );
};

const PineDesignSystemCaseStudy = () => (
  <main className="case-study-page">
    <Helmet
      title="Pine Design System | Quinton Jason"
      meta={[
        {
          name: "description",
          content:
            "A case study about Pine Design System architecture, design tokens, accessibility, migration strategy, developer experience, and AI-assisted design system workflows."
        }
      ]}
    />

    <section className="page-hero">
      <div className="container">
        <p className="section-heading__eyebrow">Pine Design System</p>
        <h1>Design system infrastructure for product teams, platform adoption, and AI-assisted workflows.</h1>
        <p>
          Pine is Kajabi's multi-platform design system supporting 40+
          engineers across 6 product teams. My work focused on the systems that
          help teams adopt Pine: web components, design tokens, accessibility
          standards, migration guidance, documentation, governance, developer
          workflows, and Pine MCP.
        </p>
      </div>
    </section>

    <section className="case-study-proof">
      <div className="container">
        <dl className="proof-strip proof-strip--case-study">
          {metrics.map(item => (
            <div className="proof-strip__item" key={item.label}>
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="home-section">
      <div className="container case-study-layout">
        <div className="case-study-overview">
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
                <dd>Architecture, tokens, accessibility, migration, developer experience, and AI-assisted workflows</dd>
              </div>
            </dl>
          </aside>

          <section className="evidence-intro">
            <p className="section-heading__eyebrow">Architecture Model</p>
            <h2>A four-repo system with a migration bridge.</h2>
            <p>
              Pine needed to support current product teams, legacy migration,
              documentation, tokens, and AI-assisted development without turning
              every adoption problem into a one-off support thread.
            </p>
            <ul className="tool-list">
              {architectureRepos.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="evidence-callout">
              <strong>System decision</strong>
              <p>
                The architecture had to support production components, token
                distribution, AI-readable knowledge, product integration, and
                legacy migration at the same time.
              </p>
            </div>
            <div className="evidence-callout">
              <strong>Cross-team adoption</strong>
              <p>
                The work required more than publishing components. It meant
                helping engineers, designers, and product teams align on APIs,
                migration paths, accessibility expectations, documentation, and
                the moments where standards should become workflow checks.
              </p>
            </div>
            <div className="architecture-feature">
              <ol className="architecture-map" aria-label="Pine architecture flow">
                <li className="architecture-map__tokens">ds-tokens</li>
                <li className="architecture-map__pine">pine</li>
                <li className="architecture-map__products">kajabi-products</li>
                <li className="architecture-map__mcp">pine-mcp</li>
                <li className="architecture-map__ai">AI assistants</li>
              </ol>
            </div>
          </section>
        </div>

        <div className="case-study-content">
          {evidenceSections.map(section => (
            <EvidenceSection section={section} key={section.eyebrow} />
          ))}

          <section className="evidence-section evidence-section--diagram evidence-section--media-full">
            <div className="evidence-section__content">
              <p className="section-heading__eyebrow">Governance and Enforcement</p>
              <h2>Rules had to move from documentation into the workflow.</h2>
              <p className="evidence-section__lead">
                Instead of relying on documentation alone, Pine needed adoption
                paths that could guide teams during implementation, migration,
                review, and AI-assisted code generation.
              </p>
              <dl className="decision-list">
                <div>
                  <dt>Problem</dt>
                  <dd>
                    Documentation explained the system, but teams still needed
                    help catching hardcoded colors, legacy Sage patterns, and
                    bypassed component choices during real product work.
                  </dd>
                </div>
                <div>
                  <dt>Decision</dt>
                  <dd>
                    Treat linting, migration guidance, changed-line checks, and
                    Pine MCP validation as part of the governance model.
                  </dd>
                </div>
                <div>
                  <dt>Tradeoff</dt>
                  <dd>
                    Enforcement adds maintenance cost, but it reduces review
                    churn and keeps standards closer to implementation.
                  </dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>
                    Teams get a system that teaches, guides, and validates
                    choices where product decisions are made.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="workflow-feature workflow-feature--governance">
              <p className="section-heading__eyebrow">Governance model</p>
              <ol className="workflow-diagram" aria-label="Pine governance workflow">
                {governanceItems.map((item, index) => (
                  <li key={item.title}>
                    <span>{index + 1}</span>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="evidence-section evidence-section--diagram evidence-section--media-full">
            <div className="evidence-section__content">
              <p className="section-heading__eyebrow">Pine MCP / AI Workflows</p>
              <h2>Design system knowledge has to reach AI-assisted development tools.</h2>
              <p className="evidence-section__lead">
                After Pine had structure, adoption guidance, and standards, the next
                question was how AI-assisted development could consume the same system
                knowledge.
              </p>
              <dl className="decision-list">
                <div>
                  <dt>Problem</dt>
                  <dd>
                    Engineers were using AI assistants to move faster, but generated
                    UI could drift toward generic markup, Tailwind, or shadcn-style
                    patterns instead of Pine.
                  </dd>
                </div>
                <div>
                  <dt>Decision</dt>
                  <dd>
                    Pine MCP exposes component, token, icon, design doc,
                    accessibility, composition, and anti-pattern guidance to
                    AI-assisted development workflows.
                  </dd>
                </div>
                <div>
                  <dt>Tradeoff</dt>
                  <dd>
                    The work is not machine learning engineering. It is workflow
                    design, system context, and generated-code quality control.
                  </dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>
                    AI-assisted UI work can start from Pine context and be reviewed
                    against system rules before product review.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="workflow-feature">
              <p className="section-heading__eyebrow">MCP workflow</p>
              <ol className="workflow-diagram" aria-label="Pine MCP workflow">
                <li>
                  <span>1</span>
                  <strong>Detect</strong>
                  <p>Identify when generated UI should use Pine.</p>
                </li>
                <li>
                  <span>2</span>
                  <strong>Retrieve</strong>
                  <p>Get component, token, icon, doc, accessibility, and pattern context.</p>
                </li>
                <li>
                  <span>3</span>
                  <strong>Compose</strong>
                  <p>Use Pine components and tokens instead of generic markup.</p>
                </li>
                <li>
                  <span>4</span>
                  <strong>Validate</strong>
                  <p>Review layouts against Pine rules and anti-patterns.</p>
                </li>
              </ol>
            </div>
          </section>

          <section className="evidence-section evidence-section--outcomes">
            <div className="evidence-section__content">
              <p className="section-heading__eyebrow">Outcomes</p>
              <h2>The work made Pine easier to adopt, govern, and extend.</h2>
              <p>
                The strongest design system work often disappears into the
                product. These artifacts show the infrastructure behind that
                adoption: docs, token rules, component examples, migration
                guidance, accessibility standards, and AI workflow support.
              </p>
            </div>
            <ul className="outcome-list outcome-list--evidence">
              {outcomeItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
