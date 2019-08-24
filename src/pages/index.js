import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Layout from "../layouts/index";

// import RightArrow from '../images/RightArrow';

const Index = () => (
  <Layout>
    <div
      className="container flex flex-hor-center"
      style={{
        display: "grid",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Helmet
        title="quintonjason.com"
        meta={[{ name: "description", content: "" }]}
      />
      <div className="hero">
        <span className="hero__label">Hello, my name is</span>
        <h1 className="hero__title">Quinton Jason</h1>
        {/*<p className="hero__bio">I am a front-end web developer, speaker, and occasional writer living in the beautiful city of Denver, Colorado.</p>*/}
        <Link to="/posts/" className="hero__link">
          Check out my articles{" "}
        </Link>
      </div>
    </div>
  </Layout>
);

export default Index;
