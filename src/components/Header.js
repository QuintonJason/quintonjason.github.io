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
  // define props
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false
    };
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
  }
  toggleMobileNav = e => {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  };
  closeMobileNav = e => {
    this.setState({
      mobileNavOpen: false
    });
  };
  render() {
    const menuClass = this.state.mobileNavOpen ? "active" : "";

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
          <button
            id="mobile-toggle"
            className={`toggle-icon ${menuClass}`}
            aria-label="Mobile menu"
            onClick={this.toggleMobileNav}
          >
            <span className="hide-text">Menu</span>
            <span className="line line-1" />
            <span className="line line-2" />
            <span className="line line-3" />
          </button>
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

  componentWillMount() {
    // fires immediately before the initial render
  }
  componentDidMount() {
    let knob, rotation; 
      console.log('loaded');
      knob = document.querySelector('#rotation');
      console.log('knob: ', knob);

      Draggable.create(knob, {
        type: "rotation",
        throwProps: true,
        onDrag: function() {
          console.log(this.rotation)
        }
      });     
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
