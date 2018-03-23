import * as PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "gatsby-link";
import { NavLink } from "react-router-dom";

import Logo from "../images/Logo";

export default class Header extends Component {
  // define props
  constructor(props) {
    // propTypes = {}
    // fires before component is mounted
    super(props); // makes this refer to this component
    this.state = { date: new Date() }; // set state
  }
  render() {
    return (
      <header>
        <div
          className="header-wrapper"
          style={{
            margin: "0 auto",
            maxWidth: 1100,
            padding: "1.45rem 1.0875rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gridAutoFlow: "column"
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <Logo className="header-logo" />
            </Link>
          </h1>
          <nav id="main-nav" className="header-nav">
            <NavLink to="/posts/" className="header-link">
              Blog
            </NavLink>
            <NavLink to="/snippets/" className="header-link">
              Snippets
            </NavLink>
            <NavLink to="/contact/" className="header-link">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }

  componentWillMount() {
    // fires immediately before the initial render
  }
  componentDidMount() {
    // fires immediately after the initial render
  }
  componentWillReceiveProps() {
    // fires when component is receiving new props
  }
  // shouldComponentUpdate() {
  // // fires before rendering with new props or state
  // }
  componentWillUpdate() {
    // fires immediately before rendering
    // with new props or state
  }
  componentDidUpdate() {
    // fires immediately after rendering with new P or S
  }
  componentWillUnmount() {
    // fires immediately before component is unmounted
    // from DOM (removed)
  }
}
