import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const sections = [
  {
    title: "Design System Governance",
    intro:
      "Governance works best when it changes the path teams follow, not when it creates another document people have to remember.",
    examples: [
      {
        name: "Semantic token linting",
        problem:
          "Hardcoded colors and low-level token choices made interfaces harder to theme and maintain.",
        before:
          "Engineers could ship one-off color decisions that looked right locally but drifted from system intent.",
        change:
          "Semantic token linting moved color rules into the implementation workflow.",
        after:
          "Teams were guided toward intent-based tokens while building, not only during review.",
        impact:
          "Color decisions became more consistent, easier to review, and better prepared for theming."
      },
      {
        name: "Component lifecycle labels",
        problem:
          "Teams needed clearer signals about which components were stable, changing, deprecated, or preferred.",
        before:
          "Engineers had to infer component maturity from docs, examples, or tribal knowledge.",
        change:
          "Lifecycle labels made component status visible inside the design system documentation.",
        after:
          "Teams could choose components with a clearer understanding of stability and migration expectations.",
        impact:
          "Adoption decisions became less ambiguous and easier to align across teams."
      }
    ]
  },
  {
    title: "Migration Strategy",
    intro:
      "Migration is a product adoption problem. The system has to meet teams where they are and still move them toward the standard.",
    examples: [
      {
        name: "No-Sage linting",
        problem:
          "Legacy Sage patterns continued to appear in new or changed UI, slowing Pine adoption.",
        before:
          "Reviewers had to manually catch old component usage and explain migration expectations repeatedly.",
        change:
          "No-Sage linting turned legacy usage into a visible workflow signal.",
        after:
          "Teams could see when new work was carrying old patterns forward and correct it earlier.",
        impact:
          "Migration pressure moved closer to implementation and reduced repeated review conversations."
      },
      {
        name: "FormikPine",
        problem:
          "Form migration required teams to connect product form patterns with Pine components and existing form state conventions.",
        before:
          "Teams had to hand-roll bridging patterns or delay migration until form work could be revisited more deeply.",
        change:
          "FormikPine created a bridge between existing form workflows and Pine component usage.",
        after:
          "Teams could migrate form UI incrementally while preserving familiar implementation patterns.",
        impact:
          "Pine adoption became more practical for real product surfaces with active delivery needs."
      }
    ]
  },
  {
    title: "AI-Assisted Development",
    intro:
      "AI-assisted development adds a new design system consumer. The assistant needs access to the same rules a senior reviewer would apply.",
    examples: [
      {
        name: "Pine MCP",
        problem:
          "Generic AI assistants generated plausible UI that often ignored Pine components, tokens, accessibility rules, and layout expectations.",
        before:
          "Engineers had to catch design system drift after code had already been generated.",
        change:
          "Pine MCP exposed component guidance, token rules, accessibility expectations, and layout review to AI-assisted workflows.",
        after:
          "Generated UI could start closer to Pine and be reviewed against system rules earlier.",
        impact:
          "Design system governance moved into the generation process instead of waiting for code review."
      }
    ]
  },
  {
    title: "Documentation and Decision Making",
    intro:
      "Documentation should reduce decision cost. The best docs help teams understand why a path exists and when to use it.",
    examples: [
      {
        name: "ADRs",
        problem:
          "Important system decisions could get lost once implementation moved on.",
        before:
          "Teams had to rediscover context through conversations, old tickets, or scattered history.",
        change:
          "Architecture decision records captured the decision, tradeoff, and reasoning behind system choices.",
        after:
          "Teams had a durable reference for why the system worked a certain way.",
        impact:
          "Future decisions became easier to align because the reasoning stayed visible."
      },
      {
        name: "Component lifecycle labels",
        problem:
          "Component docs needed to communicate adoption guidance, not only API details.",
        before:
          "A component page could show how to use something without making its recommendation status clear.",
        change:
          "Lifecycle labels added decision context directly to documentation.",
        after:
          "Engineers could connect API usage with system direction and migration timing.",
        impact:
          "Docs became a decision tool, not just a reference surface."
      }
    ]
  },
  {
    title: "Build-Time Quality Enforcement",
    intro:
      "The most useful quality checks happen before review. Build-time enforcement turns repeatable feedback into the system itself.",
    examples: [
      {
        name: "Semantic token linting",
        problem:
          "Color quality depended too much on individual review attention.",
        before:
          "Reviewers had to identify hardcoded values, core-token misuse, and theme risks manually.",
        change:
          "Lint rules made token misuse visible during development.",
        after:
          "Engineers could fix token issues before the work reached review.",
        impact:
          "Review time shifted away from repeatable corrections and toward higher-value product and UX decisions."
      },
      {
        name: "No-Sage linting",
        problem:
          "Legacy migration could stall when old patterns were only caught by human review.",
        before:
          "Teams could accidentally preserve Sage-era UI decisions in new product work.",
        change:
          "Build-time checks surfaced legacy usage as part of the development loop.",
        after:
          "Migration feedback became faster, more consistent, and less dependent on one reviewer noticing it.",
        impact:
          "The system helped teams move forward without relying on memory or manual policing."
      }
    ]
  }
];

const InfluenceThroughSystems = () => (
  <main className="influence-page">
    <Helmet
      title="Influence Through Systems | Quinton Jason"
      meta={[
        {
          name: "description",
          content:
            "A portfolio page about design systems leadership through tooling, documentation, linting, migrations, governance, and AI-assisted development workflows."
        }
      ]}
    />

    <section className="page-hero influence-hero">
      <div className="container">
        <p className="section-heading__eyebrow">Influence Through Systems</p>
        <h1>The most scalable way to improve quality is to change the system people work within.</h1>
        <p>
          My strongest design systems work changes behavior through tooling,
          process, documentation, migration paths, and platform decisions. The
          goal is not to manage people into consistency. The goal is to make
          consistent decisions easier to make.
        </p>
      </div>
    </section>

    <section className="home-section">
      <div className="container influence-layout">
        {sections.map(section => (
          <section className="influence-section" key={section.title}>
            <div className="section-heading">
              <p className="section-heading__eyebrow">{section.title}</p>
              <h2>{section.title}</h2>
              <p>{section.intro}</p>
            </div>
            <div className="influence-example-grid">
              {section.examples.map(example => (
                <article className="influence-example-card" key={`${section.title}-${example.name}`}>
                  <h3>{example.name}</h3>
                  <dl>
                    <div>
                      <dt>Problem</dt>
                      <dd>{example.problem}</dd>
                    </div>
                    <div>
                      <dt>Behavior Before</dt>
                      <dd>{example.before}</dd>
                    </div>
                    <div>
                      <dt>System Change</dt>
                      <dd>{example.change}</dd>
                    </div>
                    <div>
                      <dt>Behavior After</dt>
                      <dd>{example.after}</dd>
                    </div>
                    <div>
                      <dt>Impact</dt>
                      <dd>{example.impact}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>

    <section className="home-section home-section--quiet">
      <div className="container home-note">
        <div>
          <p className="section-heading__eyebrow">Related Work</p>
          <h2>The same pattern shows up across Pine, Pine MCP, and dark mode.</h2>
        </div>
        <p>
          The work is different, but the leverage is the same: change the
          workflow so teams can make better decisions with less repeated review
          burden.
        </p>
        <div className="case-study-actions">
          <Link to="/work/pine-design-system/">View Pine</Link>
          <Link to="/work/pine-mcp/">View Pine MCP</Link>
          <Link to="/work/kajabi-admin-dark-mode/">View dark mode</Link>
        </div>
      </div>
    </section>
  </main>
);

export default InfluenceThroughSystems;
