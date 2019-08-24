import React from 'react';
import Helmet from 'react-helmet';

import '../css/global.scss';
// import favicon from '../images/favicon.ico';

import Footer from '../components/Footer';
import Header from '../components/Header';


const Layout = ({ children }) => (
  <div>
    <Helmet
      title="quintonjason.com"
      meta={[
        {
          name: 'description',
          content:
            'This is my personal website!',
        },
      ]}
    >
      <html lang="en" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Quinton Jason" />
      <meta name="theme-color" content="#00c200" />
      {/*<link rel="icon" href={favicon} type="x-icon/image" />*/}
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
    <div className="site">
      <Header />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;