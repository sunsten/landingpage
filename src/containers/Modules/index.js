import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'

import { Element } from 'react-scroll'

import Module from '../Module'

const Main = styled.div`
	overflow: hidden;
	width: 100%;
	padding: ${props => props.theme.mainBorderDesktop}vw ${props => props.theme.sideBorderDesktop}vw 0
		${props => props.theme.sideBorderDesktop}vw;

	@media screen and (min-width: 1600px) {
		padding: ${props => props.theme.mainBorderDesktop}vw ${props => props.theme.sideBorderDesktop * 2}vw 0
			${props => props.theme.sideBorderDesktop * 2}vw;
	}

	@media screen and (max-width: 1023px) {
		padding: ${props => props.theme.mainBorderTablet * 2}vw ${props => props.theme.sideBorderTablet}vw 0
			${props => props.theme.sideBorderTablet}vw;
	}

	@media screen and (max-width: 767px) {
		padding: ${props => props.theme.mainBorderMobile * 2}vw ${props => props.theme.sideBorderMobile}vw 0
			${props => props.theme.sideBorderMobile}vw;
	}
`

const Modules = () => {
	const data = useStaticQuery(graphql`
		query ModuleQuery {
			allModulesJson {
				edges {
					node {
						title
						content
						markdowns {
							text
							fontSize
							fontFamily
							styleWidth
							link {
								base
							}
						}
					}
				}
			}
			allMarkdownRemark {
				edges {
					node {
						id
						html
						headings {
							depth
							value
						}
						frontmatter {
							title
							name {
								id
								base
							}
						}
					}
				}
			}
		}
	`)

	const { edges: modules } = data.allModulesJson
	const { edges: markdowns } = data.allMarkdownRemark

	return (
		<Main>
			{modules &&
				modules.map((module, index) => (
					<Element className="element" key={index} name={'index' + index}>
						<Module module={module.node} markdowns={markdowns} index={index} />
					</Element>
				))}
		</Main>
	)
}

export default Modules
