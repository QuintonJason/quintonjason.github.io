import React from "react";
var Gist = require('react-gist')

export default ({ data }) => {
  const igPosts = data.igPostsJson;
  return (
    <div className="gist_single">
      
      <p>{igPostsgist.description}</p>
      <Gist id={igPosts.id} />
    </div>
  );
};

export const query = graphql`
  query IGQuery($slug: String!) {
    igPostsJson(fields: { slug: { eq: $slug } }) {
      id
      caption
      date
      likes {
        count
      }
      image
      media
    }
  }
`;