import styled from 'styled-components'

export const Tablet = styled.span`
	width: ${props => props.styleWidth || null};
	height: auto;
	align-self: ${props => props.alignSelf || 'center'};

	@media only screen and (max-width: 767px) {
		display: none;

		& * {
			display: none;
		}
	}
	@media only screen and (max-width: 1023px) and (min-width: 768px) {
		display: initial;

		& * {
			display: initial;
		}
	}
	@media only screen and (min-width: 1024px) {
		display: none;

		& * {
			display: none;
		}
	}
`

export const Desktop = styled.span`
	width: ${props => props.styleWidth || null};
	height: auto;
	align-self: ${props => props.alignSelf || 'center'};

	@media only screen and (max-width: 767px) {
		display: none;

		& * {
			display: none;
		}
	}
	@media only screen and (max-width: 1023px) and (min-width: 768px) {
		display: none;

		& * {
			display: none;
		}
	}
	@media only screen and (min-width: 1024px) {
		display: initial;

		/* & * {
      display: initial;
    } */
	}
`

export const TabletMax = styled.span`
	width: ${props => props.styleWidth || ''};
	height: auto;
	align-self: ${props => props.alignSelf || 'center'};

	@media only screen and (max-width: 1023px) {
		display: initial;
	}
	@media only screen and (min-width: 1024px) {
		display: none;

		& * {
			display: none;
		}
	}
`

export const TabletMin = styled.span`
	width: ${props => props.styleWidth || ''};
	height: auto;
	align-self: ${props => props.alignSelf || 'center'};

	@media only screen and (max-width: 767px) {
		display: none;
	}
	@media only screen and (min-width: 768px) {
		display: initial;

		& * {
			display: initial;
		}
	}
`

export const Mobile = styled.span`
	width: ${props => props.styleWidth || null};
	height: auto;
	align-self: ${props => props.alignSelf || 'center'};

	@media only screen and (max-width: 767px) {
		display: initial;

		& * {
			display: initial;
		}
	}
	@media only screen and (max-width: 1023px) and (min-width: 768px) {
		display: none;

		& * {
			display: none;
		}
	}
	@media only screen and (min-width: 1024px) {
		display: none;

		& * {
			display: none;
		}
	}
`
