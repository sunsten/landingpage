import React from 'react'
// import { Helmet } from 'react-helmet-async'

import SEO from '../components/seo'
import LandingPage from '../containers/LandingPage'
import Layout from '../containers/Layout'
import Modules from '../containers/Modules'
import Footer from '../containers/Footer'

const Home = () => {
	// const dots = Array.from({ length: 200 }, i => {
	// 	const posX = Math.round(Math.random() * 100) - 1
	// 	const posY = Math.round(Math.random() * 100) - 1

	// 	return { posX, posY }
	// })

	return (
		<Layout>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			{/* <Helmet>
				<title>Sunsten</title>
			</Helmet> */}
			<LandingPage />
			<Modules />
			<Footer />
		</Layout>
	)
}
export default Home
