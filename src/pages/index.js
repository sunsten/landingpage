import React from 'react'
// import { Helmet } from 'react-helmet-async'

import SEO from '../components/seo'
import LandingPage from '../containers/LandingPage'
import Layout from '../containers/Layout'
import Modules from '../containers/Modules'
import Footer from '../containers/Footer'

const Home = ({ data }) => {
	const imprint = data.allMarkdownRemark.edges.find(file => file.node.frontmatter.name.name === 'imprint').node.html
	const privacy = data.allMarkdownRemark.edges.find(file => file.node.frontmatter.name.name === 'privacy').node.html

	return (
		<Layout>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			{/* <Helmet>
				<title>Sunsten</title>
			</Helmet> */}
			<LandingPage />
			<Modules />
			<Footer imprint={imprint} privacy={privacy} />
		</Layout>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark(filter: { frontmatter: { name: { name: { in: ["imprint", "privacy"] } } } }) {
			edges {
				node {
					id
					html
					frontmatter {
						title
						name {
							id
							base
							name
						}
					}
				}
			}
		}
	}
`

export default Home
