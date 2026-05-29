import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const formatDate = timestamp =>
  new Date(timestamp * 1000).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

export default ({ data }) => {
  const post = data.igPostsJson;
  const imageUrl = `/images/${post.id}.jpg`;

  return (
    <main className="container calligraphy-single">
      <Helmet
        title={`Calligraphy | Quinton Jason`}
        meta={[
          {
            name: "description",
            content: post.caption
          }
        ]}
      />
      <Link to="/calligraphy/" className="text-link">
        Back to calligraphy
      </Link>
      <figure>
        <img src={imageUrl} alt={post.caption} />
        <figcaption>
          <span>{formatDate(post.date)}</span>
          <p>{post.caption}</p>
        </figcaption>
      </figure>
    </main>
  );
};

export const query = graphql`
  query IGQuery($slug: String!) {
    igPostsJson(fields: { slug: { eq: $slug } }) {
      id
      caption
      date
      image
    }
  }
`;
