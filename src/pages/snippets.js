import React from "react";
import Link from "gatsby-link";

import SnippetList from "../components/SnippetList";
// import * as logoAnimation from "../lib/logoAnimation";

import Helmet from "react-helmet";

const Snippets = props => {
  return (
    <div className="container">
      {/*<button id="rotation">console.log() rotation</button>
      <br />
      <img
        id="knob"
        src="https://greensock.com/wp-content/uploads/custom/draggable/img/knob.png"
        width="410"
        height="410"
  />*/}
      <h1>Snippets</h1>
      <SnippetList />
    </div>
  );
};

export default Snippets;
