import React from "react";

import Layout from "../layouts/index";
import IgPostList from "../components/igPostList";

const IgPosts = props => {
  return (
    <Layout>
      <div className="container">
        <p className="h2">Calligraphy</p>
        <IgPostList />
      </div>
    </Layout>
  );
};

export default IgPosts;
