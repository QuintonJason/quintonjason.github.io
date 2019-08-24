import React from "react";

import Layout from "../layouts/index";
import SnippetList from "../components/SnippetList";

const Snippets = props => {
  return (
    <Layout>
      <div className="container">
        <h1>Snippets</h1>
        <SnippetList />
      </div>
    </Layout>
  );
};

export default Snippets;
