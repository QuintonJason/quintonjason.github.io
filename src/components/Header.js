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
    return (
      <header>
        <HeaderDiv className="header-wrapper">
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
        </HeaderDiv>
      </header>
    );
  }
}
