import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Arrow } from './arrow_between.svg'

const Main = styled.div`
	width: 100%;
	display: flex;
	font-family: calibreMedium;
`

const Frame = styled.div`
	width: 68%;
	margin-left: 22%;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1023px) {
		width: 100%;
	}
`

const Part = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 2vw 4vw 2vw 0;

	.title {
		text-align: center;
	}

	hr {
		border: 0;
		border-top: 4px solid #fa0000;
		margin: 0.8vw 0;
		opacity: 0.8;
	}

	@media screen and (max-width: 1023px) {
		.title {
			font-size: 1.5em;
		}
	}

	@media screen and (max-width: 767px) {
		.title {
			font-size: 3.6em;
		}
	}
`

const Components = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	.titleFrame {
		border: 1px solid black;
		color: #ffffff;
		background: black;
		font-size: 0.8em;
		padding: 0.5em;
		display: flex;
		align-items: flex-end;
		width: 33%;
		text-align: center;
		line-height: 1.42;
		height: 3em;
	}

	.titleFrame > div {
		width: 100%;
	}

	@media screen and (max-width: 1023px) {
		font-size: 1.4em;
	}

	@media screen and (max-width: 767px) {
		flex-direction: column;
		font-size: 3.7em;

		.titleFrame {
			width: 100%;
			margin-bottom: 1px;
		}
	}
`

const ArrowFrame = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		height: 1.8em;
		width: 1.5em;
	}

	svg:last-child {
		transform: rotate(180deg);
	}

	@media screen and (max-width: 1023px) {
		svg {
			height: 2.8em;
			width: 2.5em;
		}
	}

	@media screen and (max-width: 767px) {
		padding: 1vw 0;
		svg {
			height: 6em;
			width: 4em;
		}
	}
`

const TechnicalComponents = () => {
	return (
		<Main>
			<Frame>
				<Part>
					<div className="title">TECHNICAL COMPONENTS</div>
					<hr />
					<Components>
						<div className="titleFrame">
							<div>Consensus Model</div>
						</div>
						<div className="titleFrame">
							<div>Consensus Rules</div>
						</div>
						<div className="titleFrame">
							<div>Database</div>
						</div>
					</Components>
				</Part>
				<ArrowFrame>
					<Arrow />
					<Arrow />
				</ArrowFrame>
				<Part>
					<div className="title">LOGICAL LAYER</div>
					<hr />
					<Components>
						<div className="titleFrame">
							<div>Administrative</div>
						</div>
						<div className="titleFrame">
							<div>Governance</div>
						</div>
						<div className="titleFrame">
							<div>Incentive</div>
						</div>
					</Components>
				</Part>
			</Frame>
		</Main>
	)
}

export default TechnicalComponents
