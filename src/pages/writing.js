import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import writing from "../../data/writing.json";
import "../css/styles.css";

const dateLabel = value =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

const externalWriting = writing
  .filter(item => item.type === "Article")
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const features = writing
  .filter(item => item.type !== "Article")
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const ExternalCard = ({ item }) => (
  <article className="writing-card">
    <div className="writing-card__meta">
      <span>{item.source}</span>
      <span>{dateLabel(item.date)}</span>
    </div>
    <h2>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {item.title}
      </a>
    </h2>
    <p>{item.summary}</p>
    <ul className="tag-list">
      {item.topics.map(topic => (
        <li key={topic}>{topic}</li>
      ))}
    </ul>
  </article>
);

const LocalPost = ({ post }) => (
  <article className="writing-row">
    <div className="writing-row__date">{post.frontmatter.date}</div>
    <div>
      <h3>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
    </div>
  </article>
);

const Writing = ({ data }) => {
  const localPosts = data.allMarkdownRemark.edges.map(({ node }) => node);

  return (
    <main className="writing-page">
      <Helmet
        title="Writing | Quinton Jason"
        meta={[
          {
            name: "description",
            content:
              "Writing by Quinton Jason on design systems, UX development, frontend architecture, accessibility, CSS, AI workflows, and web craft."
          }
        ]}
      />
      <section className="writing-hero">
        <div className="container">
          <p className="section-heading__eyebrow">Writing</p>
          <h1>Design systems, UX development, CSS, and the web.</h1>
          <p>
            A collected index of recent articles, older posts, and a few
            features from around the web.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-heading__eyebrow">Recent articles</p>
            <h2>Published elsewhere</h2>
          </div>
          <div className="writing-grid">
            {externalWriting.map(item => (
              <ExternalCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--quiet">
        <div className="container">
          <div className="section-heading">
            <p className="section-heading__eyebrow">Featured</p>
            <h2>Teaching and career story</h2>
          </div>
          <div className="feature-strip">
            {features.map(item => (
              <ExternalCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-heading__eyebrow">Archive</p>
            <h2>Older posts from this site</h2>
          </div>
          <div className="writing-list">
            {localPosts.map(post => (
              <LocalPost post={post} key={post.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Writing;

export const query = graphql`
  query WritingArchiveQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`;
