import React from "react";
import Link from "gatsby-link";

import IgPostList from "../components/igPostList";

import Helmet from "react-helmet";

const IgPosts = props => {
  return (
    <div className="container">
      <p className="h2">Calligraphy</p>
      <IgPostList />
    </div>
  );
};

export default IgPosts;
