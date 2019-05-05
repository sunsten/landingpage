import React, { Fragment } from 'react'

import { GlobalStyles } from '../../styles/AppStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<GlobalStyles />
				{children}
			</Fragment>
		</ThemeProvider>
	)
}

export default Layout
