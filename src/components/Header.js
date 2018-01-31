import React from 'react';
import Link from 'gatsby-link';
import { NavLink } from 'react-router-dom';

import Logo from '../images/Logo'

const Header = () => (
  <header>
    <div
      className="header-wrapper"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    > 

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Logo className="header-logo"/>
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
)

export default Header