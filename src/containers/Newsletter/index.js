import React, { useState } from 'react'
import styled from 'styled-components'

import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import addToMailchimp from 'gatsby-plugin-mailchimp'

const Main = styled.div`
	background: #1b1917;
	width: 100vw;
	position: relative;
	left: -${props => props.theme.sideBorderDesktop}vw;
	padding: 8% 0;
	display: flex;

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
		top: 0.15em;
		letter-spacing: 0.1em;
	}

	@media screen and (max-width: 1023px) {
		width: 6vw;

		h1 {
			font-size: 2.1em;
			top: 0.25em;
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

const FormFrame = styled.div`
	width: 60%;
	font-family: calibreMedium;

	.title {
		color: white;
		font-size: 1.8em;
		margin-left: 1%;
	}

	button,
	input {
		font-size: 1.1em;
		font-family: calibreMedium;
	}

	input {
		margin: 1%;
		border: 1.5px solid #fa0000;
		padding: 1.2vw 0.8vw 0.8vw 0.8vw;
		background: #f2f2f2;
	}

	.half {
		width: 48%;
	}

	.whole {
		width: 100%;
	}

	.form {
		display: flex;
		flex-wrap: wrap;
	}

	.submitButton {
		width: 30%;
		padding: 1.2vw 0.8vw 0.8vw 0.8vw;
		border: none;
		margin: 1%;
		background: #ffffff;
		cursor: pointer;
	}

	@media (hover) {
		.submitButton:hover {
			opacity: 0.5;
		}
	}

	.error {
		color: #fa0000;
		width: 100%;
		margin: 1%;
	}

	@media screen and (max-width: 1023px) {
		font-size: 2.3em;
		width: 80%;

		.title {
			margin: 0 4% 2% 4%;
		}

		input {
			margin: 4%;
			height: 2em;
			padding: 0.3em 0.3em 0em 0.3em;
		}

		.submitButton {
			width: 100%;
			margin: 4%;
			height: 2em;
			padding: 0.3em 0.3em 0em 0.3em;
		}

		.half {
			width: 100%;
		}

		.error {
			margin: 4%;
		}
	}

	@media screen and (max-width: 767px) {
		font-size: 4.3em;

		.title {
			font-size: 1.4em;
		}
	}
`

const FormSent = styled.div`
	width: 100%;
	color: #fa0000;
	font-size: 1.1em;
	font-family: calibreMedium;
	margin: 1%;

	@media screen and (max-width: 1023px) {
		margin: 4%;
	}
`

const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(1, 'Please enter a longer name')
		.max(70, 'Please enter a shorter name')
		.required('Please enter your name'),
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Please enter your email')
})

const Newsletter = () => {
	const [signedUp, setSignedUp] = useState(false)

	return (
		<Main>
			<Aside>
				<h1>Contact</h1>
			</Aside>
			<FormFrame>
				<div className="title">Join our mailing list</div>
				<Formik
					validationSchema={SignupSchema}
					onSubmit={(values, actions) => {
						const email = values.email
						const listFields = { NAME: values.name, COMPANY: values.company }
						addToMailchimp(email, listFields)
							.then(data => {
								setSignedUp(true)
								actions.setSubmitting(false)
								actions.resetForm({})
								actions.setStatus({ success: true })
							})
							.catch(() => {})
					}}
					render={({ isSubmitting, values }) => (
						<Form className="form">
							<Field value={values.name || ''} type="text" className="half" name="name" placeholder="Name" />
							<Field value={values.company || ''} type="text" className="half" name="company" placeholder="Company" />
							<Field value={values.email || ''} type="email" className="whole" name="email" placeholder="Email" />
							<button type="submit" className="submitButton" disabled={isSubmitting}>
								Submit
							</button>
							<ErrorMessage className="error" name="name" component="div" />
							<ErrorMessage className="error" name="email" component="div" />
							{signedUp && <FormSent>Thank you for your interest</FormSent>}
						</Form>
					)}
				/>
			</FormFrame>
		</Main>
	)
}

export default Newsletter
