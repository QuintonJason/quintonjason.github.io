import * as PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "gatsby-link";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { media } from "../utils/styled-components-media-queries";

import Logo from "../images/Logo";

const HeaderWrapper = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const HeaderDiv = styled(HeaderWrapper)`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  ${media.phone`
    grid-template-columns: repeat(2,auto);
    grid-auto-flow: unset;
  `};
`;

export default class Header extends Component {
  render() {
    const { isDarkMode, onToggleTheme } = this.props;

    return (
      <header>
        <HeaderDiv className="header-wrapper">
          <div className="site-brand">
            <Link
              to="/"
              aria-label="Quinton Jason home"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <Logo className="header-logo" />
            </Link>
          </div>
          <nav id="main-nav" className="header-nav" aria-label="Primary">
            <NavLink exact to="/" className="header-link">
              Home
            </NavLink>
            <NavLink to="/work/" className="header-link">
              Work
            </NavLink>
            <NavLink to="/writing/" className="header-link">
              Writing
            </NavLink>
            <NavLink to="/about/" className="header-link">
              About
            </NavLink>
            <NavLink to="/contact/" className="header-link">
              Contact
            </NavLink>
            <button
              type="button"
              className="theme-toggle"
              aria-label={isDarkMode ? "Use light mode" : "Use dark mode"}
              aria-pressed={isDarkMode}
              onClick={onToggleTheme}
              title={isDarkMode ? "Use light mode" : "Use dark mode"}
            >
              <span className="theme-toggle__icon theme-toggle__sun" aria-hidden="true">
                {"\u2600"}
              </span>
              <span className="theme-toggle__icon theme-toggle__moon" aria-hidden="true">
                {"\u25D0"}
              </span>
            </button>
          </nav>
        </HeaderDiv>
      </header>
    );
  }
}

Header.propTypes = {
  isDarkMode: PropTypes.bool,
  onToggleTheme: PropTypes.func
};

Header.defaultProps = {
  isDarkMode: false,
  onToggleTheme: () => {}
};
