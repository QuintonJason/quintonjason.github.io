module.exports = {
	siteMetadata: {
		title: `Q's Fake Site`,
    description: `My Portfolio Site`
	},
  plugins: [
  `gatsby-transformer-remark`,
  `gatsby-plugin-sass`,
  // `gatsby-plugin-glamor`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
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