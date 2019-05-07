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
		}
		// {
		// 	resolve: 'gatsby-source-graphql',
		// 	options: {
		// 		// This type will contain remote schema Query type
		// 		typeName: 'STRAPI',
		// 		// This is field under which it's accessible
		// 		fieldName: 'strapi',
		// 		// Url to query froms
		// 		url: 'http://localhost:1338/graphql'
		// 	}
		// },
		// {
		// 	resolve: `gatsby-source-strapi`,
		// 	options: {
		// 		apiURL: `http://localhost:1338`,
		// 		queryLimit: 100, // Default to 100
		// 		contentTypes: [`markdown`, `module`]
		// 	}
		// },
		// `gatsby-plugin-offline`
	]
}
