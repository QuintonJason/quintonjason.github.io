import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className="container page-hero">
    <p className="section-heading__eyebrow">404</p>
    <h1>That page is not here.</h1>
    <p>
      The site has been reorganized a bit. Try the writing index, work page, or
      the homepage.
    </p>
    <p>
      <Link to="/" className="button button--primary">
        Go home
      </Link>
      <Link to="/writing/" className="button button--secondary button--spaced">
        View writing
      </Link>
    </p>
  </div>
)

export default NotFoundPage
