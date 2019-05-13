import React, { useState } from 'react'
import styled from 'styled-components'

import ImprintPrivacy from '../ImprintPrivacy'

const Main = styled.div`
	color: #1b1917;
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
		border-top: 3px solid #fa0000;
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
			margin: 2vw 0 3vw 0;
		}
	}

	@media screen and (max-width: 767px) {
		font-size: 3em;
		width: 60%;
		padding: 8vw 4vw;

		hr {
			width: 6vw;
			margin: 3vw 0 4vw 0;
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
		padding: ${props => props.theme.mainBorderTablet * 2}vw ${props => props.theme.sideBorderTablet}vw;
		font-size: 2.5em;
	}

	@media screen and (max-width: 767px) {
		padding: ${props => props.theme.mainBorderMobile * 2}vw ${props => props.theme.sideBorderMobile}vw;
		width: 85%;
		font-size: 3.5em;
	}
`

const MoreInfo = styled.span`
	cursor: pointer;

	@media (hover) {
		:hover {
			opacity: 0.5;
		}
	}
`

const Footer = ({ privacy, imprint }) => {
	const [showPrivacy, setShowPrivacy] = useState(false)
	const [showImprint, setShowImprint] = useState(false)

	return (
		<Main>
			<hr />
			<Contact>
				<h4>Contact</h4>
				<hr />
				<div>
					Interested in a demo of the tools or simply in sharing your thoughts and ideas, send us an email at
					<a href="mailto: info@sunsten.org"> info@sunsten.org</a>
				</div>
			</Contact>
			<Information>
				<MoreInfo
					onClick={() => {
						setShowPrivacy(prevState => !prevState)
						setShowImprint(false)
					}}
				>
					Privacy
				</MoreInfo>
				<MoreInfo
					onClick={() => {
						setShowImprint(prevState => !prevState)
						setShowPrivacy(false)
					}}
				>
					Impressum
				</MoreInfo>
			</Information>
			<ImprintPrivacy imprint={imprint} privacy={privacy} showImprint={showImprint} showPrivacy={showPrivacy} />
		</Main>
	)
}

export default Footer
