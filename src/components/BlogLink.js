import React from 'react';
import Link from 'gatsby-link';

const BlogLink = (props) => {
  const { url, external_url } = props
  const link = external_url ? <a href={external_url} target="_blank" rel="noopener noreferrer">Read More</a> : <Link to={url}>Read More</Link>;
  return (

    <div className="post-landing-link">
      {link}
    </div>

  );
};

export default BlogLink;