import React from "react";
import Link from "gatsby-link";

import IgPostList from "../components/igPostList";

import Helmet from "react-helmet";

const IgPosts = props => {
  return (
    <main className="container archive-page">
      <Helmet
        title="Calligraphy | Quinton Jason"
        meta={[
          {
            name: "description",
            content:
              "A creative archive of calligraphy practice from Quinton Jason."
          }
        ]}
      />
      <div className="archive-intro">
        <p className="section-heading__eyebrow">Calligraphy</p>
        <h1>Letterforms, rhythm, and practice</h1>
        <p>
          A small creative archive from an older Instagram series. It stays here
          because craft in visual work and craft in interfaces are related.
        </p>
      </div>
      <IgPostList />
    </main>
  );
};

export default IgPosts;
