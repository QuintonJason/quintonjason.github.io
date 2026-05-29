import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import BlogLink from "../components/BlogLink";

import "../css/styles.css";

export default ({ data }) => {
  return (
    <main className="container archive-page">
      <Helmet
        title="Writing Archive | Quinton Jason"
        meta={[
          {
            name: "description",
            content:
              "Older writing from Quinton Jason on SVG, responsive design, prototyping, forms, and web craft."
          }
        ]}
      />
      <div className="archive-intro">
        <p className="section-heading__eyebrow">Archive</p>
        <h1>Older posts from this site</h1>
        <p>
          These posts are part of the original archive. For newer articles and
          features, start with the curated <Link to="/writing/">writing page</Link>.
        </p>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="post-landing-single">
          <h3 className="h1 headline">{node.frontmatter.title} </h3>
          <span>Posted on {node.frontmatter.date}</span>
          <p>{node.excerpt}</p>

          <BlogLink
            url={node.fields.slug}
            external_url={node.frontmatter.external_url}
          />
        </div>
      ))}
    </main>
  );
};

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            external_url
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
