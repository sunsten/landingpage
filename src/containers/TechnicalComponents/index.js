import React from 'react'
import styled from 'styled-components'

import Arrow from './arrow.svg'

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

	@media screen and (max-width: 767px) {
		.title {
			font-size: 2em;
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
		width: 30%;
		text-align: center;
		line-height: 1.42;
		height: 3em;
	}

	.titleFrame > div {
		width: 100%;
	}

	@media screen and (max-width: 1023px) {
	}

	@media screen and (max-width: 767px) {
		flex-direction: column;
		font-size: 1.8em;

		.titleFrame {
			width: 100%;
			margin-bottom: 1px;
		}
	}
`

const TechnicalComponents = () => {
	return (
		<Main>
			<Frame>
				<Part>
					<div className="title">TECHICAL COMPONENTS</div>
					<hr />
					<Components>
						<div className="titleFrame">
							<div>Consensul Model</div>
						</div>
						<div className="titleFrame">
							<div>Consensul Rules</div>
						</div>
						<div className="titleFrame">
							<div>Database</div>
						</div>
					</Components>
				</Part>

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
