import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'

// favicons
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import faviconApple from '../images/apple-touch-icon.png'

// images
import FacebookIcon from '../images/Facebook'
import CodepenIcon from '../images/Codepen'
import GithubIcon from '../images/Github'
import TwitterIcon from '../images/Twitter'
import LinkedInIcon from '../images/LinkedIn'

require("../css/prismjs.scss");

import './index.css'

const Footer = () => (
  <footer>
    <div
      className=""
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}>
        <ul className="footer-social-nav">
          <li>
            <a href="https://www.facebook.com/quinton.jason" target="_blank">
              <FacebookIcon className="facebook-icon"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/quintonjasonjr" target="_blank">
              <TwitterIcon className="twitter-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/quintonjason/" target="_blank">
              <LinkedInIcon className="linkedin-icon"/>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/quintonjason/" target="_blank">
              <CodepenIcon className="codepen-icon"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/QuintonJason/" target="_blank">
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
        height: '100vh',
        display: 'grid',
        'gridTemplateRows': 'auto 1fr auto',

    // grid-template-columns: 1fr;

      }}>
    <Helmet
      title="quintonjason.com"
      meta={[
        { name: 'description', content: 'My portfolio site' },
        { property: 'og:locale', content: 'en-US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Quinton Jason' },
        { property: 'og:description', content: 'My portfolio site' },
      ]} >

        <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <meta name="theme-color" content="#00c200" />
      </Helmet>
    <Header />
    <div
      style={{
        // margin: '0 auto',
        // maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
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
