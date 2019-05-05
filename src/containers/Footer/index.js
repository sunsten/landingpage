import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
	width: 100vw;

	hr {
		border: 0;
		border-top: 1px solid black;
	}
`

const Contact = styled.div`
	width: 60%;
	height: 100%;
	border-left: 1px solid black;
	border-bottom: 1px solid black;
	margin-left: 40%;
	padding: 4vw 2vw;

	h4 {
		font-size: 1.6em;
		letter-spacing: 0.06em;
	}

	hr {
		width: 3vw;
		border: 0;
		border-top: 1px solid black;
		margin: 1vw 0 1.5vw 0;
	}

	div {
		font-family: 'calibreMedium';
		font-size: 1.3em;
	}

	@media screen and (max-width: 1023px) {
		font-size: 2em;
		padding: 8vw 4vw;

		hr {
			width: 6vw;
		}
	}

	@media screen and (max-width: 767px) {
		width: 60%;
		padding: 8vw 4vw;

		hr {
			width: 6vw;
		}
	}
`

const Information = styled.div`
	display: flex;
	padding: ${props => props.theme.mainBorderDesktop}vw ${props => props.theme.sideBorderDesktop}vw;
	letter-spacing: 0.08em;

	span {
		padding: 0 2vw 1.8vw 0;
	}

	@media screen and (max-width: 1023px) {
		padding: ${props => props.theme.mainBorderTablet}vw ${props => props.theme.sideBorderTablet}vw;
		font-size: 2.5em;
	}

	@media screen and (max-width: 767px) {
		padding: ${props => props.theme.mainBorderMobile}vw ${props => props.theme.sideBorderMobile}vw;
		width: 85%;
	}
`

const Footer = () => {
	return (
		<Main>
			<hr />
			<Contact>
				<h4>Contact</h4>
				<hr />
				<div>
					Want to test what we make, invest, or simply share your thoughts and ideas feel free to get in touch at{' '}
					<a href="mailto: info@sunset.com">info@sunset.com</a>
				</div>
			</Contact>
			<Information>
				<span>Privacy</span>
				<span>Imprint</span>
			</Information>
		</Main>
	)
}

export default Footer
