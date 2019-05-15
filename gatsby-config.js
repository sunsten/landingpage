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
				name: `SUNSTEN.ORG`,
				short_name: `Sunsten`,
				start_url: `/`,
				background_color: `white`,
				theme_color: `black`,
				display: `minimal-ui`,
				icon: `src/images/sunsten-icon.png`
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://sunsten.us20.list-manage.com/subscribe/post?u=8c0166a2b5fb2b760d94e39c0&amp;id=4ddbcd67e0'
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-140093496-1'
			}
		},
		`gatsby-plugin-offline`
	]
}
