import React, { useState } from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'

import { Link } from 'react-scroll'
import { ReactComponent as Arrow } from './arrowLandingpage.svg'
import { ReactComponent as Logo } from './sunsten_logo.svg'
import { ReactComponent as Menu } from './burgerMenu.svg'
import { Mobile, TabletMin } from '../../styles/mediaQuery'

const Main = styled.div`
	width: 100vw;
	height: 100vh;
	padding: ${props => props.theme.mainBorderDesktop}vw ${props => props.theme.sideBorderDesktop}vw;
	overflow: hidden;
	background-image: linear-gradient(to bottom right, white, #ff714c);

	@media screen and (min-width: 1600px) {
		padding: ${props => props.theme.mainBorderDesktop}vw ${props => props.theme.sideBorderDesktop * 2}vw;
	}

	@media screen and (max-width: 1023px) {
		padding: ${props => props.theme.mainBorderTablet * 2}vw ${props => props.theme.sideBorderTablet}vw;
	}

	@media screen and (max-width: 767px) {
		padding: ${props => props.theme.mainBorderMobile * 2}vw ${props => props.theme.sideBorderMobile}vw;
	}
`

const Header = styled.header`
	width: 100%;
	height: auto;
	font-size: 1.5em;
	display: flex;
	justify-content: space-between;
	letter-spacing: 0.07em;

	h1 {
		font-family: 'calibreSemibold';
	}
	h2 {
		font-family: 'calibreLight';
	}

	.menu {
		position: relative;
		height: 3em;
		width: auto;
	}

	.logo {
		position: relative;
		top: -0.4em;
		height: 3em;
		width: auto;
	}

	@media screen and (max-width: 1023px) {
		.logo {
			top: -0.4em;
			height: 4em;
		}
	}

	@media screen and (max-width: 767px) {
		.logo {
			top: -0.4em;
			height: 6em;
		}
	}
`

const Navigation = styled.nav`
	display: flex;
	font-size: 1.2em;

	.navItem {
		display: flex;
		cursor: pointer;
	}
	@media (hover) {
		.navItem:hover h1 {
			opacity: 0.7;
		}
	}

	h1 {
		font-family: 'calibreSemibold';
		padding-left: 1.5vw;
	}

	div {
		font-family: 'calibreLight';
		padding-left: 3vw;
	}

	@media screen and (max-width: 767px) {
		position: absolute;
		right: ${props => props.theme.mainBorderMobile * 2}vw;
		top: 24vw;
		font-size: 2.8em;

		.navItem {
			padding-left: 2vw;
		}
	}
`

const Body = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	hr {
		margin: 0;
		padding: 0;
		width: 100vw;
		position: relative;
		border: 0;
		border-top: 1px solid black;
		left: -${props => props.theme.sideBorderDesktop}vw;
	}

	.title {
		width: 80%;
		font-size: 9vh;
		padding: 4vw 0;
		line-height: 1.15;
		letter-spacing: 0em;
	}

	.goToMoreFrame {
		height: auto;
	}

	.goToMore {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.goToMoreText {
		padding-bottom: 2vw;
	}

	.arrow {
		width: 20%;
		border-left: 1px solid black;
		padding: 3vw;
		position: relative;
		left: ${props => props.theme.sideBorderDesktop}vw;
		display: flex;
		justify-content: center;
		cursor: pointer;
	}
	.arrow > svg {
		height: 9vh;
		width: auto;
	}

	@media (hover) {
		.arrow:hover path {
			fill: black;
		}
	}

	@media screen and (min-width: 1600px) {
		hr {
			left: -${props => props.theme.sideBorderDesktop * 2}vw;
		}
	}

	@media screen and (max-width: 1023px) {
		.title {
			width: 90%;
			font-size: 7.5vh;
			padding: 8vw 0;
		}

		.title h3 {
			-webkit-text-stroke: 1px black;
		}

		.goToMoreText {
			font-size: 2em;
		}
		hr {
			left: -${props => props.theme.sideBorderTablet}vw;
		}
		.arrow {
			left: ${props => props.theme.sideBorderTablet}vw;
		}
	}

	@media screen and (max-width: 767px) {
		.title {
			font-size: 6vh;
			padding: 18vw 0;
			width: 100%;
		}
		.goToMoreText {
			font-size: 3.3em;
		}
		hr {
			left: -${props => props.theme.sideBorderMobile}vw;
		}
		.arrow {
			left: ${props => props.theme.sideBorderMobile}vw;
			width: 25%;
		}
	}
`

const LandingPage = () => {
	const [menuOpen, showMenu] = useState(false)

	const data = useStaticQuery(graphql`
		query LandingPageQuery {
			allModulesJson {
				edges {
					node {
						title
					}
				}
			}
		}
	`)
	const { edges: modules } = data.allModulesJson

	return (
		<Main>
			<Header>
				<Logo className="logo" />
				<TabletMin>
					<Navigation>
						{modules &&
							modules.map((module, index) => (
								<Link key={index} to={'index' + index} smooth={true} className="navItem">
									<div className="number">{('0' + (index + 1)).slice(-2)}</div>
									<h1>{module.node.title}</h1>
								</Link>
							))}
					</Navigation>
				</TabletMin>
				<Mobile>
					<Menu className="menu" onClick={() => showMenu(prevState => !prevState)} />
					<Navigation>
						{menuOpen &&
							modules &&
							modules.map((module, index) => (
								<Link key={index} to={'index' + index} smooth={true} className="navItem">
									<div className="number">{('0' + (index + 1)).slice(-2)}</div>
									<h1>{module.node.title}</h1>
								</Link>
							))}
					</Navigation>
				</Mobile>
			</Header>
			<Body>
				<div className="title">
					We inform on <h3>emergent technologies</h3> to help navigate their <h3>complexities</h3>
				</div>
				<div className="goToMoreFrame">
					<hr />
					<div className="goToMore">
						<div className="goToMoreText">Scroll to learn about our approach</div>
						<Link to="index0" smooth={true} className="arrow">
							<Arrow />
						</Link>
					</div>
					<hr />
				</div>
			</Body>
		</Main>
	)
}

export default LandingPage
