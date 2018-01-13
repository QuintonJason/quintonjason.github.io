module.exports = {
	siteMetadata: {
		title: `Q's Fake Site`,
    description: `My Portfolio Site`
	},
  plugins: [
  `gatsby-plugin-sass`,
  // `gatsby-plugin-glamor`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-copy-linked-files`,
        {
          resolve: `gatsby-remark-responsive-image`,
          options: {
            maxWidth: 590,
          },
        },
        {
          resolve: 'gatsby-remark-images',
          pathPrefix: '/pages',
          options: {
            maxWidth: 590,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
          }
        },
      ]
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`,
    },
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
	// {
	// 	resolve: 'gatsby-plugin-typography',
	// 	options: {
	// 		pathToConfigModule: 'src/utils/typography.js'
	// 	}
	// }
  ]
};