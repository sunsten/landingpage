module.exports = {
	siteMetadata: {
		title: `Sunsten`,
		description: `We inform on emergent technologies to help navigate their complexities.`,
		author: `Sunsten.org`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		'gatsby-plugin-svgr',
		`gatsby-transformer-json`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/data/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/sunsten-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://sunsten.us20.list-manage.com/subscribe/post?u=8c0166a2b5fb2b760d94e39c0&amp;id=4ddbcd67e0'
			}
		},
		`gatsby-plugin-offline`
	]
}
