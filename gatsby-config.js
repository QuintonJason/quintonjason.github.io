module.exports = {
	siteMetadata: {
		title: `Q's Fake Site`,
	},
  plugins: [
  `gatsby-transformer-remark`,
  `gatsby-plugin-glamor`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
	{
		resolve: 'gatsby-plugin-typography',
		options: {
			pathToConfigModule: 'src/utils/typography.js'
		}
	}
  ]
};