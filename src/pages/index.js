import React from "react";
import Link from "gatsby-link";
import BlogLink from "../components/BlogLink";

import styles from "../css/styles.scss";

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="post-landing-single">	
        	<h3 className="h1 headline">
        	  {node.frontmatter.title}{" "}
        	</h3>
        	<span>Posted on {node.frontmatter.date}</span>
        	<p>{node.excerpt}</p>
	        
          <BlogLink url={node.fields.slug} external_url={node.frontmatter.external_url} />
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            external_url
          }
          fields{
          	slug
          }
          excerpt
        }
      }
    }
  }
`;