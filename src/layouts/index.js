import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Logo from '../images/Logo'

require("../css/prismjs.scss");

import './index.css'

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
    </div>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="quintonjason.com"
      meta={[
        { name: 'description', content: 'My portfolio site' },
        { property: 'og:locale', content: 'en-US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Quinton Jason' },
        { property: 'og:description', content: 'My portfolio site' },
      ]} >

        <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png" />
        <link rel="manifest" href="../../manifest.json" />
        <meta name="theme-color" content="#00c200" />
      </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
