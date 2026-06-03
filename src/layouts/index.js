import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Header from '../components/Header'

// favicons
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import faviconApple from '../images/apple-touch-icon.png'

import GithubIcon from '../images/Github'
import LinkedInIcon from '../images/LinkedIn'

import '../css/prismjs.css'
import '../css/styles.css'
import './index.css'

const THEME_STORAGE_KEY = 'qj-theme'
const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'
const SITE_URL = 'https://quintonjason.com/'
const SITE_DESCRIPTION = 'Senior Design Engineer focused on design systems, frontend architecture, accessibility, design tokens, teaching, and AI-native product workflows.'
const SOCIAL_IMAGE_URL = `${SITE_URL}apple-touch-icon.png`

const getStoredTheme = () => {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY)
  } catch (error) {
    return null
  }
}

const saveTheme = theme => {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch (error) {
    // Browsers can block localStorage; theme still works for the current page.
  }
}

const Footer = () => (
  <footer>
    <div className="footer-inner">
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

class TemplateWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: LIGHT_THEME,
    }
  }

  componentDidMount() {
    const savedTheme = getStoredTheme()
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = savedTheme || (prefersDark ? DARK_THEME : LIGHT_THEME)

    this.setTheme(theme)

    if (window.navigator && window.navigator.serviceWorker) {
      window.navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister())
      })
    }

    if (window.caches) {
      window.caches.keys().then(keys => {
        keys.forEach(key => window.caches.delete(key))
      })
    }
  }

  setTheme = theme => {
    const nextTheme = theme === DARK_THEME ? DARK_THEME : LIGHT_THEME

    this.setState({ theme: nextTheme })

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', nextTheme)
      document.body.classList.toggle('theme-dark-body', nextTheme === DARK_THEME)
    }

    if (typeof window !== 'undefined') {
      saveTheme(nextTheme)
    }
  }

  toggleTheme = () => {
    this.setTheme(this.state.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME)
  }

  render() {
    const { children } = this.props
    const isDarkMode = this.state.theme === DARK_THEME

    return (
      <div className={`hey layout-shell theme-${this.state.theme}`}>
        <Helmet
          title="Quinton Jason"
          meta={[
            { name: 'description', content: SITE_DESCRIPTION },
            { property: 'og:locale', content: 'en-US' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Quinton Jason | Senior Design Engineer' },
            { property: 'og:site_name', content: 'Quinton Jason' },
            { property: 'og:url', content: SITE_URL },
            { property: 'og:description', content: SITE_DESCRIPTION },
            { property: 'og:image', content: SOCIAL_IMAGE_URL },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Quinton Jason | Senior Design Engineer' },
            { name: 'twitter:description', content: SITE_DESCRIPTION },
            { name: 'twitter:image', content: SOCIAL_IMAGE_URL },
          ]} >

            <link rel="canonical" href={SITE_URL} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
            <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
            <meta name="theme-color" content={isDarkMode ? '#0f1712' : '#00c200'} />
          </Helmet>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header isDarkMode={isDarkMode} onToggleTheme={this.toggleTheme} />
        <div
          id="main-content"
          tabIndex="-1"
          className="layout-main"
        >
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.node,
}

export default TemplateWrapper
