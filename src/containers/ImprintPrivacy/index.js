import React, { Fragment } from 'react'
import styled from 'styled-components'

const Main = styled.div`
	font-family: calibreMedium;
	font-size: 1em;
	display: flex;

	h4 {
		font-family: calibreMedium;
		font-size: 1.2em;
	}
`

const Aside = styled.aside`
	width: 20vw;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	position: relative;

	margin-left: ${props => props.theme.sideBorderDesktop}%;

	@media screen and (min-width: 1600px) {
		margin-left: ${props => props.theme.sideBorderDesktop * 2}vw;
	}

	@media screen and (max-width: 1023px) {
		margin-left: ${props => props.theme.sideBorderTablet}vw;
		justify-content: flex-start;
	}

	@media screen and (max-width: 767px) {
		margin-left: ${props => props.theme.sideBorderMobile}vw;
		justify-content: flex-start;
	}

	h1 {
		color: #fa0000;
		writing-mode: vertical-rl;
		font-size: 1.5em;
		padding-right: 1vw;
		position: relative;
		top: 0.3em;
		letter-spacing: 0.1em;
	}

	@media screen and (max-width: 1023px) {
		width: 6vw;

		h1 {
			font-size: 2.1em;
			top: 0.3em;
		}
	}

	@media screen and (max-width: 767px) {
		width: 9vw;

		h1 {
			font-size: 4em;
			top: 0.2em;
		}
	}
`

const Article = styled.article`
	width: 65%;
	font-size: 1.3em;
	line-height: 1.3;
	margin-bottom: 5vw;
	font-family: calibreMedium;

	h5 {
		font-size: 1.2em;
		font-family: calibreMedium;
	}

	h5 ~ p {
		padding: 3vw 0;
		font-family: calibreMedium;
	}

	h4 ~ p {
		padding: 3vw 0;
		font-family: calibreMedium;
	}

	h2 {
		font-family: calibreMedium;
		font-size: 2em;
	}

	h2 ~ p {
		padding: 1vw 0;
		font-size: 1.5em;
		font-family: calibreMedium;
	}

	@media screen and (max-width: 1023px) {
		font-size: 2em;
		width: 80%;

		h2 {
			font-size: 2em;
		}

		h2 ~ p {
			padding: 0.5em 0;
			font-size: 1.5em;
		}
	}

	@media screen and (max-width: 767px) {
		font-size: 3em;
		width: 70%;
	}
`

const ImprintPrivacy = ({ imprint, privacy, showImprint, showPrivacy }) => {
	return (
		<Main>
			{showImprint && (
				<Fragment>
					<Aside>
						<h1>Imprint</h1>
					</Aside>
					<Article>
						<div dangerouslySetInnerHTML={{ __html: imprint }} />
					</Article>
				</Fragment>
			)}
			{showPrivacy && (
				<Fragment>
					<Aside>
						<h1>Privacy</h1>
					</Aside>
					<Article>
						<div dangerouslySetInnerHTML={{ __html: privacy }} />
					</Article>
				</Fragment>
			)}
		</Main>
	)
}

export default ImprintPrivacy
