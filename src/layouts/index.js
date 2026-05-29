import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'

// favicons
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import faviconApple from '../images/apple-touch-icon.png'

import GithubIcon from '../images/Github'
import LinkedInIcon from '../images/LinkedIn'

require("../css/prismjs.css");
import '../css/styles.css'

import './index.css'

const Footer = () => (
  <footer>
    <div
      className="footer-inner"
      style={{
        margin: '0 auto',
        maxWidth: 1100,
        padding: '1.45rem 1.0875rem',
      }}>
        <div className="footer-primary">
          <div>
            <strong>Quinton Jason</strong>
            <p>Senior design engineering, design systems, writing, and teaching.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <Link to="/work/">Work</Link>
            <Link to="/writing/">Writing</Link>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
            <Link to="/calligraphy/">Calligraphy</Link>
          </nav>
        </div>
        <ul className="footer-social-nav">
          <li>
            <a href="https://www.linkedin.com/in/quintonjason/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon className="linkedin-icon"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/QuintonJason/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon className="github-icon"/>
            </a>
          </li>
        </ul>
    </div>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div className="hey"
      style={{
        display: 'grid',
        minHeight: '100vh',
        gridTemplateRows: 'auto 1fr auto',

      }}>
    <Helmet
      title="Quinton Jason"
      meta={[
        { name: 'description', content: 'Senior Design Engineer focused on design systems, frontend architecture, accessibility, design tokens, teaching, and AI-native product workflows.' },
        { property: 'og:locale', content: 'en-US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Quinton Jason' },
        { property: 'og:description', content: 'Senior Design Engineer focused on design systems, frontend architecture, accessibility, design tokens, teaching, and AI-native product workflows.' },
      ]} >

        <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <meta name="theme-color" content="#00c200" />
      </Helmet>
    <Header />
    <div
      style={{
        padding: '0',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
