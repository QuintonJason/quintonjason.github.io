module.exports = {
  siteMetadata: {
    title: `Quinton Jason`,
    description: `Senior Design Engineer focused on design systems, frontend architecture, accessibility, design tokens, teaching, and AI-native product workflows.`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {}
          },
          {
            resolve: "gatsby-remark-images",
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
      resolve: `gatsby-plugin-react-helmet`,
      options: {
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
    `gatsby-plugin-styled-components`,
    /* "gatsby-plugin-offline"*/
    // {
    // 	resolve: 'gatsby-plugin-typography',
    // 	options: {
    // 		pathToConfigModule: 'src/utils/typography.js'
    // 	}
    // }
  ]
};
