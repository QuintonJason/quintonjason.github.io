const path = require(`path`);
const lost = require(`lost`);

module.exports = {
  siteMetadata: {
    title: `quintonjason.com `,
    description: `My Portfolio Site`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 590
            }
          },
          // {
          //   resolve: `gatsby-plugin-postcss-sass`,
          //   options: {
          //     postCssPlugins: [lost()]
          //   }
          // },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {}
          },
          {
            resolve: "gatsby-remark-images",
            pathPrefix: "/pages",
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `Open+Sans\:400,400i` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-57117612-1"
      }
    },
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Quinton Jason Personal Site",
        short_name: "Quinton Jason",
        start_url: "/",
        background_color: "#00c200",
        theme_color: "#00c200",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },*/
    "gatsby-plugin-offline"
    // {
    // 	resolve: 'gatsby-plugin-typography',
    // 	options: {
    // 		pathToConfigModule: 'src/utils/typography.js'
    // 	}
    // }
  ]
};
