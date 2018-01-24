import React from "react";
var Gist = require('react-gist')

export default ({ data }) => {
  const gist = data.gistsJson;
  return (
    <div className="gist_single">
      
      <p>{gist.description}</p>
      <Gist id={gist.id} />
    </div>
  );
};

export const query = graphql`
  query GistQuery($slug: String!) {
    gistsJson(fields: { slug: { eq: $slug } }) {
      id
      description
    }
  }
`;