import React, { Component } from "react";
import Link from "gatsby-link";

import Logo from "../images/Logo";

export default class Header extends Component {
  render() {
    return (
      <header className="l-header">
        <Link
          to="/"
          className="header__brand-link"
        >
          <Logo className="header__logo" />
        </Link>
        <h1 className="t-hidden">Quinton Jason's Personal Site</h1>
        <nav id="main-nav" className="header-nav">
          <Link to="/posts/" className="header__link">
            Blog
          </Link>
          <Link to="/snippets/" className="header__link">
            Snippets
          </Link>
          <Link to="/contact/" className="header__link">
            Contact
          </Link>
        </nav>
      </header>
    );
  }
}
