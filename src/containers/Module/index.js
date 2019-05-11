import React, { Fragment } from 'react'
import styled from 'styled-components'

import TechnicalComponents from '../TechnicalComponents'
import Newsletter from '../Newsletter'

const Line = styled.hr`
	width: 100vw;
	border: 0;
	border-top: 1px solid black;
	position: relative;
	left: -${props => props.theme.sideBorderDesktop}vw;

	@media screen and (min-width: 1600px) {
		left: -${props => props.theme.sideBorderDesktop * 2}vw;
	}

	@media screen and (max-width: 1023px) {
		left: -${props => props.theme.sideBorderTablet}vw;
	}

	@media screen and (max-width: 767px) {
		left: -${props => props.theme.sideBorderMobile}vw;
	}
`

const Frame = styled.div`
	width: 100%;
	display: flex;
	padding: 8vw 0;
	color: #1b1917;

	@media screen and (max-width: 1023px) {
		padding: 15vw 0 8vw 0;

		&:first-child {
			padding: 10vw 0 18vw 0;
		}
	}

	@media screen and (max-width: 767px) {
		padding: 25vw 0 18vw 0;

		&:first-child {
			padding: 15vw 0 18vw 0;
		}
	}
`

const Aside = styled.aside`
	width: 20vw;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	position: relative;

	h3 {
		font-size: 5.5em;
		position: relative;
		top: -0.3em;
		letter-spacing: 0.08em;
	}

	h1 {
		color: #fa0000;
		writing-mode: vertical-rl;
		font-size: 1.5em;
		padding-right: 1.1vw;
		position: relative;
		top: 0.3em;
		/* letter-spacing: 0.05em; */
	}

	@media screen and (max-width: 1023px) {
		width: 6vw;

		h3 {
			position: absolute;
			font-size: 6.6em;
			top: -1.5em;
			letter-spacing: 0.08em;
			-webkit-text-stroke: 1px black;
		}

		h1 {
			font-size: 2.1em;
			top: 0.6em;
		}
	}

	@media screen and (max-width: 767px) {
		width: 9vw;

		h3 {
			position: absolute;
			font-size: 9.5em;
			top: -1.5em;
			letter-spacing: 0.08em;
		}

		h1 {
			font-size: 4em;
			top: 0.5em;
		}
	}
`

const Article = styled.article`
	width: 65%;
	font-size: 1.3em;
	line-height: 1.3;

	& .markdown:not(:last-child) {
		padding-bottom: 8vw;
	}

	.markDown {
		font-size: 6em;
	}

	@media screen and (max-width: 1023px) {
		width: 85%;
	}

	@media screen and (max-width: 767px) {
		width: 85%;
	}
`

const Columns = styled.div`
	width: 100%;
	display: flex;

	@media screen and (max-width: 1023px) {
		flex-direction: column;
	}
`

const ContentItem = styled.div`
	width: ${props => props.styleWidth || '100%'};
	padding-right: 2vw;
	font-family: ${props => props.styleFontFamily};
	font-size: ${props => props.styleFontSize}vw;

	&:first-child {
		padding-bottom: 5vw;
	}

	.markdown {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	p ~ hr {
		margin-top: 6vw;
	}

	strong {
		-webkit-text-fill-color: white;
		-webkit-text-stroke: 1px black;
		font-weight: normal;
	}

	em {
		font-family: 'pilatBold';
		font-style: normal;
	}

	h4 {
		width: 100%;
		font-size: 1.5em;
	}

	hr {
		width: 3vw;
		border: 0;
		border-top: 4px solid #fa0000;
		margin: 0.6vw 0 1vw 0;
	}

	hr + p {
		width: 75%;
		padding-left: 5vw;
	}

	@media (hover) {
		a:hover {
			opacity: 0.7;
		}
	}

	@media screen and (max-width: 1023px) {
		font-size: ${props => props.styleFontSize * 2}vw;
		width: 100%;
		line-height: 1.4;

		&:first-child {
			padding-bottom: 4vw;
		}

		.markdown {
			flex-direction: column;
		}

		hr {
			width: 6vw;
		}
	}

	@media screen and (max-width: 767px) {
		font-size: ${props => props.styleFontSize * 3.5}vw;
		width: 100%;

		.markdown {
			flex-direction: column;
		}

		hr {
			width: 6vw;
		}
	}
`

const ExtraContentFrame = styled.div`
	width: 100vw;
	position: relative;
	left: -22vw;
	padding: 2vw 0 8vw 0;
	overflow: hidden;

	& > hr {
		margin-top: 10vw;
	}
`

const ExtraContent = () => (
	<ExtraContentFrame>
		<TechnicalComponents />
	</ExtraContentFrame>
)

const getContentType = (box, markdowns, mdFiles) => {
	const findMdFile =
		!Array.isArray(box) &&
		mdFiles &&
		mdFiles.find(file => file.node.frontmatter.name.base === markdowns[box[1] - 1].link.base) //markdowns[box[1] - 1].link)
	const text = !Array.isArray(box) && findMdFile ? findMdFile.node.html : ''
	const selector = !Array.isArray(box) ? box[0] : 'mArray'
	const styleWidth = !Array.isArray(box) ? markdowns[box[1] - 1].styleWidth : ''
	const fontFamily = !Array.isArray(box) ? markdowns[box[1] - 1].fontFamily : ''
	const fontSize = !Array.isArray(box) ? markdowns[box[1] - 1].fontSize : ''
	const flexDirection = !Array.isArray(box) ? markdowns[box[1] - 1].flexDirection : null

	return {
		m: (
			<ContentItem
				styleWidth={styleWidth}
				styleFontFamily={fontFamily}
				styleFontSize={fontSize}
				flexDirection={flexDirection}
			>
				<div dangerouslySetInnerHTML={{ __html: text }} />
			</ContentItem>
		),
		mArray: Array.isArray(box) && (
			<Columns>
				{box.map((deepBox, index) => {
					return <Fragment key={index}>{getContentType(deepBox, markdowns, mdFiles)}</Fragment>
				})}
			</Columns>
		),
		e: <ExtraContent />
	}[selector]
}

const Module = ({ module, markdowns, index }) => {
	const content = module.content
		.trim()
		// split by ',' excluding string inside square brackets
		.split(/,(?![^\\[]*\])/)
		// split string inside square bracket items
		.map(item => (item.includes('[') ? item.slice(1, -1).split(',') : item))

	return (
		<Fragment>
			{index !== 0 && <Line />}
			{/* {index !== 0 && <Line />} */}
			<Frame key={index}>
				<Aside>
					<h3>{('0' + (index + 1)).slice(-2)}</h3>
					<h1>{module.title}</h1>
				</Aside>
				<Article>
					{content &&
						content.map((box, index) => {
							return <Fragment key={index}>{getContentType(box, module.markdowns, markdowns)}</Fragment>
						})}
				</Article>
			</Frame>
			{index == 2 && <Newsletter />}
		</Fragment>
	)
}

export default Module
