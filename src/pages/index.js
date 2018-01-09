import React from "react";
// import g from "glamorous";
import Link from "gatsby-link";

import styles from "../css/styles.scss";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>	
        	<h3>
        	  {node.frontmatter.title}{" "}
        	</h3>
        	<span>Posted on {node.frontmatter.date}</span>
        	<p>{node.excerpt}</p>
          if(node.frontmatter.external_url != null){
            <Link
              to={node.frontmatter.external_url}
              target="_blank"
            >Read More</Link>  
          } else 
          <Link
              to={node.fields.slug}
            >Read More</Link>
	        
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