import React from 'react'

import FacebookIcon from '../images/Facebook'
import CodepenIcon from '../images/Codepen'
import GithubIcon from '../images/Github'
import TwitterIcon from '../images/Twitter'
import LinkedInIcon from '../images/LinkedIn'

// import '../css/footer.scss';

const Footer = () => (
  <footer className="l-footer">
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
              <span className="t-hidden">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/quintonjasonjr" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="twitter-icon" />
              <span className="t-hidden">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/quintonjason/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="linkedin-icon"/>
              <span className="t-hidden">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/quintonjason/" target="_blank" rel="noopener noreferrer">
              <CodepenIcon className="codepen-icon"/>
              <span className="t-hidden">Codepen</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/QuintonJason/" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="github-icon"/>
              <span className="t-hidden">Github</span>
            </a>
          </li>
        </ul>
    </div>
  </footer>
)

export default Footer;