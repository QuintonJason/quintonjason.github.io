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

const systemWorkflows = [
  {
    title: "Documentation -> Validation -> Enforcement",
    purpose: "Pine goes beyond documentation.",
    copy:
      "Documentation alone does not create consistency. Pine reinforces standards through validation, migration tooling, and AI-assisted workflows that help teams make the right decision at the moment work happens.",
    steps: [
      "Documentation",
      "Lint Rules",
      "Migration Tooling",
      "AI Validation",
      "Adoption"
    ]
  },
  {
    title: "Detect -> Context -> Generate -> Validate",
    purpose: "Pine MCP changes AI-assisted development.",
    copy:
      "Rather than treating AI as a separate workflow, Pine MCP exposes design system knowledge directly to AI assistants so generated code aligns with established components, tokens, accessibility standards, and implementation patterns.",
    steps: [
      "User Request",
      "Detect Pine Context",
      "Retrieve Design System Guidance",
      "Generate UI",
      "Validate Against Pine",
      "Fix Issues",
      "Ship"
    ]
  },
  {
    title: "Design -> Tokens -> Components -> Product",
    purpose: "Design decisions travel into production.",
    copy:
      "A shared token architecture creates a direct path from design decisions to production implementation.",
    steps: [
      "Figma",
      "Tokens Studio",
      "Style Dictionary",
      "Pine Components",
      "Product Teams"
    ]
  },
  {
    title: "Legacy -> Bridge -> Pine",
    purpose: "Migration works as adoption strategy.",
    copy:
      "Migration was treated as a product problem, not a rewrite project. Teams could move incrementally without stopping feature development.",
    steps: [
      "Legacy Sage",
      "Compatibility Layer",
      "Migration Guidance",
      "Pine Components",
      "Shared Standards"
    ]
  },
  {
    title: "Build -> Teach -> Scale",
    purpose: "Teaching and systems use the same adoption model.",
    copy:
      "Teaching and design systems share the same goal: helping people understand and apply a model consistently.",
    steps: [
      "Build Systems",
      "Teach Systems",
      "Create Documentation",
      "Enable Adoption",
      "Scale Teams"
    ]
  }
];

const proofArtifacts = [
  {
    eyebrow: "Migration Artifact",
    title: "FormikPine changed the unit of migration.",
    lead:
      "Form migration stalled when teams had to rewrite an entire form state contract just to adopt Pine inputs.",
    steps: [
      {
        label: "Old workflow",
        title: "Migrate the whole form",
        body:
          "Product teams had to replace Sage form components and revisit Formik wiring in one large migration."
      },
      {
        label: "System bridge",
        title: "FormikPine adapter",
        body:
          "FormikPine translated existing Formik state into Pine web component events and prop conventions."
      },
      {
        label: "New workflow",
        title: "Migrate one field",
        body:
          "Teams could move field by field inside normal product work instead of waiting for a dedicated rewrite."
      }
    ],
    impact:
      "The migration path became small enough for product teams to adopt without pausing feature delivery."
  },
  {
    eyebrow: "UX Artifact",
    title: "Combobox dropdowns stopped getting clipped in modals.",
    lead:
      "This is the product-facing side of design system work: one component fix removes a recurring interaction bug for every consumer.",
    steps: [
      {
        label: "User problem",
        title: "Options were hidden",
        body:
          "Scrollable modals clipped combobox dropdowns, so users could type into the field but could not reliably see or select options."
      },
      {
        label: "Decision",
        title: "Portal the dropdown",
        body:
          "Render the dropdown at the document body so it escapes modal overflow without requiring product teams to restructure their markup."
      },
      {
        label: "Outcome",
        title: "The bug class disappears",
        body:
          "Comboboxes inside current and future modals can show their option lists without one-off modal overrides."
      }
    ],
    impact:
      "Small component-level craft turned into product-wide interaction consistency."
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

const WorkflowCard = ({ workflow }) => (
  <article className="system-workflow-card">
    <div className="system-workflow-card__content">
      <span>{workflow.purpose}</span>
      <h3>{workflow.title}</h3>
      <p>{workflow.copy}</p>
    </div>
    <ol className="system-workflow-card__flow" aria-label={`${workflow.title} workflow`}>
      {workflow.steps.map(step => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  </article>
);

const ProofArtifact = ({ artifact }) => (
  <section className="proof-artifact-section">
    <div className="section-heading">
      <p className="section-heading__eyebrow">{artifact.eyebrow}</p>
      <h2>{artifact.title}</h2>
      <p>{artifact.lead}</p>
    </div>
    <div className="artifact-flow artifact-flow--three">
      {artifact.steps.map(step => (
        <article className="artifact-step" key={step.label}>
          <span>{step.label}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      ))}
    </div>
    <div className="evidence-callout">
      <strong>Why it matters</strong>
      <p>{artifact.impact}</p>
    </div>
  </section>
);

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
          <section className="system-workflows-section">
            <div className="section-heading">
              <p className="section-heading__eyebrow">How Pine Works</p>
              <h2>Key system workflows behind governance, adoption, and scale.</h2>
              <p>
                Pine is not one workflow. It is a set of repeatable paths that
                connect documentation, validation, migration, tokens, product
                teams, and AI-assisted development.
              </p>
            </div>
            <div className="system-workflow-grid">
              {systemWorkflows.map(workflow => (
                <WorkflowCard workflow={workflow} key={workflow.title} />
              ))}
            </div>
          </section>

          {evidenceSections.map(section => (
            <EvidenceSection section={section} key={section.eyebrow} />
          ))}

          {proofArtifacts.map(artifact => (
            <ProofArtifact artifact={artifact} key={artifact.title} />
          ))}

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
