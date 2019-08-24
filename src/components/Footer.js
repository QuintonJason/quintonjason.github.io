import React from 'react'

import FacebookIcon from '../images/Facebook'
import CodepenIcon from '../images/Codepen'
import GithubIcon from '../images/Github'
import TwitterIcon from '../images/Twitter'
import LinkedInIcon from '../images/LinkedIn'

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
            <a href="https://www.facebook.com/quinton.jason" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="facebook-icon"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/quintonjasonjr" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="twitter-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/quintonjason/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="linkedin-icon"/>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/quintonjason/" target="_blank" rel="noopener noreferrer">
              <CodepenIcon className="codepen-icon"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/QuintonJason/" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="github-icon"/>
            </a>
          </li>
        </ul>
    </div>
  </footer>
)

export default Footer;