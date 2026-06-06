import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const projectDetails = [
  { label: "Company", value: "Kajabi" },
  { label: "Role", value: "Senior UX Developer" },
  { label: "Team", value: "Design Systems" },
  { label: "Timeline", value: "2025 to 2026" },
  { label: "Platform", value: "Kajabi Admin" }
];

const impactItems = [
  "Dark mode support across Kajabi Admin",
  "A shared theme contract for Rails, React, Pine, Sage, and embedded surfaces",
  "A migration path away from hardcoded color values",
  "A reusable pattern for iframe-based editor theming",
  "A foundation for future theme capabilities"
];

const themeSurfaces = [
  "Rails views",
  "React applications",
  "Pine components",
  "Sage and legacy UI",
  "TinyMCE iframes"
];

const rolloutItems = [
  "Released behind a feature flag",
  "Persisted creator theme preferences across sessions",
  "Protected preferences during account masquerading workflows",
  "Created space for validation before broad rollout"
];

const EvidenceSlot = ({ title, demonstrates, matters, supports }) => (
  <aside className="future-evidence" aria-label={`Future evidence: ${title}`}>
    <p className="section-heading__eyebrow">Future screenshot</p>
    <h3>{title}</h3>
    <dl>
      <div>
        <dt>Should show</dt>
        <dd>{demonstrates}</dd>
      </div>
      <div>
        <dt>Why it matters</dt>
        <dd>{matters}</dd>
      </div>
      <div>
        <dt>Story supported</dt>
        <dd>{supports}</dd>
      </div>
    </dl>
  </aside>
);

const EvidencePair = ({ title, caption, images }) => (
  <figure className="evidence-pair">
    <div className="evidence-pair__grid">
      {images.map(image => (
        <div className="evidence-pair__item" key={image.label}>
          <span>{image.label}</span>
          <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
      ))}
    </div>
    <figcaption>
      <strong>{title}</strong>
      {caption}
    </figcaption>
  </figure>
);

const RolloutDiagram = () => (
  <figure className="rollout-diagram">
    <figcaption>
      <strong>Rollout and preference model</strong>
      Dark mode shipped through separated release, preference, session, and render concerns.
    </figcaption>
    <ol aria-label="Dark mode rollout flow">
      <li>
        <span>1</span>
        <strong>Feature flag</strong>
        <p>Control availability for internal testing and gradual release.</p>
      </li>
      <li>
        <span>2</span>
        <strong>User preference</strong>
        <p>Persist the creator's light or dark mode choice across sessions.</p>
      </li>
      <li>
        <span>3</span>
        <strong>Session context</strong>
        <p>Respect workflows like masquerading without overwriting creator state.</p>
      </li>
      <li>
        <span>4</span>
        <strong>Theme render</strong>
        <p>Apply the root theme contract across app, design system, and embedded surfaces.</p>
      </li>
    </ol>
  </figure>
);

const ThemeContractDiagram = () => (
  <figure className="theme-contract-diagram">
    <figcaption>
      <strong>Root theme contract</strong>
      One root attribute became the shared signal for theme-aware surfaces.
    </figcaption>
    <div className="theme-contract-diagram__root">
      <code>{`<html data-theme="dark">`}</code>
    </div>
    <ul aria-label="Surfaces that consume the root theme contract">
      <li>
        <strong>Rails views</strong>
        <p>Server-rendered surfaces read the same contract.</p>
      </li>
      <li>
        <strong>React apps</strong>
        <p>Product experiences resolve theme state consistently.</p>
      </li>
      <li>
        <strong>Pine components</strong>
        <p>Design system UI renders with semantic tokens.</p>
      </li>
      <li>
        <strong>Sage bridge</strong>
        <p>Legacy surfaces participate during migration.</p>
      </li>
      <li>
        <strong>TinyMCE</strong>
        <p>Embedded editors receive mirrored theme state.</p>
      </li>
    </ul>
  </figure>
);

const DarkModeSection = ({
  eyebrow,
  title,
  lead,
  children,
  evidence,
  visual,
  customEvidence,
  layout = "media-right",
  spotlight = false
}) => {
  const classes = [
    "evidence-section",
    `evidence-section--${layout}`,
    spotlight ? "evidence-section--spotlight" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <div className="evidence-section__content">
        <p className="section-heading__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {lead && <p className="evidence-section__lead">{lead}</p>}
        {children}
      </div>
      {customEvidence || (visual ? <EvidencePair {...visual} /> : evidence && <EvidenceSlot {...evidence} />)}
    </section>
  );
};

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
        <h1>Dark mode as platform architecture, not a visual skin.</h1>
        <p>
          In 2026, Kajabi released dark mode for its admin experience. The
          feature looked simple from the outside, but the work behind it exposed
          hidden design system debt across Rails, React, Sage, TinyMCE, Pine,
          and multiple generations of product UI.
        </p>
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
            <h2>Users saw a toggle. The platform needed a theme system.</h2>
            <p>
              The Design Systems team treated dark mode as infrastructure. My
              role focused on the architectural patterns, semantic token
              adoption, migration strategy, and implementation details that let
              dark mode scale across a decade-old admin platform.
            </p>
            <div className="evidence-callout">
              <strong>Core idea</strong>
              <p>
                The challenge was not creating dark colors. The challenge was
                helping every surface understand what those colors meant.
              </p>
            </div>
          </section>
        </div>

        <div className="case-study-content">
          <DarkModeSection
            eyebrow="Before / After Impact"
            title="Dark mode revealed where the product already lacked a shared styling contract."
            lead="A second theme made disconnected color decisions visible. Hardcoded values, legacy components, embedded editors, and third-party assumptions all became part of the same systems problem."
            layout="media-full"
            visual={{
              title: "Admin dashboard in light and dark mode.",
              caption:
                " The paired view shows dark mode affecting product navigation, analytics cards, charts, empty states, CTAs, and supporting surfaces together.",
              images: [
                {
                  label: "Light",
                  src: "/images/dark-mode-case-study/admin-light.png",
                  alt: "Kajabi Admin dashboard in light mode with navigation, analytics cards, and promotional cards."
                },
                {
                  label: "Dark",
                  src: "/images/dark-mode-case-study/admin-dark.png",
                  alt: "Kajabi Admin dashboard in dark mode with the same navigation, analytics cards, and promotional cards."
                }
              ]
            }}
          >
            <ul className="outcome-list">
              {impactItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DarkModeSection>

          <DarkModeSection
            eyebrow="Theme Architecture"
            title="A single root-level theme contract kept the platform from fragmenting."
            lead="The key architectural decision was using one source of truth for theme state instead of letting each app, surface, or component family manage theme independently."
            layout="media-right"
            customEvidence={<ThemeContractDiagram />}
          >
            <article className="code-card code-card--single">
              <h3>Shared contract</h3>
              <pre>
                <code>{`<html data-theme="dark">`}</code>
              </pre>
            </article>
            <ul className="tool-list">
              {themeSurfaces.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Independent theme management would have created competing sources
              of truth, inconsistent persistence, and duplicated implementation
              logic. The root contract gave every surface the same signal.
            </p>
          </DarkModeSection>

          <DarkModeSection
            eyebrow="Semantic Token Strategy"
            title="Before dark mode could scale, color needed product meaning."
            lead="Semantic tokens moved theme behavior out of individual CSS decisions and into a shared design system language."
            layout="media-full"
          >
            <p>
              The important shift was not visual. It was moving from direct
              color declarations to tokens that describe product intent. Once
              surfaces used semantic tokens, light and dark themes could resolve
              through the same implementation path.
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
          </DarkModeSection>

          <DarkModeSection
            eyebrow="Legacy Compatibility & Migration"
            title="Legacy systems had to participate before they could be replaced."
            lead="Large parts of Kajabi Admin still depended on Sage, older color systems, Rails views, and inherited styling. Waiting for a full rewrite would have made dark mode impractical."
            layout="media-full"
            spotlight
            visual={{
              title: "A transitional product surface in both themes.",
              caption:
                " This view is useful because it shows real migration conditions: form controls, status chips, rich text editing, cards, and legacy-era surfaces participating in the same theme.",
              images: [
                {
                  label: "Light",
                  src: "/images/dark-mode-case-study/sage-and-pine-light.png",
                  alt: "Kajabi offer details page in light mode showing forms, status cards, and TinyMCE editor."
                },
                {
                  label: "Dark",
                  src: "/images/dark-mode-case-study/sage-and-pine-dark.png",
                  alt: "Kajabi offer details page in dark mode showing forms, status cards, and TinyMCE editor."
                }
              ]
            }}
          >
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
            <p>
              This was the adoption work underneath the feature: helping teams
              move away from hardcoded color values and into a modern theme
              architecture without stopping product delivery.
            </p>
          </DarkModeSection>

          <DarkModeSection
            eyebrow="TinyMCE & Embedded Systems"
            title="TinyMCE turned dark mode into a cross-document theming problem."
            lead="The editor rendered inside an iframe. That meant it operated as a separate document and could not automatically inherit CSS variables or theme state from the parent app."
            layout="media-right"
            spotlight
            visual={{
              title: "TinyMCE editor content in light and dark mode.",
              caption:
                " The editor proves the iframe problem: toolbar chrome, editable content, borders, and text colors all needed to respond even though the editor runs in a separate document.",
              images: [
                {
                  label: "Light",
                  src: "/images/dark-mode-case-study/tinymce-light.png",
                  alt: "TinyMCE editor in light mode with toolbar and editable content."
                },
                {
                  label: "Dark",
                  src: "/images/dark-mode-case-study/tinymce-dark.png",
                  alt: "TinyMCE editor in dark mode with toolbar and editable content."
                }
              ]
            }}
          >
            <dl className="decision-list">
              <div>
                <dt>Problem</dt>
                <dd>Iframes cannot automatically access the parent document's theme state or CSS variables.</dd>
              </div>
              <div>
                <dt>Decision</dt>
                <dd>Mirror theme state into the editor environment and maintain dedicated editor styles.</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>The pattern became reusable for embedded experiences that need to participate in platform theming.</dd>
              </div>
            </dl>
          </DarkModeSection>

          <DarkModeSection
            eyebrow="Rollout Strategy"
            title="Feature flags and preference handling reduced organizational risk."
            lead="The rollout had to protect creator preferences, support internal testing, and work with account masquerading without accidentally changing someone else's theme state."
            layout="media-left"
            customEvidence={<RolloutDiagram />}
          >
            <ul className="outcome-list">
              {rolloutItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DarkModeSection>

          <section className="evidence-section evidence-section--outcomes">
            <div className="evidence-section__content">
              <p className="section-heading__eyebrow">Outcomes</p>
              <h2>Dark mode became a platform capability.</h2>
              <p>
                The work created a scalable theming architecture, improved the
                migration path for legacy UI, reduced reliance on hardcoded
                color values, and gave future teams a foundation for theme-aware
                product development.
              </p>
            </div>
            <ul className="outcome-list outcome-list--evidence">
              {impactItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="reflection-section">
            <p className="section-heading__eyebrow">Reflection</p>
            <h2>Dark mode revealed the design system work underneath.</h2>
            <p>
              The biggest lesson from this project is that dark mode is not
              really a dark mode project. It is a design systems project.
              Features like dark mode expose every inconsistency hiding within a
              platform.
            </p>
            <blockquote>
              <p>Dark mode did not create the technical debt. It revealed it.</p>
            </blockquote>
            <p>
              Most people will not think about semantic tokens, theme contracts,
              compatibility layers, or iframe styling strategies. They will
              notice that dark mode works. That is the point. The best design
              system work often disappears into the product.
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
