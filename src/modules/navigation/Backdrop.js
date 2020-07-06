import React from 'react'
import styled, { css } from 'styled-components'

const Backdrop = ({ showDrawer, setShowDrawer}) => {
	return (
		<RootContainer showDrawer={showDrawer} />
	)
}

const RootContainer = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	opacity: 0;
	backdrop-filter: blur(10px); 
	transition-property: opacity, visibility;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	z-index: 9;
	visibility: hidden;
	${props => props.showDrawer && css`
		opacity: 1;
		visibility: visible;
		background-color: rgba(33,33,33,0.5);
	`}
	@media only screen and (max-width: 750px) {
		display: none;
	}
`

export default Backdrop