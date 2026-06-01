import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  const gist = data.gistsJson;
  return (
    <div className="gist_single">
      <p>{gist.description}</p>
      <iframe
        src={`https://gist.github.com/${gist.username}/${gist.id}.pibb`}
        title={gist.description}
        width="100%"
        height="600"
        loading="lazy"
      />
      <p>
        <a href={`https://gist.github.com/${gist.username}/${gist.id}`}>
          View gist on GitHub
        </a>
      </p>
    </div>
  );
};

export const query = graphql`
  query GistQuery($slug: String!) {
    gistsJson(fields: { slug: { eq: $slug } }) {
      id
      username
      description
    }
  }
`;
