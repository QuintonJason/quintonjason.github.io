import React from "react";
import Link from "gatsby-link";

import SnippetList from "../components/SnippetList";
// import * as logoAnimation from "../lib/logoAnimation";

import Helmet from "react-helmet";

const Snippets = props => {
  return (
    <main className="container archive-page">
      {/*<button id="rotation">console.log() rotation</button>
      <br />
      <img
        id="knob"
        src="https://greensock.com/wp-content/uploads/custom/draggable/img/knob.png"
        width="410"
        height="410"
  />*/}
      <Helmet
        title="Snippets | Quinton Jason"
        meta={[
          {
            name: "description",
            content:
              "A small archive of code snippets and front-end experiments by Quinton Jason."
          }
        ]}
      />
      <div className="archive-intro">
        <p className="section-heading__eyebrow">Snippets</p>
        <h1>Small code experiments and utilities</h1>
        <p>
          A historical collection of gists, demos, and reusable front-end notes.
        </p>
      </div>
      <SnippetList />
    </main>
  );
};

export default Snippets;
