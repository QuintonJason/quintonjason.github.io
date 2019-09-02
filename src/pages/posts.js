import React from "react";
import BlogLink from "../components/BlogLink";

import Layout from "../layouts/index";

export default ({ data }) => {
  return (
    <Layout>
      <div className="container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="post-landing-single">
            <h2 className="h1 headline">{node.frontmatter.title} </h2>
            <span>Posted on {node.frontmatter.date}</span>
            <p>{node.excerpt}</p>

            <BlogLink
              url={node.fields.slug}
              external_url={node.frontmatter.external_url}
            />
          </div>
        ))}
      </div>
    </Layout>
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
