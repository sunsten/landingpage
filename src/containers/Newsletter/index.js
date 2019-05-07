import React from 'react'
import styled from 'styled-components'

import { Formik, Field, Form, ErrorMessage } from 'formik'

const Main = styled.div`
	height: 30vh;
	background: #1b1917;
	width: 100vw;
	position: relative;
	left: -${props => props.theme.sideBorderDesktop}vw;
	padding: 10vw 0;
	display: flex;

	@media screen and (max-width: 1023px) {
		left: -${props => props.theme.sideBorderTablet}vw;
		/* margin-bottom: 18vw; */
	}

	@media screen and (max-width: 767px) {
		left: -${props => props.theme.sideBorderMobile}vw;
		/* margin-bottom: 18vw; */
	}
`

const Aside = styled.aside`
	width: 20%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	position: relative;

	h3 {
		font-size: 5em;
		position: relative;
		top: -0.3em;
		letter-spacing: 0.08em;
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
		width: 6%;

		h3 {
			position: absolute;
			font-size: 6em;
			top: -1.5em;
			letter-spacing: 0.08em;
		}

		h1 {
			font-size: 2.1em;
			top: 0.6em;
		}
	}

	@media screen and (max-width: 767px) {
		width: 9%;

		h3 {
			position: absolute;
			font-size: 9em;
			top: -1.5em;
			letter-spacing: 0.08em;
		}

		h1 {
			font-size: 4em;
			top: 0.5em;
		}
	}
`

const FormFrame = styled.div`
	button,
	input,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
	}

	.form {
		border: 1px solid green;
		display: flex;
	}
`

const Newsletter = () => {
	return (
		<Main>
			<Aside>
				<h1>Contact</h1>
			</Aside>
			<FormFrame>
				<Formik
					initialValues={{}}
					onSubmit={(values, actions) => {
						// MyImaginaryRestApiCall(user.id, values).then(
						// 	updatedUser => {
						// 		actions.setSubmitting(false)
						// 		updateUser(updatedUser)
						// 		onClose()
						// 	},
						// 	error => {
						// 		actions.setSubmitting(false)
						// 		actions.setErrors(transformMyRestApiErrorsToAnObject(error))
						// 		actions.setStatus({ msg: 'Set some arbitrary status or data' })
						// 	}
						// )
					}}
					render={({ errors, status, touched, isSubmitting }) => (
						<Form className="form">
							<div>
								<Field type="text" className="error" name="social.facebook" />
								<ErrorMessage name="social.facebook" component="div" />
								<Field type="text" name="email" />
								<ErrorMessage name="email" component="div" />
							</div>
							<Field type="email" name="email" />
							<ErrorMessage name="email" component="div" />
							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</Form>
					)}
				/>
			</FormFrame>
		</Main>
	)
}

export default Newsletter
